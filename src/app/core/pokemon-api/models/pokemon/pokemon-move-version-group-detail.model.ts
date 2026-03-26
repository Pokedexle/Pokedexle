import {PokemonNamedApiResource} from '../shared/pokemon-named-api-resource.model';

export interface PokemonMoveVersionGroupDetail {
    levelLearnedAt: number;
    moveLearnMethod: PokemonNamedApiResource;
    order: number | null;
    versionGroup: PokemonNamedApiResource;
}
