import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilStaffComponent } from './profil-staff.component';

describe('ProfilStaffComponent', () => {
  let component: ProfilStaffComponent;
  let fixture: ComponentFixture<ProfilStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilStaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
