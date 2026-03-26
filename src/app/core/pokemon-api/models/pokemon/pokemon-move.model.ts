import {PokemonNamedApiResource} from '../shared/pokemon-named-api-resource.model';
import {PokemonMoveVersionGroupDetail} from './pokemon-move-version-group-detail.model';

export interface PokemonMove {
    move: PokemonNamedApiResource;
    versionGroupDetails: PokemonMoveVersionGroupDetail[];
}
