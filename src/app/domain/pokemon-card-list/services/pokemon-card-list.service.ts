import {inject, Injectable} from '@angular/core';
import {forkJoin, map, Observable} from 'rxjs';
import {PokemonService} from '../../../core/pokemon-api/pokemon-client/pokemon.service';
import {PokemonSpeciesService} from '../../../core/pokemon-api/pokemon-species-client/pokemon-species.service';
import {PokemonCardModel} from '../models/pokemon-card.model';
import {mapPokemonSpeciesAndPokemonToPokemonCard} from '../mappeurs/pokemon-card.mapper';

@Injectable({providedIn: 'root'})
export class PokemonCardListService {
    private readonly pokemonService = inject(PokemonService);
    private readonly pokemonSpeciesService = inject(PokemonSpeciesService);

    getPokemonCard(pokemonId: number): Observable<PokemonCardModel> {
        return forkJoin({
            pokemon: this.pokemonService.getPokemon(pokemonId),
            pokemonSpecies: this.pokemonSpeciesService.getPokemonSpecies(pokemonId),
        }).pipe(
            map(({pokemon, pokemonSpecies}) =>
                mapPokemonSpeciesAndPokemonToPokemonCard(pokemonSpecies, pokemon)
            )
        );
    }
}
