import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGestionnaireComponent } from './home-gestionnaire.component';

describe('HomeGestionnaireComponent', () => {
  let component: HomeGestionnaireComponent;
  let fixture: ComponentFixture<HomeGestionnaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGestionnaireComponent]
    });
    fixture = TestBed.createComponent(HomeGestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
