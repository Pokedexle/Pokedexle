import {NamedApiResource} from '../shared/named-api-resource.model';
import {PokemonType} from './pokemon-type.model';

export interface PokemonPastType {
    generation: NamedApiResource;
    types: PokemonType[];
}
