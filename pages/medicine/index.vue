<template>
  <v-layout wrap class="pa-10">
    <v-flex xs12>
      <v-card outlined>
        <v-card-title>
          <h3 class="primary--text">Daftar Obat</h3>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="searchString"
            append-icon="mdi-magnify"
            label="Cari berdasarkan nama"
            autocomplete="off"
            clearable
          ></v-text-field>
          <v-btn
            small
            rounded
            color="primary"
            outlined
            class="ml-2"
            @click="() => editDialogState(true)"
          >
            <v-icon left small>mdi-plus</v-icon>Tambah Obat
          </v-btn>
        </v-card-title>
        <hr color="gray" />
        <v-data-table
          :headers="tableHeaders"
          :items="tableBody"
          :items-per-page="10"
          :search="searchString"
          :loading="isLoading"
          class="mt-4"
        >
          <template #[`item.name`]="{ item }">
            <v-tooltip right>
              <template #activator="{ on }">
                <v-btn
                  text
                  small
                  color="primary"
                  v-on="on"
                  @click="console.warn(item.uuid)"
                  >{{ item.name }}</v-btn
                >
              </template>
              <span>Lihat Responden</span>
            </v-tooltip>
          </template>
          <template #[`item.age`]="{ item }"
            >{{ getAge(item.dateOfBirth) }} Tahun</template
          >
          <template #[`item.dateOfBirth`]="{ item }">{{
            formatDate(item.dateOfBirth)
          }}</template>
          <template #[`item.action`]="{ item }">
            <v-tooltip right>
              <template #activator="{ on, attrs }">
                <v-btn
                  icon
                  :loading="isLoading"
                  :disabled="isLoading"
                  v-bind="attrs"
                  v-on="on"
                  @click="editForm(item)"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Ubah</span>
            </v-tooltip>
            <v-tooltip right>
              <template #activator="{ on, attrs }">
                <v-btn
                  icon
                  :loading="isLoading"
                  :disabled="isLoading"
                  v-bind="attrs"
                  v-on="on"
                  @click="showDeleteDialog(item)"
                >
                  <v-icon>mdi-trash-can</v-icon>
                </v-btn>
              </template>
              <span>Hapus</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-card>
    </v-flex>
    <AddMedicine
      :dialog="dialog"
      :close-dialog="() => editDialogState(false)"
    />
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { TableHeader } from '~/@types';
import AddMedicine from '~/components/AddMedicine.vue';
import { ageFormatter, dateFormatter } from '~/@utils';

@Component({
  components: {
    AddMedicine
  }
})
export default class Medicine extends Vue {
  /* ------------------------------------
  => Local State Declaration
  ------------------------------------ */
  searchString: string = '';
  dialog: boolean = false;

  /* ------------------------------------
  => Setter and Getter
  ** (Adopt store variables to local state)
  ------------------------------------ */
  get isLoading(): boolean {
    return this.$store.state.medicine.isLoading;
  }

  get tableHeaders(): TableHeader {
    return this.$store.state.medicine.tableHeaders;
  }

  get tableBody(): Medicine[] {
    return this.$store.state.medicine.list;
  }

  /* ------------------------------------ 
  => Methods
  ------------------------------------ */
  editDialogState(targetState: boolean): void {
    this.dialog = targetState;
  }

  formatDate(dateString: string): string {
    const birthDate = new Date(dateString);
    return dateFormatter(birthDate);
  }

  getAge(dateString: string): number {
    return ageFormatter(dateString);
  }
}
</script>
