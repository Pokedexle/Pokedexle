import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {GenerationModel} from './generation.model';
import {adaptGenerationApiResponse, GenerationApiResponse} from './generation-api.adapter';

const generationRequestURL = 'https://pokeapi.co/api/v2/generation/';

@Injectable({ providedIn: 'root' })
export class GenerationService {
    private readonly httpClient = inject(HttpClient);

    getGeneration(generationId: number): Observable<GenerationModel> {
        return this.httpClient.get<GenerationApiResponse>(
            `${generationRequestURL}${generationId}`
        ).pipe(
            map((response) => adaptGenerationApiResponse(response))
        );
    }
}
