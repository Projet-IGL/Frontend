import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationMedecinPageComponent } from './consultation-medecin-page.component';

describe('ConsultationMedecinPageComponent', () => {
  let component: ConsultationMedecinPageComponent;
  let fixture: ComponentFixture<ConsultationMedecinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultationMedecinPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationMedecinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
