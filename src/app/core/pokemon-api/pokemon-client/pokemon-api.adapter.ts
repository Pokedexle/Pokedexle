import {PokemonModel} from './pokemon.model';

export type PokemonApiResponse = PokemonModel | Record<string, unknown>;

function readValue<T>(
    record: Record<string, unknown>,
    camelKey: string,
    snakeKey: string,
    defaultValue: T
): T {
    const value = record[camelKey] ?? record[snakeKey];
    return (value as T) ?? defaultValue;
}

export function adaptPokemonApiResponse(response: PokemonApiResponse): PokemonModel {
    const record = response as Record<string, unknown>;
    const model = response as PokemonModel;

    return {
        ...model,
        baseExperience: readValue<number>(record, 'baseExperience', 'base_experience', 0),
        gameIndices: readValue<PokemonModel['gameIndices']>(record, 'gameIndices', 'game_indices', []),
        heldItems: readValue<PokemonModel['heldItems']>(record, 'heldItems', 'held_items', []),
        isDefault: readValue<boolean>(record, 'isDefault', 'is_default', false),
        locationAreaEncounters: readValue<string>(
            record,
            'locationAreaEncounters',
            'location_area_encounters',
            ''
        ),
        pastAbilities: readValue<PokemonModel['pastAbilities']>(
            record,
            'pastAbilities',
            'past_abilities',
            []
        ),
        pastStats: readValue<PokemonModel['pastStats']>(record, 'pastStats', 'past_stats', []),
        pastTypes: readValue<PokemonModel['pastTypes']>(record, 'pastTypes', 'past_types', []),
    };
}
