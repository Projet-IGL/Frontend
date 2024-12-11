import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffPageComponent } from './add-staff-page.component';

describe('AddStaffPageComponent', () => {
  let component: AddStaffPageComponent;
  let fixture: ComponentFixture<AddStaffPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStaffPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStaffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
