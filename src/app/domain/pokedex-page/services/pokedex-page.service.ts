import {inject, Injectable} from '@angular/core';
import {GenerationService} from '../../../core/pokemon-api/generation-client/generation.service';
import {map, Observable} from 'rxjs';
import {mapGenerationToGenerationSection} from '../mappers/generation-section.mapper';
import {GenerationSectionModel} from '../models/generation-section.model';

@Injectable({providedIn: 'root'})
export class PokedexPageService {
    private readonly generationService = inject(GenerationService);

    getGeneration(generationId: number): Observable<GenerationSectionModel> {
        return this.generationService.getGeneration(generationId).pipe(
            map( (generation) => mapGenerationToGenerationSection(generation) )
        )
    }
}
