import {AfterViewInit, Component, ElementRef, inject, OnDestroy, ViewChild} from '@angular/core';
import {PokedexPageService} from './services/pokedex-page.service';
import {GenerationSectionModel} from './models/generation-section.model';
import {GenerationHeaderComponent} from './components/generation-header/generation-header.component';
import {PokemonCardListComponent} from '../../shared/components/pokemon-card-list/pokemon-card-list.component';

@Component({
  selector: 'app-pokedex-page',
    imports: [
        GenerationHeaderComponent,
        PokemonCardListComponent
    ],
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.scss'
})
export class PokedexPageComponent implements AfterViewInit, OnDestroy {
    private readonly pokedexPageService = inject(PokedexPageService);
    private generationObserver?: IntersectionObserver;
    private generationSentinelRef?: ElementRef<HTMLElement>;

    private readonly maxGenerationToLoad = 9;
    nextGenerationToLoad = 1;
    generations: GenerationSectionModel[] = [];
    isLoadingNextGeneration = true;

    @ViewChild('generationSentinel')
    set generationSentinel(value: ElementRef<HTMLElement> | undefined) {
        this.generationSentinelRef = value;
        this.setupGenerationObserver();
    }

    ngAfterViewInit(): void {
        this.setupGenerationObserver();
    }
    ngOnDestroy(): void {
        this.generationObserver?.disconnect();
    }

    private loadGeneration(): void {
        if (!this.isLoadingNextGeneration || this.nextGenerationToLoad <= this.maxGenerationToLoad) {
            this.isLoadingNextGeneration = true;
            this.pokedexPageService.getGeneration(this.nextGenerationToLoad).subscribe({
                next: (generation) => {
                    this.generations.push(generation);
                    this.nextGenerationToLoad++;
                    this.isLoadingNextGeneration = false;
                },
            });
        }
    }

    private setupGenerationObserver(): void {
        const sentinelElement = this.generationSentinelRef?.nativeElement;
        if (typeof IntersectionObserver === 'undefined' || !sentinelElement) {
            return;
        }
        this.generationObserver?.disconnect();
        this.generationObserver = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    this.loadGeneration();
                }
            },
            {
                root: null,
                rootMargin: '240px 0px',
                threshold: 0,
            }
        );
        this.generationObserver.observe(sentinelElement);
    }
}
