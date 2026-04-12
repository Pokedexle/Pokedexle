import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-generation-header',
  imports: [],
  templateUrl: './generation-header.component.html',
  styleUrl: './generation-header.component.scss'
})
export class GenerationHeaderComponent {
    @Input({ required: true })
    generationId!: number

    generationTitle!: string;
}
