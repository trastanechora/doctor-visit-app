<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="600"
    @click:outside="close"
  >
    <template v-if="!loading">
      <v-card elevation="0">
        <v-card-title class="text-h6 primary white--text">
          Tambahkan Pasien
        </v-card-title>
        <v-card-text>
          <div class="mt-4">
            <v-card-text>
              <v-form
                ref="addPatientdForm"
                v-model="valid"
                lazy-validation
                class="pa-0"
              >
                <v-layout row>
                  <v-flex xs12>
                    <v-flex xs12>
                      <v-text-field
                        v-model="currentPatient.name"
                        outlined
                        clearable
                        label="Judul Kartu"
                        type="text"
                        autocomplete="off"
                        class="required"
                        :rules="notEmpty('Judul Kartu')"
                        :disabled="isLoading"
                        :loading="isLoading"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        v-model="currentPatient.dateOfBirth"
                        outlined
                        clearable
                        label="Deskripsi Kartu"
                        type="text"
                        autocomplete="off"
                        :disabled="isLoading"
                        :loading="isLoading"
                      ></v-text-field>
                    </v-flex>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-card-text>
          </div>
        </v-card-text>
        <v-card-actions class="justify-end py-4 px-6">
          <v-spacer />
          <v-btn
            text
            class="error--text"
            :disabled="isLoading"
            :loading="isLoading"
            @click="close"
            >Batal</v-btn
          >
          <v-btn
            v-if="isEdit"
            text
            :disabled="isLoading"
            :loading="isLoading"
            @click="doEdit"
            >Edit</v-btn
          >
          <v-btn
            v-else
            text
            :disabled="isLoading"
            :loading="isLoading"
            @click="doAdd"
            >Tambahkan</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { notEmptyRules } from '~/@utils';
import { Patient, Gender, MaritalStatus } from '~/@types';

@Component
export default class AddPatient extends Vue {
  /* ------------------------------------
  => Props declaration
  ------------------------------------ */
  @Prop({
    required: true,
    type: Boolean
  })
  dialog!: boolean;

  @Prop({
    required: false,
    type: Function,
    default() {
      return true;
    }
  })
  readonly closeDialog!: Function;

  /* ------------------------------------
  => Local State Declaration
  ------------------------------------ */
  loading: boolean = true;
  valid: boolean = true;
  isEdit: boolean = false;
  currentPatient: Patient = {
    uuid: 'r20vmts',
    name: '',
    dateOfBirth: '',
    gender: Gender.EMPTY,
    maritalStatus: MaritalStatus.EMPTY,
    address: {
      province: '',
      kabupaten: '',
      kecamatan: '',
      district: ''
    },
    createDate: '',
    updateDate: '',
    updateBy: ''
  };

  /* ------------------------------------
  => Setter and Getter
  ** (Adopt store variables to local state)
  ------------------------------------ */
  get isLoading(): boolean {
    return false;
  }

  /* ------------------------------------
  => Mounted (Lifecycle)
  ------------------------------------ */
  mounted(): void {
    this.loading = false;
  }

  /* ------------------------------------
  => Methods
  ------------------------------------ */
  notEmpty(identifier: string): any[] {
    return notEmptyRules(identifier);
  }

  doAdd(): void {
    this.closeDialog(false);
  }

  doEdit(): void {
    this.closeDialog(false);
  }

  close(): void {
    this.closeDialog(false);
  }
}
</script>
