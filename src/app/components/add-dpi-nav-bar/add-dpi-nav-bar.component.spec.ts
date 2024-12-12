import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDpiNavBarComponent } from './add-dpi-nav-bar.component';

describe('AddDpiNavBarComponent', () => {
  let component: AddDpiNavBarComponent;
  let fixture: ComponentFixture<AddDpiNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDpiNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDpiNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
