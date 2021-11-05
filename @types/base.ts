export enum Gender {
  MALE = 'Laki-laki',
  FEMALE = 'Perempuan',
  EMPTY = ''
}
export enum MaritalStatus {
  SINGLE = 'Lajang',
  MARIED = 'Menikah',
  DIVORCED = 'Cerai',
  EMPTY = ''
}

export interface BasicObject {
  id: string;
  name: string;
}
export interface Address {
  street: string;
  no: string;
  rt: string;
  rw: string;
  province: BasicObject;
  regency: BasicObject;
  district: BasicObject;
  subDistrict: BasicObject;
  note: string;
  formatted: string;
}

export interface TableHeader {
  text: string;
  value: string;
  width?: number;
  align?: string;
}
