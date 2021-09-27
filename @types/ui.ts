export interface UiState {
  darkMode: boolean;
  drawerNavMenu: SidebarMenuItem[];
}
export interface SidebarMenuItem {
  icon: string;
  title: string;
  to: string;
}

export enum FormStatus {
  UNSTARTED = 'unstarted',
  OPEN = 'open',
  CLOSED = 'closed',
  ENDED = 'ended',
  DELETED = 'deleted'
}
