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
export interface Address {
  province: string;
  kabupaten: string;
  kecamatan: string;
  district: string;
}

export interface TableHeader {
  text: string;
  value: string;
  width?: number;
  align?: string;
}
