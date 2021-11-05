import { Address, Gender, TableHeader } from '~/@types';

export interface DoctorState {
  isLoading: boolean;
  tableHeaders: TableHeader[];
  list: Doctor[];
  current: Doctor | null;
}
export interface Doctor {
  uuid: string;
  name: string;
  dateOfBirth: string;
  address: Address;
  gender: Gender;
  createDate: string;
  updateDate: string;
  updateBy: string;
  photo: string;
  email: string;
}
