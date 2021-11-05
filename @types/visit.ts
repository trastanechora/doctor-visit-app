import { Doctor, Patient, TableHeader } from '~/@types';

export interface VisitState {
  isLoading: boolean;
  tableHeaders: TableHeader[];
  list: Visit[];
  current: Visit | null;
}
export interface Visit {
  uuid: string;
  patient: Patient;
  doctor: Doctor;
  medicine: string[];
  schedule: string;
  createTime: string;
  createBy: Doctor;
  updateTime: string;
  updateBy?: Doctor | null;
}
