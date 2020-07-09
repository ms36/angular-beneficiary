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

  constructor() { }

  ngOnInit() {
      this.user = {
      id: 1,
      email: 'email@example.com',
      firstName: 'Bob',
      lastName: 'Ross',
      primaryBeneficiaries: [
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
    ],
      contingentBeneficiaries: []
    };
  }

  deleteBeneficiary(beneficiary: Beneficiary) {
    console.log('app-beneficiary-app: delete');
    this.user.primaryBeneficiaries = this.user.primaryBeneficiaries.filter(b => b.id !== beneficiary.id);
    // this.beneficiaryService.deleteTodo(beneficiary).subscribe();
  }

  addBeneficiary() {
    const newBeneficiary = {
      id: 3,
      firstName: 'Lil',
      lastName: 'Wayne',
      percentOfBenefit: 50
    };

    this.user.primaryBeneficiaries.push(newBeneficiary);
  }

}
