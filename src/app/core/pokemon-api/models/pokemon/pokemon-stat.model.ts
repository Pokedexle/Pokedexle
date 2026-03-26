import {PokemonNamedApiResource} from '../shared/pokemon-named-api-resource.model';

export interface PokemonStat {
    baseStat: number;
    effort: number;
    stat: PokemonNamedApiResource;
}
