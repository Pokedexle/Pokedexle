import {AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, signal, ViewChild} from '@angular/core';
import {PokemonCardComponent} from './components/pokemon-card/pokemon-card.component';
import {PokemonCardListService} from './services/pokemon-card-list.service';
import {PokemonCardModel} from './models/pokemon-card.model';

@Component({
  selector: 'app-pokemon-card-list',
    imports: [
        PokemonCardComponent
    ],
  templateUrl: './pokemon-card-list.component.html',
  styleUrl: './pokemon-card-list.component.scss'
})
export class PokemonCardListComponent implements OnInit, AfterViewInit, OnDestroy {
    private readonly pokemonCardListService = inject(PokemonCardListService);
    private readonly pokemonCardGap = signal(20);
    private pokemonCardListRef?: ElementRef<HTMLElement>;
    private listResizeObserver?: ResizeObserver;
    private cardResizeObserver?: ResizeObserver;
    private observedCardElement?: HTMLElement;
    private animationFrameId?: number;

    pokemonCards = signal<PokemonCardModel[]>([]);
    isLoading = signal(true);
    hasError = signal(false);

    @ViewChild('pokemonCardList')
    set pokemonCardList(value: ElementRef<HTMLElement> | undefined) {
        this.pokemonCardListRef = value;
        this.bindResizeObservers();
        this.scheduleGapUpdate();
    }
    get pokemonCardGapCss(): string {
        return `${this.pokemonCardGap()}px`;
    }

    ngOnInit(): void {
        this.loadPokemonCards();
    }

    ngAfterViewInit(): void {
        this.bindResizeObservers();
        this.scheduleGapUpdate();
    }
    ngOnDestroy(): void {
        this.listResizeObserver?.disconnect();
        this.cardResizeObserver?.disconnect();
        if (this.animationFrameId !== undefined) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }

    private loadPokemonCards(): void {
        this.pokemonCardListService.getPokemonCard(6).subscribe({
            next: (pokemonCard) => {
                this.pokemonCards.set(Array.from({length: 52}, () => pokemonCard));
                this.isLoading.set(false);
                this.scheduleGapUpdate();
            },
            error: () => {
                this.hasError.set(true);
                this.isLoading.set(false);
            },
        });
    }

    private bindResizeObservers(): void {
        const listElement = this.pokemonCardListRef?.nativeElement;
        if (typeof ResizeObserver === 'undefined' || !listElement) {
            return;
        }
        this.listResizeObserver?.disconnect();
        this.listResizeObserver = new ResizeObserver(() => {
            this.scheduleGapUpdate();
        });
        this.listResizeObserver.observe(listElement);
        this.observeFirstCard(listElement);
    }

    private observeFirstCard(listElement: HTMLElement): void {
        const firstCard = listElement.querySelector<HTMLElement>('.pokemon-card');
        if (firstCard === this.observedCardElement) {
            return;
        }
        this.cardResizeObserver?.disconnect();
        this.observedCardElement = firstCard ?? undefined;
        if (!firstCard || typeof ResizeObserver === 'undefined') {
            return;
        }
        this.cardResizeObserver = new ResizeObserver(() => {
            this.scheduleGapUpdate();
        });
        this.cardResizeObserver.observe(firstCard);
    }

    private scheduleGapUpdate(): void {
        if (this.animationFrameId !== undefined) {
            cancelAnimationFrame(this.animationFrameId);
        }
        if (typeof requestAnimationFrame === 'undefined') {
            this.updateGapFromCardWidth();
            return;
        }
        this.animationFrameId = requestAnimationFrame(() => {
            this.animationFrameId = undefined;
            this.updateGapFromCardWidth();
        });
    }

    private updateGapFromCardWidth(): void {
        const listElement = this.pokemonCardListRef?.nativeElement;
        if (!listElement) {
            return;
        }
        this.observeFirstCard(listElement);
        const firstCard = this.observedCardElement;
        if (!firstCard) {
            return;
        }
        const cardWidth = firstCard.getBoundingClientRect().width;
        if (!Number.isFinite(cardWidth) || cardWidth <= 0) {
            return;
        }
        this.pokemonCardGap.set(cardWidth * 0.1);
    }
}
