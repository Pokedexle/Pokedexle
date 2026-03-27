import {PokemonSpriteDreamWorld} from './pokemon-sprite-dream-world.model';
import {PokemonSpriteHome} from './pokemon-sprite-home.model';
import {PokemonSpriteOfficialArtwork} from './pokemon-sprite-official-artwork.model';
import {PokemonSpriteShowdown} from './pokemon-sprite-showdown.model';

export interface PokemonSpritesOther {
    dreamWorld: PokemonSpriteDreamWorld;
    home: PokemonSpriteHome;
    officialArtwork: PokemonSpriteOfficialArtwork;
    showdown: PokemonSpriteShowdown;
}
