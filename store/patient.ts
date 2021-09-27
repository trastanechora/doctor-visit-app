import Store, { Gender, MaritalStatus, Patient, PatientState } from '../@types';

/* ------------------------------------------------
  => State
  ----------------------------------------------- */
export const state = (): PatientState => ({
  isLoading: false,
  tableHeaders: [
    { text: 'Nama Pasien', value: 'name', width: 300 },
    { text: 'Usia', value: 'age', align: 'center' },
    { text: 'Tanggal Lahir', value: 'dateOfBirth', align: 'center' },
    { text: 'Status', value: 'maritalStatus', align: 'center' },
    { text: 'Alamat', value: 'address', align: 'center' },
    { text: 'Tindakan', value: 'userAction', width: 200, align: 'center' }
  ],
  patientList: [
    {
      name: 'Mae',
      dateOfBirth: '1995-05-13T17:00:00.000Z',
      gender: Gender.MALE,
      maritalStatus: MaritalStatus.MARIED,
      address: {
        province: 'Jawa Tengah',
        kabupaten: 'Sragen',
        kecamatan: 'Ngrampal',
        district: 'Ngarum'
      },
      uuid: '',
      createDate: '',
      updateDate: '',
      updateBy: ''
    }
  ],
  currentPatient: null
});

/* ------------------------------------------------
  => Mutations
  ----------------------------------------------- */
export const mutations = {
  setCurrentPatient(state: PatientState, param: Patient): void {
    state.currentPatient = param;
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
