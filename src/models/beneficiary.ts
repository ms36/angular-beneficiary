export class Beneficiary {
  id: number;
  firstName: string;
  lastName: string;
  // relationship: string;
  // gender: string;
  // dateOfBirth: Date;
  // socialSecurityNumber: number;
  // phoneNumber: number;
  // address: {
  //   city: string,
  //   state: string,
  //   zip: number,
  //   country: string
  // };
  percentOfBenefit: number;

  constructor() {
    this.id = null;
    this.firstName = '';
    this.lastName = '';
    this.percentOfBenefit = 0;
  }
}
