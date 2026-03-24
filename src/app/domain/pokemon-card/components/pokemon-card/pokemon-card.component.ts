import { Component } from '@angular/core';
import { TypeComponent } from '../../../../shared/components/type/type.component';

@Component({
  selector: 'app-pokemon-card',
  imports: [TypeComponent],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
    id = 132
    currentImage = "https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/132/shiny.png"
    name= "ditto"
    types = [1, 14]
}
