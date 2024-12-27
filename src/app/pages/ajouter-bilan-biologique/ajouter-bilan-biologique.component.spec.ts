import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBilanBiologiqueComponent } from './ajouter-bilan-biologique.component';

describe('AjouterBilanBiologiqueComponent', () => {
  let component: AjouterBilanBiologiqueComponent;
  let fixture: ComponentFixture<AjouterBilanBiologiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterBilanBiologiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterBilanBiologiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
