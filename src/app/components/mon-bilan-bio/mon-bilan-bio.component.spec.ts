import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonBilanBioComponent } from './mon-bilan-bio.component';

describe('MonBilanBioComponent', () => {
  let component: MonBilanBioComponent;
  let fixture: ComponentFixture<MonBilanBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonBilanBioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonBilanBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
