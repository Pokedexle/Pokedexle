import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {PokemonModel} from './pokemon.model';
import {adaptPokemonApiResponse, PokemonApiResponse} from './pokemon-api.adapter';

const pokemonRequestURL = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({ providedIn: 'root' })
export class PokemonService {
    private readonly httpClient = inject(HttpClient);

    getPokemon(pokemonId: number): Observable<PokemonModel> {
        return this.httpClient.get<PokemonApiResponse>(
            `${pokemonRequestURL}${pokemonId}`
        ).pipe(
            map((response) => adaptPokemonApiResponse(response))
        );
    }
}
