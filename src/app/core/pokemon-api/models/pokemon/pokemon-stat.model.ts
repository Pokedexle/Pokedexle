import {NamedApiResource} from '../shared/named-api-resource.model';

export interface PokemonStat {
    baseStat: number;
    effort: number;
    stat: NamedApiResource;
}
