import {PokemonNamedApiResource} from '../shared/pokemon-named-api-resource.model';

export interface PokemonSpeciesFlavorText {
    flavorText: string;
    language: PokemonNamedApiResource;
    version: PokemonNamedApiResource;
}
