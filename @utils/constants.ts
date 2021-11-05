import {
  Address,
  Doctor,
  Gender,
  MaritalStatus,
  Medicine,
  Patient,
  Visit
} from '~/@types';

export const EMPTY_ADDRESS: Address = {
  street: '',
  no: '',
  rt: '',
  rw: '',
  province: {
    id: '',
    name: ''
  },
  regency: {
    id: '',
    name: ''
  },
  district: {
    id: '',
    name: ''
  },
  subDistrict: {
    id: '',
    name: ''
  },
  note: '',
  formatted: ''
};

export const EMPTY_DOCTOR: Doctor = {
  uuid: '',
  name: '',
  email: '',
  dateOfBirth: '',
  address: EMPTY_ADDRESS,
  gender: Gender.EMPTY,
  createDate: '',
  updateDate: '',
  updateBy: '',
  photo: ''
};

export const EMPTY_MEDICINE: Medicine = {
  uuid: '',
  name: '',
  code: '',
  createDate: '',
  lastUpdate: '',
  updateBy: null
};

export const EMPTY_PATIENT: Patient = {
  uuid: '',
  name: '',
  dateOfBirth: '',
  address: EMPTY_ADDRESS,
  gender: Gender.EMPTY,
  maritalStatus: MaritalStatus.EMPTY,
  createDate: '',
  updateDate: '',
  updateBy: null
};

export const EMPTY_VISIT: Visit = {
  uuid: '',
  patient: EMPTY_PATIENT,
  doctor: EMPTY_DOCTOR,
  medicine: [''],
  schedule: '',
  createTime: '',
  createBy: EMPTY_DOCTOR,
  updateTime: '',
  updateBy: null
};
