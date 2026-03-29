import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild, signal} from '@angular/core';
import { TypeComponent } from '../../../../shared/components/type/type.component';
import {PokemonCardModel} from '../../models/pokemon-card.model';

@Component({
  selector: 'app-pokemon-card',
  imports: [TypeComponent],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent implements AfterViewInit, OnDestroy {
    @Input()
    pokemonCardModel!: PokemonCardModel;

    @ViewChild('card')
    private cardRef?: ElementRef<HTMLElement>;

    private readonly isShiny = signal(false);
    private readonly cardHeight = signal(230);
    private resizeObserver?: ResizeObserver;
    private animationFrameId?: number;

    get name(): string {
        return this.pokemonCardModel?.name ?? '';
    }
    get types(): number[] {
        return this.pokemonCardModel?.types ?? [];
    }

    get formattedId(): string {
        const id = this.pokemonCardModel?.id;
        return `#${id.toString().padStart(3, '0')}`;
    }
    get currentImage(): string {
        const id = this.pokemonCardModel?.id;
        return `/sprites/${id}/${this.isShiny() ? 'shiny' : 'regular'}.png`;
    }

    onHover(){
        this.isShiny.set(true);
    }
    onLeave(){
        this.isShiny.set(false);
    }

    get cardHeightCss(): string { return this.toPx(1); }
    get cardNameSizeCss(): string { return this.toPx(0.07); }
    get cardIdSizeCss(): string { return this.toPx(0.05); }
    get cardSpriteHeightCss(): string { return this.toPx(0.66); }
    get cardTypeHeightCss(): string { return this.toPx(0.10); }
    get cardVerticalGapCss(): string { return this.toPx(0.04); }

    ngAfterViewInit(): void {
        this.updateCardHeight();
        if (typeof ResizeObserver === 'undefined' || !this.cardRef) {
            return;
        }
        this.resizeObserver = new ResizeObserver(() => {
            this.scheduleHeightUpdate();
        });
        this.resizeObserver.observe(this.cardRef.nativeElement);
    }
    ngOnDestroy(): void {
        this.resizeObserver?.disconnect();
        if (this.animationFrameId !== undefined) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }

    private scheduleHeightUpdate(): void {
        if (this.animationFrameId !== undefined) {
            cancelAnimationFrame(this.animationFrameId);
        }
        if (typeof requestAnimationFrame === 'undefined') {
            this.updateCardHeight();
            return;
        }
        this.animationFrameId = requestAnimationFrame(() => {
            this.animationFrameId = undefined;
            this.updateCardHeight();
        });
    }
    private updateCardHeight(): void {
        const cardElement = this.cardRef?.nativeElement;
        if (!cardElement) {
            return;
        }
        const nextHeight = cardElement.getBoundingClientRect().height;
        if (!Number.isFinite(nextHeight) || nextHeight <= 0) {
            return;
        }
        this.cardHeight.set(nextHeight);
    }
    private toPx(multiplier: number): string {
        return `${this.cardHeight() * multiplier}px`;
    }
}
