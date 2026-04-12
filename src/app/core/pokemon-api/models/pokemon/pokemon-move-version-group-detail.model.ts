import {NamedApiResource} from '../shared/named-api-resource.model';

export interface PokemonMoveVersionGroupDetail {
    levelLearnedAt: number;
    moveLearnMethod: NamedApiResource;
    order: number | null;
    versionGroup: NamedApiResource;
}
