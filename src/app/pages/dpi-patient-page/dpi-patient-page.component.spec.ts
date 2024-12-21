import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpiPatientPageComponent } from './dpi-patient-page.component';

describe('DpiPatientPageComponent', () => {
  let component: DpiPatientPageComponent;
  let fixture: ComponentFixture<DpiPatientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DpiPatientPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpiPatientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
