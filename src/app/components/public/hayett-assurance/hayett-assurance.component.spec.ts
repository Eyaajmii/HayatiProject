import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HayettAssuranceComponent } from './hayett-assurance.component';

describe('HayettAssuranceComponent', () => {
  let component: HayettAssuranceComponent;
  let fixture: ComponentFixture<HayettAssuranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HayettAssuranceComponent]
    });
    fixture = TestBed.createComponent(HayettAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
