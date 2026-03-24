import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonSearchComponent } from '../../../domain/pokemon-search/components/pokemon-search/pokemon-search.component';

@Component({
    selector: 'app-nav-bar',
    imports: [RouterLink, PokemonSearchComponent],
    templateUrl: './nav-bar.html',
    styleUrl: './nav-bar.scss',
})
export class NavBar {}
