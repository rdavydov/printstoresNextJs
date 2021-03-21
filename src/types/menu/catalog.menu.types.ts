export type MenuType = Array<{
  href: string;
  pageType: string;
  title: string;
  children: MenuType;
  parentID: null | string;
}>;
