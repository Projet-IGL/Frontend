import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanRadioPageComponent } from './bilan-radio-page.component';

describe('BilanRadioPageComponent', () => {
  let component: BilanRadioPageComponent;
  let fixture: ComponentFixture<BilanRadioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilanRadioPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilanRadioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
