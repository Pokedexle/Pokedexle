import {NamedApiResource} from '../shared/named-api-resource.model';

export interface PokemonAbility {
    ability: NamedApiResource;
    isHidden: boolean;
    slot: number;
}
