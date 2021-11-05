import {
  Address,
  Doctor,
  Gender,
  MaritalStatus,
  Medicine,
  Patient,
  Visit
} from '~/@types';

export const SAMPLE_ADDRESS: Address = {
  street: 'Jl. Sragen-Balong KM7',
  no: '37',
  rt: '07',
  rw: '03',
  province: {
    id: '33',
    name: 'Jawa Tengah'
  },
  regency: {
    id: '3314',
    name: 'Sragen'
  },
  district: {
    id: '3314080',
    name: 'Ngrampal'
  },
  subDistrict: {
    id: '3314080002',
    name: 'Ngarum'
  },
  note: '',
  formatted:
    'Jl. Sragen-Balong KM7, NO:37 RT:07 RW:03, kel. Ngarum, kec. Ngrampal, kab. Sragen, prov. Jawa Tengah'
};

export const SAMPLE_DOCTOR: Doctor = {
  uuid: 'poiuytrewq',
  name: 'dr. Maestro Trastanechora',
  email: 'trastanechora@gmail.com',
  dateOfBirth: '1995-05-13T17:00:00.000Z',
  address: SAMPLE_ADDRESS,
  gender: Gender.EMPTY,
  createDate: '2021-05-13T17:00:00.000Z',
  updateDate: '',
  updateBy: '',
  photo:
    'https://media-exp1.licdn.com/dms/image/C5603AQGh2E4nWDWK9A/profile-displayphoto-shrink_800_800/0/1589541992473?e=1640822400&v=beta&t=iQWCA5Fucx6Hx32j7XmVBwl-hQHWJWTQO_vlaf0M1Vw'
};

export const SAMPLE_MEDICINE: Medicine = {
  uuid: 'qazwsxedcr',
  name: 'Paracetamol',
  code: 'P-01',
  createDate: '',
  lastUpdate: '',
  updateBy: null
};

export const SAMPLE_PATIENT: Patient = {
  name: 'Mae',
  dateOfBirth: '1995-05-13T17:00:00.000Z',
  gender: Gender.MALE,
  maritalStatus: MaritalStatus.MARIED,
  address: SAMPLE_ADDRESS,
  uuid: 'qwertyuiop',
  createDate: '2021-05-13T17:00:00.000Z',
  updateDate: '2020-05-13T17:00:00.000Z',
  updateBy: null
};

export const SAMPLE_VISIT: Visit = {
  uuid: 'plmoknijby',
  patient: SAMPLE_PATIENT,
  doctor: SAMPLE_DOCTOR,
  medicine: [''],
  schedule: '2021-09-13T17:00:00.000Z',
  createTime: '2021-05-13T17:00:00.000Z',
  createBy: SAMPLE_DOCTOR,
  updateTime: '',
  updateBy: null
};
