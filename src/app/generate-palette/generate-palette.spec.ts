import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePalette } from './generate-palette';

describe('GeneratePalette', () => {
  let component: GeneratePalette;
  let fixture: ComponentFixture<GeneratePalette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratePalette]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratePalette);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
