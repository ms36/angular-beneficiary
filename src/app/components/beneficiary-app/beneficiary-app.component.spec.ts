import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryAppComponent } from './beneficiary-app.component';

describe('BeneficiaryAppComponent', () => {
  let component: BeneficiaryAppComponent;
  let fixture: ComponentFixture<BeneficiaryAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiaryAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaryAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
