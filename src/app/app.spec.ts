import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import {of} from 'rxjs';
import { App } from './app';
import {PokedexPageService} from './domain/pokedex-page/services/pokedex-page.service';

describe('App', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [App],
            providers: [
                provideRouter([]),
                {
                    provide: PokedexPageService,
                    useValue: {
                        getGeneration: () => of({id: 1, pokemonIds: []}),
                    },
                },
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render navbar', async () => {
        const fixture = TestBed.createComponent(App);
        await fixture.whenStable();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('app-nav-bar')).not.toBeNull();
    });
});
