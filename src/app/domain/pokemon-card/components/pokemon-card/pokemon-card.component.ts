import {Component, Input} from '@angular/core';
import { TypeComponent } from '../../../../shared/components/type/type.component';

@Component({
  selector: 'app-pokemon-card',
  imports: [TypeComponent],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
    @Input()
    id = 6;
    currentImage = '/sprites/'+this.id+'/regular.png';
    name = 'ditto';
    types = [1, 14];

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
