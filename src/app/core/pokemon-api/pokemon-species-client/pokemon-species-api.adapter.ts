import {PokemonSpeciesModel} from './pokemon-species.model';

export type PokemonSpeciesApiResponse = PokemonSpeciesModel | Record<string, unknown>;

function readValue<T>(
    record: Record<string, unknown>,
    camelKey: string,
    snakeKey: string,
    defaultValue: T
): T {
    const value = record[camelKey] ?? record[snakeKey];
    return (value as T) ?? defaultValue;
}

export function adaptPokemonSpeciesApiResponse(
    response: PokemonSpeciesApiResponse
): PokemonSpeciesModel {
    const record = response as Record<string, unknown>;
    const model = response as PokemonSpeciesModel;

    return {
        ...model,
        genderRate: readValue<number>(record, 'genderRate', 'gender_rate', 0),
        captureRate: readValue<number>(record, 'captureRate', 'capture_rate', 0),
        baseHappiness: readValue<number>(record, 'baseHappiness', 'base_happiness', 0),
        isBaby: readValue<boolean>(record, 'isBaby', 'is_baby', false),
        isLegendary: readValue<boolean>(record, 'isLegendary', 'is_legendary', false),
        isMythical: readValue<boolean>(record, 'isMythical', 'is_mythical', false),
        hatchCounter: readValue<number>(record, 'hatchCounter', 'hatch_counter', 0),
        hasGenderDifferences: readValue<boolean>(
            record,
            'hasGenderDifferences',
            'has_gender_differences',
            false
        ),
        formsSwitchable: readValue<boolean>(record, 'formsSwitchable', 'forms_switchable', false),
        growthRate: readValue<PokemonSpeciesModel['growthRate']>(
            record,
            'growthRate',
            'growth_rate',
            model.growthRate
        ),
        pokedexNumbers: readValue<PokemonSpeciesModel['pokedexNumbers']>(
            record,
            'pokedexNumbers',
            'pokedex_numbers',
            []
        ),
        eggGroups: readValue<PokemonSpeciesModel['eggGroups']>(
            record,
            'eggGroups',
            'egg_groups',
            []
        ),
        evolvesFromSpecies: readValue<PokemonSpeciesModel['evolvesFromSpecies']>(
            record,
            'evolvesFromSpecies',
            'evolves_from_species',
            null
        ),
        evolutionChain: readValue<PokemonSpeciesModel['evolutionChain']>(
            record,
            'evolutionChain',
            'evolution_chain',
            model.evolutionChain
        ),
        flavorTextEntries: readValue<PokemonSpeciesModel['flavorTextEntries']>(
            record,
            'flavorTextEntries',
            'flavor_text_entries',
            []
        ),
        formDescriptions: readValue<PokemonSpeciesModel['formDescriptions']>(
            record,
            'formDescriptions',
            'form_descriptions',
            []
        ),
    };
}
