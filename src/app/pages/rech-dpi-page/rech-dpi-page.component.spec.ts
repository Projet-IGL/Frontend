import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechDpiPageComponent } from './rech-dpi-page.component';

describe('RechDpiPageComponent', () => {
  let component: RechDpiPageComponent;
  let fixture: ComponentFixture<RechDpiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechDpiPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechDpiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
