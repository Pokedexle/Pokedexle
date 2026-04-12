import {Component, inject, OnInit} from '@angular/core';
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
export class PokedexPageComponent implements OnInit{
    private readonly pokedexPageService = inject(PokedexPageService);

    generations: GenerationSectionModel[] = [];
    private readonly maxGeneration = 9;
    private nextGenerationToLoad = 1;

    ngOnInit() {
    }

    private loadGeneration(): void {
        this.pokedexPageService.getGeneration(this.nextGenerationToLoad).subscribe({
            next: (generation) => {
                this.generations.push(generation);
                this.nextGenerationToLoad++;
            },
        });
    }
}
