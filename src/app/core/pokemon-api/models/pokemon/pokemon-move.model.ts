import {NamedApiResource} from '../shared/named-api-resource.model';
import {PokemonMoveVersionGroupDetail} from './pokemon-move-version-group-detail.model';

export interface PokemonMove {
    move: NamedApiResource;
    versionGroupDetails: PokemonMoveVersionGroupDetail[];
}
