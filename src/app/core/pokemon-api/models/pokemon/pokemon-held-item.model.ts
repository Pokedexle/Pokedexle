import {PokemonNamedApiResource} from '../shared/pokemon-named-api-resource.model';
import {PokemonHeldItemVersion} from './pokemon-held-item-version.model';

export interface PokemonHeldItem {
    item: PokemonNamedApiResource;
    versionDetails: PokemonHeldItemVersion[];
}
