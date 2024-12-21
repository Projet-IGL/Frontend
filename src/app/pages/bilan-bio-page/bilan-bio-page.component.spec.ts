import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanBioPageComponent } from './bilan-bio-page.component';

describe('BilanBioPageComponent', () => {
  let component: BilanBioPageComponent;
  let fixture: ComponentFixture<BilanBioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilanBioPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilanBioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
