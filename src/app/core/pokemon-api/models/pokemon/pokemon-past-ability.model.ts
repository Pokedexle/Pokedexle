import {PokemonNamedApiResource} from '../shared/pokemon-named-api-resource.model';
import {PokemonPastAbilityEntry} from './pokemon-past-ability-entry.model';

export interface PokemonPastAbility {
    abilities: PokemonPastAbilityEntry[];
    generation: PokemonNamedApiResource;
}
