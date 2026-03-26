import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './core/components/nav-bar/nav-bar';
import {PokemonCardComponent} from './domain/pokemon-card-list/components/pokemon-card/pokemon-card.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavBar, PokemonCardComponent],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    protected readonly title = signal('Pokedexle');
}
