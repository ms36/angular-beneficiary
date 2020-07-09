import { User } from './../../../models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beneficiary-header',
  templateUrl: './beneficiary-header.component.html',
  styleUrls: ['./beneficiary-header.component.css']
})
export class BeneficiaryHeaderComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
