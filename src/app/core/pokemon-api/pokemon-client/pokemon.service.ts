import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokemonModel} from './pokemon.model';

const pokemonRequestURL = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({ providedIn: 'root' })
export class PokemonService {
    private readonly httpClient = inject(HttpClient);

    getPokemon(pokemonId: number): Observable<PokemonModel> {
        return this.httpClient.get<PokemonModel>(
            `${pokemonRequestURL}${pokemonId}`
        );
    }
}
