import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationNavbarComponent } from './consultation-navbar.component';

describe('ConsultationNavbarComponent', () => {
  let component: ConsultationNavbarComponent;
  let fixture: ComponentFixture<ConsultationNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultationNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
