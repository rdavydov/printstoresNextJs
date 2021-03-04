export type crumbsMenu = {
  href: string;
  title: string;
  _id: string;
  parentID: null | string;
};

export type defaultCrumbsMenu = Omit<crumbsMenu, "_id" | "parentID">;
