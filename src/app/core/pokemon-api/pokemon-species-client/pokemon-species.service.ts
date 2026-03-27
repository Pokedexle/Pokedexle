import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {PokemonSpeciesModel} from './pokemon-species.model';
import {
    adaptPokemonSpeciesApiResponse,
    PokemonSpeciesApiResponse,
} from './pokemon-species-api.adapter';

const pokemonSpeciesRequestURL = 'https://pokeapi.co/api/v2/pokemon-species/';

@Injectable({ providedIn: 'root' })
export class PokemonSpeciesService {
    private readonly httpClient = inject(HttpClient);

    getPokemonSpecies(pokemonId: number): Observable<PokemonSpeciesModel> {
        return this.httpClient.get<PokemonSpeciesApiResponse>(
            `${pokemonSpeciesRequestURL}${pokemonId}`
        ).pipe(
            map((response) => adaptPokemonSpeciesApiResponse(response))
        );
    }
}
