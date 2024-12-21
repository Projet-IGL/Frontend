import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpiSoinPageComponent } from './dpi-soin-page.component';

describe('DpiSoinPageComponent', () => {
  let component: DpiSoinPageComponent;
  let fixture: ComponentFixture<DpiSoinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DpiSoinPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpiSoinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
