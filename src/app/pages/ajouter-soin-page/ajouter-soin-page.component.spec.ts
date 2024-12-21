import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSoinPageComponent } from './ajouter-soin-page.component';

describe('AjouterSoinPageComponent', () => {
  let component: AjouterSoinPageComponent;
  let fixture: ComponentFixture<AjouterSoinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterSoinPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterSoinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
