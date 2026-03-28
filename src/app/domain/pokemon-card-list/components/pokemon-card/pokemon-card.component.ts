import {Component, Input, signal} from '@angular/core';
import { TypeComponent } from '../../../../shared/components/type/type.component';
import {PokemonCardModel} from '../../models/pokemon-card.model';

@Component({
  selector: 'app-pokemon-card',
  imports: [TypeComponent],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent{
    @Input()
    pokemonCardModel!: PokemonCardModel;

    private readonly isShiny = signal(false);

    get name(): string {
        return this.pokemonCardModel?.name ?? '';
    }
    get types(): number[] {
        return this.pokemonCardModel?.types ?? [];
    }

    get formattedId(): string {
        const id = this.pokemonCardModel?.id;
        return `#${id.toString().padStart(3, '0')}`;
    }
    get currentImage(): string {
        const id = this.pokemonCardModel?.id;
        return `/sprites/${id}/${this.isShiny() ? 'shiny' : 'regular'}.png`;
    }

    onHover(){
        this.isShiny.set(true);
    }
    onLeave(){
        this.isShiny.set(false);
    }
}
