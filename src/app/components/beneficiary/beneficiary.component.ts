import { Beneficiary } from './../../../models/beneficiary';
import { User } from './../../../models/user';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent implements OnInit {
   @Input() beneficiary: Beneficiary;
   @Output() deleteBeneficiary: EventEmitter<Beneficiary> = new EventEmitter();
   @Output() percentageChanged: EventEmitter<Beneficiary> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(beneficiary: Beneficiary) {
    this.deleteBeneficiary.emit(beneficiary);
  }

  onChange(beneficiary: Beneficiary, inputElement) {
    if (inputElement.value > 0 && inputElement.value <= 100) {
      beneficiary.percentOfBenefit = inputElement.value;
      this.percentageChanged.emit(beneficiary);
    } else {
      // Throw an error. Must be between 1 and 100
    }
  }
}
