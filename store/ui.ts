import Store, { UiState } from '~/@types';

/* ------------------------------------------------
  => State
  ----------------------------------------------- */
export const state = (): UiState => ({
  darkMode: false,
  drawerNavMenu: [
    {
      icon: 'mdi-human-queue',
      title: 'Pasien',
      to: '/patient'
    },
    {
      icon: 'mdi-heart-pulse',
      title: 'Kunjungan',
      to: '/visit'
    },
    {
      icon: 'mdi-pill',
      title: 'Obat',
      to: '/medicine'
    },
    {
      icon: 'mdi-stethoscope',
      title: 'Dokter',
      to: '/doctor'
    }
  ]
});

/* ------------------------------------------------
  => Mutations
  ----------------------------------------------- */
export const mutations = {
  setDarkMode(state: UiState, param: boolean): void {
    state.darkMode = param;
  }
};

/* ------------------------------------------------
  => Actions
  ----------------------------------------------- */
export const actions: any = {
  changeDarkMode(store: Store<UiState> | any, param: boolean): void {
    store.commit('setDarkMode', param);
  }
};
