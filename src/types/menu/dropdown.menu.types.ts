export type MenuItems = Array<{ title: string; path: string }>;

export type HeaderMenu = Array<{ menuLabel: string; menuItems: Array<{ title: string; items: MenuItems }> }>;

export type HeaderMenuDropdown = Array<{
  label: string;
  path: string;
  submenu: Array<{ label: string; path: string; items: Array<{ label: string; path: string }> }>;
}>;

export type Submenu = Array<{ label: string; path: string; items: Array<{ label: string; path: string }> }>;
export type SubmenuItems = Array<{ label: string; path: string }>;
