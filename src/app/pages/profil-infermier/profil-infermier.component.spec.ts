import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilInfermierComponent } from './profil-infermier.component';

describe('ProfilInfermierComponent', () => {
  let component: ProfilInfermierComponent;
  let fixture: ComponentFixture<ProfilInfermierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilInfermierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilInfermierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
