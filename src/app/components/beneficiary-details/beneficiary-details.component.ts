import { Beneficiary } from './../../../models/beneficiary';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-beneficiary-details',
  templateUrl: './beneficiary-details.component.html',
  styleUrls: ['./beneficiary-details.component.css']
})
export class BeneficiaryDetailsComponent implements OnInit {

  addbeneficiaryForm: FormGroup;
  beneficiary = new Beneficiary();

  @Output() addNewBeneficiary: EventEmitter<Beneficiary> = new EventEmitter();
  @Output() closeScreen: EventEmitter<any> = new EventEmitter();

  formControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addbeneficiaryForm = this.fb.group({
      firstName: '',
      lastName: '',
      percentOfBenefit: ''
    });
  }

  addBeneficiary() {
    this.beneficiary.firstName = this.addbeneficiaryForm.value.firstName;
    this.beneficiary.lastName = this.addbeneficiaryForm.value.lastName;
    this.beneficiary.percentOfBenefit = this.addbeneficiaryForm.value.percentOfBenefit;
    this.addNewBeneficiary.emit(this.beneficiary);
  }

  closeAddBeneficiary() {
    this.closeScreen.emit();
  }
}
