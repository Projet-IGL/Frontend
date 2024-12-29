import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBilanComponent } from './add-bilan.component';

describe('AddBilanComponent', () => {
  let component: AddBilanComponent;
  let fixture: ComponentFixture<AddBilanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBilanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
