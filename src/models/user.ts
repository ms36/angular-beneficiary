import { Beneficiary } from './beneficiary';
export class User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  primaryBeneficiaries: Beneficiary[];
  contingentBeneficiaries: Beneficiary[];
}
