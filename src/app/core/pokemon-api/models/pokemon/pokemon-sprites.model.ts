import {PokemonSpritesOther} from './pokemon-sprites-other.model';
import {PokemonSpritesVersion} from './pokemon-sprites-version.model';

export interface PokemonSprites {
    backDefault: string | null;
    backFemale: string | null;
    backShiny: string | null;
    backShinyFemale: string | null;
    frontDefault: string | null;
    frontFemale: string | null;
    frontShiny: string | null;
    frontShinyFemale: string | null;
    other: PokemonSpritesOther;
    versions: Record<string, Record<string, PokemonSpritesVersion>>;
}
