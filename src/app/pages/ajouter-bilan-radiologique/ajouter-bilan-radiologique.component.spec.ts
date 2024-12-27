import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBilanRadiologiqueComponent } from './ajouter-bilan-radiologique.component';

describe('AjouterBilanRadiologiqueComponent', () => {
  let component: AjouterBilanRadiologiqueComponent;
  let fixture: ComponentFixture<AjouterBilanRadiologiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterBilanRadiologiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterBilanRadiologiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
