import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './core/components/nav-bar/nav-bar';
import {PokedexPageComponent} from './domain/pokedex-page/pokedex-page.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavBar, PokedexPageComponent],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    protected readonly title = signal('Pokedexle');
}
