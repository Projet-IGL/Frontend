import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpiConsultationsPageComponent } from './dpi-consultations-page.component';

describe('DpiConsultationsPageComponent', () => {
  let component: DpiConsultationsPageComponent;
  let fixture: ComponentFixture<DpiConsultationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DpiConsultationsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpiConsultationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
