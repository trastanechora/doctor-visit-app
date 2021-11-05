import Store, { Patient, PatientState } from '~/@types';
import { SAMPLE_PATIENT } from '~/@utils';

/* ------------------------------------------------
  => State
  ----------------------------------------------- */
export const state = (): PatientState => ({
  isLoading: false,
  tableHeaders: [
    { text: 'Nama Pasien', value: 'name', width: 300 },
    { text: 'Jenis Kelamin', value: 'gender', width: 150 },
    { text: 'Usia', value: 'age', width: 150 },
    {
      text: 'Tanggal Lahir',
      value: 'dateOfBirth',
      width: 200
    },
    { text: 'Status', value: 'maritalStatus' },
    { text: 'Alamat', value: 'address', width: 400 },
    { text: 'Tindakan', value: 'action', align: 'center', width: 200 }
  ],
  list: [SAMPLE_PATIENT],
  current: null
});

/* ------------------------------------------------
  => Mutations
  ----------------------------------------------- */
export const mutations = {
  setCurrentPatient(state: PatientState, param: Patient): void {
    state.current = param;
  }
};

/* ------------------------------------------------
  => Actions
  ----------------------------------------------- */
export const actions: any = {
  changeCurrentPatient(store: Store<PatientState> | any, param: Patient): void {
    store.commit('setCurrentPatient', param);
  }
};
