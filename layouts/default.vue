<template>
  <v-app fixed app dark>
    <v-navigation-drawer :mini-variant="miniVariant" clipped fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left fixed app>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn id="home-btn" text class="ma-2" to="/" active-class="no-active">
        <v-toolbar-title v-text="title" />
      </v-btn>
      <v-spacer />
      <v-btn
        id="switch-theme"
        depressed
        small
        fab
        class="ma-2"
        @click="switchTheme"
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn
            rounded
            color="primary"
            v-bind="attrs"
            class="text-none"
            v-on="on"
          >
            <v-avatar
              v-if="currentUser.imgUrl"
              size="25"
              class="inherit-spacing"
            >
              <img :src="currentUser.imgUrl" alt="profile-pic" />
            </v-avatar>
            <v-icon v-else left size="25" class="inherit-spacing">
              mdi-account-circle
            </v-icon>
            <span
              v-if="currentUser.displayName !== ''"
              class="normal-spacing ml-2"
              >{{ currentUser.displayName }}</span
            >
            <span v-else>User</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item id="do-logout" @click="logout">
            <v-list-item-action>
              <v-icon> mdi-exit-to-app </v-icon>
            </v-list-item-action>
            <v-list-item-title> Keluar </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { SidebarMenuItem } from '~/@types';

@Component
export default class DefaultLayout extends Vue {
  /* ------------------------------------
  => Local State Declaration
  ------------------------------------ */
  readonly name: string = 'default';
  title: string = 'Doctor Visit App';
  miniVariant: boolean = false;

  /* ------------------------------------
  => Setter and Getter
  ** (Adopt store variables to local state)
  ------------------------------------ */
  get menuItems(): SidebarMenuItem {
    return this.$store.state.ui.drawerNavMenu;
  }

  get currentUser(): { displayName: string; imgUrl: string } {
    return {
      displayName: 'Mae',
      imgUrl:
        'https://secure.img1-fg.wfcdn.com/im/77981853/resize-h755-w755%5Ecompr-r85/8470/84707680/Pokemon+Pikachu+Wall+Decal.jpg'
    };
  }

  /* ------------------------------------ 
  => Methods
  ------------------------------------ */
  switchTheme(): void {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
  }

  logout() {
    this.$router.push('/login');
  }
}
</script>

<style>
.v-btn {
  letter-spacing: normal;
  text-transform: none;
}
</style>
