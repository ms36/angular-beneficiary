import { Beneficiary } from './beneficiary';
export class User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  beneficiaries: Beneficiary[];
}
