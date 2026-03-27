import {Component, Input} from '@angular/core';
import { TypeComponent } from '../../../../shared/components/type/type.component';
import {PokemonCardModel} from '../../models/pokemon-card.model';

@Component({
  selector: 'app-pokemon-card',
  imports: [TypeComponent],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
    @Input()
    pokemonCardModel!: PokemonCardModel;

    id = this.pokemonCardModel.id;
    currentImage = '/sprites/'+this.id+'/regular.png';
    name = this.pokemonCardModel.name;
    types = this.pokemonCardModel.types;

    get formattedId(): string {
        return `#${this.id.toString().padStart(3, '0')}`;
    }

    onHover(){
        this.currentImage = '/sprites/'+this.id+'/shiny.png';
    }

    onLeave(){
        this.currentImage = '/sprites/'+this.id+'/regular.png';
    }
}
