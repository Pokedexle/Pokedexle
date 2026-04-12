import {NamedApiResource} from '../shared/named-api-resource.model';

export interface PokemonSpeciesFlavorText {
    flavorText: string;
    language: NamedApiResource;
    version: NamedApiResource;
}
