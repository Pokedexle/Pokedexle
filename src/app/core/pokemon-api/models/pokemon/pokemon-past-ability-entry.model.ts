import {PokemonNamedApiResource} from '../shared/pokemon-named-api-resource.model';

export interface PokemonPastAbilityEntry {
    ability: PokemonNamedApiResource | null;
    isHidden: boolean;
    slot: number;
}
