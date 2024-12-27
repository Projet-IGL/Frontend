import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilLaborantinComponent } from './profil-laborantin.component';

describe('ProfilLaborantinComponent', () => {
  let component: ProfilLaborantinComponent;
  let fixture: ComponentFixture<ProfilLaborantinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilLaborantinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilLaborantinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
