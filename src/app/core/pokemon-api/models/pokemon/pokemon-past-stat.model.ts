import {PokemonNamedApiResource} from '../shared/pokemon-named-api-resource.model';
import {PokemonStat} from './pokemon-stat.model';

export interface PokemonPastStat {
    generation: PokemonNamedApiResource;
    stats: PokemonStat[];
}
