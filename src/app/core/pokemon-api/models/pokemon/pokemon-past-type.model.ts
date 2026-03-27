import {PokemonNamedApiResource} from '../shared/pokemon-named-api-resource.model';
import {PokemonType} from './pokemon-type.model';

export interface PokemonPastType {
    generation: PokemonNamedApiResource;
    types: PokemonType[];
}
