import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDpiPageComponent } from './add-dpi-page.component';

describe('AddDpiPageComponent', () => {
  let component: AddDpiPageComponent;
  let fixture: ComponentFixture<AddDpiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDpiPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDpiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
