import {PokemonNamedApiResource} from '../shared/pokemon-named-api-resource.model';

export interface PokemonAbility {
    ability: PokemonNamedApiResource;
    isHidden: boolean;
    slot: number;
}
