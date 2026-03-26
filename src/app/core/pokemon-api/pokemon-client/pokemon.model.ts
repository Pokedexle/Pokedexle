import {PokemonNamedApiResource} from '../models/shared/pokemon-named-api-resource.model';
import {PokemonAbility} from '../models/pokemon/pokemon-ability.model';
import {PokemonCries} from '../models/pokemon/pokemon-cries.model';
import {PokemonGameIndex} from '../models/pokemon/pokemon-game-index.model';
import {PokemonHeldItem} from '../models/pokemon/pokemon-held-item.model';
import {PokemonMove} from '../models/pokemon/pokemon-move.model';
import {PokemonPastAbility} from '../models/pokemon/pokemon-past-ability.model';
import {PokemonPastStat} from '../models/pokemon/pokemon-past-stat.model';
import {PokemonPastType} from '../models/pokemon/pokemon-past-type.model';
import {PokemonSprites} from '../models/pokemon/pokemon-sprites.model';
import {PokemonStat} from '../models/pokemon/pokemon-stat.model';
import {PokemonType} from '../models/pokemon/pokemon-type.model';

export interface PokemonModel {
    abilities: PokemonAbility[];
    baseExperience: number;
    cries: PokemonCries;
    forms: PokemonNamedApiResource[];
    gameIndices: PokemonGameIndex[];
    height: number;
    heldItems: PokemonHeldItem[];
    id: number;
    isDefault: boolean;
    locationAreaEncounters: string;
    moves: PokemonMove[];
    name: string;
    order: number;
    pastAbilities: PokemonPastAbility[];
    pastStats: PokemonPastStat[];
    pastTypes: PokemonPastType[];
    species: PokemonNamedApiResource;
    sprites: PokemonSprites;
    stats: PokemonStat[];
    types: PokemonType[];
    weight: number;
}
