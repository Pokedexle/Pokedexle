import {PokemonSpeciesModel} from '../../../core/pokemon-api/pokemon-species-client/pokemon-species.model';
import {PokemonModel} from '../../../core/pokemon-api/pokemon-client/pokemon.model';
import {PokemonCardModel} from '../models/pokemon-card.model';
import {PokemonSpeciesName} from '../../../core/pokemon-api/models/pokemon-species/pokemon-species-name.model';
import {PokemonType} from '../../../core/pokemon-api/models/pokemon/pokemon-type.model';


export function mapPokemonSpeciesAndPokemonToPokemonCard(
    pokemonSpecies: PokemonSpeciesModel, pokemon: PokemonModel
): PokemonCardModel{
    return {
        id: pokemon.id,
        name: getFrenchName(pokemonSpecies.names),
        types: getTypes(pokemon.types),
    };
}


function getFrenchName(names: PokemonSpeciesName[]) {
    for (const name of names) {
        if (name.language.name === 'fr'){
            return name.name;
        }
    }
    return '';
}

function switchType(type: PokemonType){
    switch (type.type.name) {
        case 'normal': return 1;
        case 'fighting': return 2;
        case 'flying': return 3;
        case 'poison': return 4;
        case 'ground': return 5;
        case 'rock': return 6;
        case 'bug': return 7;
        case 'ghost': return 8;
        case 'steel': return 9;
        case 'fire': return 10;
        case 'water': return 11;
        case 'grass': return 12;
        case 'electric': return 13;
        case 'psychic': return 14;
        case 'ice': return 15;
        case 'dragon': return 16;
        case 'dark': return 17;
        case 'fairy': return 18;
        default: return 0;
    }
}

function getTypes(types: PokemonType[]) {
    return types.map(type => switchType(type));
}
