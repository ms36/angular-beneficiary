import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryHeaderComponent } from './beneficiary-header.component';

describe('BeneficiaryHeaderComponent', () => {
  let component: BeneficiaryHeaderComponent;
  let fixture: ComponentFixture<BeneficiaryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiaryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
