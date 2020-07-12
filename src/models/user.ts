import { Beneficiary } from './beneficiary';

export class User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  beneficiaryTypes: [
    Beneficiary[],  // Primary
    Beneficiary[]   // Contingent
  ];
}
