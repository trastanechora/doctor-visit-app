import { Address, Gender } from '~/@types';

export interface DoctorState {
  doctorList: Doctor[];
  currentDoctor: Doctor;
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
}
