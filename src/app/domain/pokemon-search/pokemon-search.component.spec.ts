import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSearchComponent } from './pokemon-search.component';

describe('PokemonSearchComponent', () => {
    let component: PokemonSearchComponent;
    let fixture: ComponentFixture<PokemonSearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PokemonSearchComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PokemonSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render a static search input with the expected placeholder', () => {
        const input: HTMLInputElement | null =
            fixture.nativeElement.querySelector('.pokemon-search__input');

        expect(input).not.toBeNull();
        expect(input?.placeholder).toBe('Rechercher un Pokémon');
    });

    it('should render a search icon on the right side of the input', () => {
        const iconButton: HTMLButtonElement | null =
            fixture.nativeElement.querySelector('.pokemon-search__icon');
        const iconImage: HTMLImageElement | null = fixture.nativeElement.querySelector(
            '.pokemon-search__icon-image',
        );

        expect(iconButton).not.toBeNull();
        expect(iconButton?.type).toBe('submit');
        expect(iconImage?.getAttribute('src')).toContain('/nav-bar/pokemon-search/search-icon.svg');
    });
});
