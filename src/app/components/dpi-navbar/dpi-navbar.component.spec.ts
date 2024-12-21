import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpiNavbarComponent } from './dpi-navbar.component';

describe('DpiNavbarComponent', () => {
  let component: DpiNavbarComponent;
  let fixture: ComponentFixture<DpiNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DpiNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
