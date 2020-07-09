import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficiary-app',
  templateUrl: './beneficiary-app.component.html',
  styleUrls: ['./beneficiary-app.component.css']
})
export class BeneficiaryAppComponent implements OnInit {

  numberOfBeneficiary: 2;
  constructor() { }

  ngOnInit() {
  }

}
