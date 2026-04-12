import {NamedApiResource} from '../shared/named-api-resource.model';
import {PokemonStat} from './pokemon-stat.model';

export interface PokemonPastStat {
    generation: NamedApiResource;
    stats: PokemonStat[];
}
