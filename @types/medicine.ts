export interface MedicineState {
  medicineList: Medicine[];
  currentMedicine: Medicine;
}
export interface Medicine {
  uuid: string;
  name: string;
  code: string;
  createDate: string;
  lastUpdate: string;
  lastUpdateBy: string;
}
