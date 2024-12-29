import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilRadiologueComponent } from './profil-radiologue.component';

describe('ProfilRadiologueComponent', () => {
  let component: ProfilRadiologueComponent;
  let fixture: ComponentFixture<ProfilRadiologueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilRadiologueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilRadiologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
