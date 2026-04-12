import {PokemonNamedApiResource} from '../models/shared/pokemon-named-api-resource.model';
import {GenerationName} from '../models/generation/generation-name.model';

export interface GenerationModel {
    abilities: PokemonNamedApiResource[];
    id: number;
    mainRegion: PokemonNamedApiResource;
    moves: PokemonNamedApiResource[];
    name: string;
    names: GenerationName[];
    pokemonSpecies: PokemonNamedApiResource[];
    types: PokemonNamedApiResource[];
    versionGroups: PokemonNamedApiResource[];
}
