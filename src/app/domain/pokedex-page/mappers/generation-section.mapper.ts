import {GenerationModel} from '../../../core/pokemon-api/generation-client/generation.model';
import {GenerationSectionModel} from '../models/generation-section.model';
import {PokemonNamedApiResource} from '../../../core/pokemon-api/models/shared/pokemon-named-api-resource.model';

export function mapGenerationToGenerationSection(generation: GenerationModel): GenerationSectionModel {
    return {
        id: generation.id,
        pokemonIds: getPokemonIds(generation.pokemonSpecies)
    }
}

function getPokemonIds(pokemons : PokemonNamedApiResource[]) {
    const pokemonsIds : number[] = [];
    for (const pokemon of pokemons) {
       pokemonsIds.push( Number(pokemon.url.split("/")[6]) )
    }
    return pokemonsIds.sort((a, b) => a - b);
}
