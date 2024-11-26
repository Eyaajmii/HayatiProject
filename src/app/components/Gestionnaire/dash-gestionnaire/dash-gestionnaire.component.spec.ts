import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashGestionnaireComponent } from './dash-gestionnaire.component';

describe('DashGestionnaireComponent', () => {
  let component: DashGestionnaireComponent;
  let fixture: ComponentFixture<DashGestionnaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashGestionnaireComponent]
    });
    fixture = TestBed.createComponent(DashGestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
