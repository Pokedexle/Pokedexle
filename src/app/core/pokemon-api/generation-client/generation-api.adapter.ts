import {GenerationModel} from './generation.model';

export type GenerationApiResponse = GenerationModel | Record<string, unknown>;

function readValue<T>(
    record: Record<string, unknown>,
    camelKey: string,
    snakeKey: string,
    defaultValue: T
): T {
    const value = record[camelKey] ?? record[snakeKey];
    return (value as T) ?? defaultValue;
}

export function adaptGenerationApiResponse(response: GenerationApiResponse): GenerationModel {
    const record = response as Record<string, unknown>;
    const model = response as GenerationModel;

    return {
        ...model,
        abilities: readValue<GenerationModel['abilities']>(record, 'abilities', 'abilities', []),
        id: readValue<number>(record, 'id', 'id', 0),
        mainRegion: readValue<GenerationModel['mainRegion']>(
            record,
            'mainRegion',
            'main_region',
            model.mainRegion
        ),
        moves: readValue<GenerationModel['moves']>(record, 'moves', 'moves', []),
        name: readValue<string>(record, 'name', 'name', ''),
        names: readValue<GenerationModel['names']>(record, 'names', 'names', []),
        pokemonSpecies: readValue<GenerationModel['pokemonSpecies']>(
            record,
            'pokemonSpecies',
            'pokemon_species',
            []
        ),
        types: readValue<GenerationModel['types']>(record, 'types', 'types', []),
        versionGroups: readValue<GenerationModel['versionGroups']>(
            record,
            'versionGroups',
            'version_groups',
            []
        ),
    };
}
