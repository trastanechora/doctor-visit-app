import { Address, Gender, MaritalStatus, TableHeader } from '~/@types';

export interface PatientState {
  isLoading: boolean;
  tableHeaders: TableHeader[];
  patientList: Patient[];
  currentPatient: Patient | null;
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
  updateBy: string;
}
