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

  constructor() { }

  ngOnInit() {
  }

  onDelete(beneficiary: Beneficiary) {
    this.deleteBeneficiary.emit(beneficiary);
  }

}
