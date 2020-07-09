import { Beneficiary } from './../../../models/beneficiary';
import { User } from './../../../models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent implements OnInit {
   @Input() beneficiary: Beneficiary;

  constructor() { }

  ngOnInit() {
  }

}
