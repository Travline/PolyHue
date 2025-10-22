import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedPage } from './generated-page';

describe('GeneratedPage', () => {
  let component: GeneratedPage;
  let fixture: ComponentFixture<GeneratedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratedPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
