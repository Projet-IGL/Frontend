import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpFormComponent } from './up-form.component';

describe('UpFormComponent', () => {
  let component: UpFormComponent;
  let fixture: ComponentFixture<UpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
