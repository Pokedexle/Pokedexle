import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationHeaderComponent } from './generation-header.component';

describe('GenerationHeaderComponent', () => {
  let component: GenerationHeaderComponent;
  let fixture: ComponentFixture<GenerationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerationHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
