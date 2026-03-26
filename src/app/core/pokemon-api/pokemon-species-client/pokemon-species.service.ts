import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokemonSpeciesModel} from './pokemon-species.model';

const pokemonSpeciesRequestURL = 'https://pokeapi.co/api/v2/pokemon-species/';

@Injectable({ providedIn: 'root' })
export class PokemonSpeciesService {
    private readonly httpClient = inject(HttpClient);

    getPokemonSpecies(pokemonId: number): Observable<PokemonSpeciesModel> {
        return this.httpClient.get<PokemonSpeciesModel>(
            `${pokemonSpeciesRequestURL}${pokemonId}`
        );
    }
}
