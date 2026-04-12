import {NamedApiResource} from '../shared/named-api-resource.model';

export interface PokemonPastAbilityEntry {
    ability: NamedApiResource | null;
    isHidden: boolean;
    slot: number;
}
