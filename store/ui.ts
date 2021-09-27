import Store, { UiState } from '../@types';

/* ------------------------------------------------
  => State
  ----------------------------------------------- */
export const state = (): UiState => ({
  darkMode: false,
  drawerNavMenu: [
    {
      icon: 'mdi-apps',
      title: 'Pasien',
      to: '/patient'
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'Kunjungan',
      to: '/visit'
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'Obat',
      to: '/medicine'
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
