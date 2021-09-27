import { Doctor, Medicine, Patient } from '~/@types';

export interface TreatmentState {
  treatmentList: Treatment[];
  currentTreatment: Treatment | null;
}
export interface Treatment {
  patient: Patient;
  doctor: Doctor;
  medicines: Medicine[];
}
