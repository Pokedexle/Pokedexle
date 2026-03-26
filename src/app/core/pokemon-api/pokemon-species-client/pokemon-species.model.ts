import {PokemonApiResource} from '../models/shared/pokemon-api-resource.model';
import {PokemonNamedApiResource} from '../models/shared/pokemon-named-api-resource.model';
import {PokemonSpeciesFlavorText} from '../models/pokemon-species/pokemon-species-flavor-text.model';
import {PokemonSpeciesFormDescription} from '../models/pokemon-species/pokemon-species-form-description.model';
import {PokemonSpeciesGenus} from '../models/pokemon-species/pokemon-species-genus.model';
import {PokemonSpeciesName} from '../models/pokemon-species/pokemon-species-name.model';
import {PokemonSpeciesPokedexNumber} from '../models/pokemon-species/pokemon-species-pokedex-number.model';
import {PokemonSpeciesVariety} from '../models/pokemon-species/pokemon-species-variety.model';

export interface PokemonSpeciesModel {
    id: number;
    name: string;
    order: number;
    genderRate: number;
    captureRate: number;
    baseHappiness: number;
    isBaby: boolean;
    isLegendary: boolean;
    isMythical: boolean;
    hatchCounter: number;
    hasGenderDifferences: boolean;
    formsSwitchable: boolean;
    growthRate: PokemonNamedApiResource;
    pokedexNumbers: PokemonSpeciesPokedexNumber[];
    eggGroups: PokemonNamedApiResource[];
    color: PokemonNamedApiResource;
    shape: PokemonNamedApiResource;
    evolvesFromSpecies: PokemonNamedApiResource | null;
    evolutionChain: PokemonApiResource;
    habitat: PokemonNamedApiResource | null;
    generation: PokemonNamedApiResource;
    names: PokemonSpeciesName[];
    flavorTextEntries: PokemonSpeciesFlavorText[];
    formDescriptions: PokemonSpeciesFormDescription[];
    genera: PokemonSpeciesGenus[];
    varieties: PokemonSpeciesVariety[];
}
