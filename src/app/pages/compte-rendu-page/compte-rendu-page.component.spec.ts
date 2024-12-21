import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteRenduPageComponent } from './compte-rendu-page.component';

describe('CompteRenduPageComponent', () => {
  let component: CompteRenduPageComponent;
  let fixture: ComponentFixture<CompteRenduPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompteRenduPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteRenduPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
