import Store, { Medicine, MedicineState } from '~/@types';
import { SAMPLE_MEDICINE } from '~/@utils';

/* ------------------------------------------------
  => State
  ----------------------------------------------- */
export const state = (): MedicineState => ({
  isLoading: false,
  tableHeaders: [
    { text: 'Nama', value: 'name' },
    { text: 'Kode', value: 'code', align: 'center' },
    { text: 'Tindakan', value: 'action', width: 200, align: 'center' }
  ],
  list: [SAMPLE_MEDICINE],
  current: null
});

/* ------------------------------------------------
  => Mutations
  ----------------------------------------------- */
export const mutations = {
  setCurrentMedicine(state: MedicineState, param: Medicine): void {
    state.current = param;
  }
};

/* ------------------------------------------------
  => Actions
  ----------------------------------------------- */
export const actions: any = {
  changeCurrentMedicine(
    store: Store<MedicineState> | any,
    param: Medicine
  ): void {
    store.commit('setCurrentMedicine', param);
  }
};
