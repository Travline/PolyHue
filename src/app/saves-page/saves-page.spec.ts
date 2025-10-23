import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavesPage } from './saves-page';

describe('SavesPage', () => {
  let component: SavesPage;
  let fixture: ComponentFixture<SavesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
