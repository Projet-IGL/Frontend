import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDpiFormComponent } from './add-dpi-form.component';

describe('AddDpiFormComponent', () => {
  let component: AddDpiFormComponent;
  let fixture: ComponentFixture<AddDpiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDpiFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDpiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
