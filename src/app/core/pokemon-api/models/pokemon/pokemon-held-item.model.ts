import {NamedApiResource} from '../shared/named-api-resource.model';
import {PokemonHeldItemVersion} from './pokemon-held-item-version.model';

export interface PokemonHeldItem {
    item: NamedApiResource;
    versionDetails: PokemonHeldItemVersion[];
}
