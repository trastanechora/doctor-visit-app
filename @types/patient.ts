import { Address, Doctor, Gender, MaritalStatus, TableHeader } from '~/@types';

export interface PatientState {
  isLoading: boolean;
  tableHeaders: TableHeader[];
  list: Patient[];
  current: Patient | null;
}
export interface Patient {
  uuid: string;
  name: string;
  dateOfBirth: string;
  address: Address;
  gender: Gender;
  maritalStatus: MaritalStatus;
  createDate: string;
  updateDate: string;
  updateBy?: Doctor | null;
}
