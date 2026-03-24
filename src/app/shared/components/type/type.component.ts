import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-type',
  imports: [],
  templateUrl: './type.component.html',
  styleUrl: './type.component.scss'
})
export class TypeComponent {
    @Input()
    currentType!: number;
}
