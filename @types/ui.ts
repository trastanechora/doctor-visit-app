export interface UiState {
  darkMode: boolean;
  drawerNavMenu: SidebarMenuItem[];
}
export interface SidebarMenuItem {
  icon: string;
  title: string;
  to: string;
}
