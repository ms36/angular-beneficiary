import { User } from './../../../models/user';
import { Beneficiary } from './../../../models/beneficiary';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficiary-app',
  templateUrl: './beneficiary-app.component.html',
  styleUrls: ['./beneficiary-app.component.css']
})
export class BeneficiaryAppComponent implements OnInit {
  user: User;

  numberOfBeneficiary: 2;
  constructor() { }

  ngOnInit() {
    this.user = {
    id: 1,
    email: 'email@example.com',
    firstName: 'Bob',
    lastName: 'Ross',
    beneficiaries: [
      {
      id: 1,
      firstName: 'Bruce',
      lastName: 'Wayne',
      percentOfBenefit: 50
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Wayne',
      percentOfBenefit: 50
    }
  ]
  };
  }

}
