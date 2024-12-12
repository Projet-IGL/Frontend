import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDpiHeroComponent } from './add-dpi-hero.component';

describe('AddDpiHeroComponent', () => {
  let component: AddDpiHeroComponent;
  let fixture: ComponentFixture<AddDpiHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDpiHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDpiHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
