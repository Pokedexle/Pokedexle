import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NavBar } from './nav-bar';

describe('NavBar', () => {
    let component: NavBar;
    let fixture: ComponentFixture<NavBar>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavBar],
            providers: [provideRouter([])],
        }).compileComponents();

        fixture = TestBed.createComponent(NavBar);
        component = fixture.componentInstance;
        await fixture.whenStable();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render a clickable logo linked to the home page', () => {
        const anchor: HTMLAnchorElement | null =
            fixture.nativeElement.querySelector('.navbar__brand');
        const image: HTMLImageElement | null = fixture.nativeElement.querySelector('.navbar__logo');

        expect(anchor).not.toBeNull();
        expect(anchor?.getAttribute('href')).toBe('/');
        expect(image?.getAttribute('src')).toContain('/logo.svg');
    });

    it('should render the centered pokemon search component', () => {
        const searchComponent: HTMLElement | null =
            fixture.nativeElement.querySelector('app-pokemon-search');

        expect(searchComponent).not.toBeNull();
    });
});
