import Store, { Visit, VisitState } from '~/@types';
import { SAMPLE_VISIT } from '~/@utils';

/* ------------------------------------------------
  => State
  ----------------------------------------------- */
export const state = (): VisitState => ({
  isLoading: false,
  tableHeaders: [
    { text: 'Pasien', value: 'patient', width: 300 },
    { text: 'Dokter', value: 'doctor', width: 200, align: 'center' },
    { text: 'Obat', value: 'medicine', width: 300, align: 'center' },
    { text: 'Tangga / Waktu', value: 'schedule', width: 300, align: 'center' },
    { text: 'Dicatat Pada', value: 'createTime', width: 200, align: 'center' },
    { text: 'Dicatat Oleh', value: 'CreateBy', width: 200, align: 'center' },
    {
      text: 'Terakhir Diperbarui',
      value: 'updateTime',
      width: 200,
      align: 'center'
    },
    { text: 'Tindakan', value: 'action', width: 200, align: 'center' }
  ],
  list: [SAMPLE_VISIT],
  current: null
});

/* ------------------------------------------------
  => Mutations
  ----------------------------------------------- */
export const mutations = {
  setCurrentVisit(state: VisitState, param: Visit): void {
    state.current = param;
  }
};

/* ------------------------------------------------
  => Actions
  ----------------------------------------------- */
export const actions: any = {
  changeCurrentVisit(store: Store<VisitState> | any, param: Visit): void {
    store.commit('setCurrentVisit', param);
  }
};
