import Store, { Doctor, DoctorState } from '~/@types';
import { SAMPLE_DOCTOR } from '~/@utils';

/* ------------------------------------------------
  => State
  ----------------------------------------------- */
export const state = (): DoctorState => ({
  isLoading: false,
  tableHeaders: [
    { text: 'Nama Pasien', value: 'name', width: 300 },
    { text: 'Usia', value: 'age', align: 'center' },
    { text: 'Tanggal Lahir', value: 'dateOfBirth', align: 'center' },
    { text: 'Status', value: 'maritalStatus', align: 'center' },
    { text: 'Alamat', value: 'address', align: 'center' },
    { text: 'Tindakan', value: 'action', width: 200, align: 'center' }
  ],
  list: [SAMPLE_DOCTOR],
  current: null
});

/* ------------------------------------------------
  => Mutations
  ----------------------------------------------- */
export const mutations = {
  setCurrentDoctor(state: DoctorState, param: Doctor): void {
    state.current = param;
  }
};

/* ------------------------------------------------
  => Actions
  ----------------------------------------------- */
export const actions: any = {
  changeCurrentDoctor(store: Store<DoctorState> | any, param: Doctor): void {
    store.commit('setCurrentDoctor', param);
  }
};
