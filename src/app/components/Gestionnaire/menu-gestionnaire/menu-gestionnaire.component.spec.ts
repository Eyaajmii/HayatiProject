import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGestionnaireComponent } from './menu-gestionnaire.component';

describe('MenuGestionnaireComponent', () => {
  let component: MenuGestionnaireComponent;
  let fixture: ComponentFixture<MenuGestionnaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuGestionnaireComponent]
    });
    fixture = TestBed.createComponent(MenuGestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
