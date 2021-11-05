import { Doctor, TableHeader } from '~/@types';

export interface MedicineState {
  isLoading: boolean;
  tableHeaders: TableHeader[];
  list: Medicine[];
  current: Medicine | null;
}
export interface Medicine {
  uuid: string;
  name: string;
  code: string;
  createDate: string;
  lastUpdate: string;
  updateBy?: Doctor | null;
}
