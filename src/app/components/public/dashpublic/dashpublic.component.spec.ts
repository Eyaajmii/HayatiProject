import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashpublicComponent } from './dashpublic.component';

describe('DashpublicComponent', () => {
  let component: DashpublicComponent;
  let fixture: ComponentFixture<DashpublicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashpublicComponent]
    });
    fixture = TestBed.createComponent(DashpublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
