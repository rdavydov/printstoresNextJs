import { crumbsMenu, defaultCrumbsMenu } from "src/types/crumbs/crumbs.types";

export const createCrumbs = (
  currentRoute: string,
  menu: crumbsMenu[],
  defaultCrumbs: defaultCrumbsMenu[]
) => {
  let currentCrumbs = menu.find(({ href }) => href === currentRoute);
  if (!currentCrumbs) return defaultCrumbs;
  const { href, title } = currentCrumbs;
  const crumbs = [{ href, title }];

  while (currentCrumbs.parentID !== null) {
    currentCrumbs = menu.find(({ _id }) => _id === currentCrumbs?.parentID);
    crumbs.push({ href: currentCrumbs.href, title: currentCrumbs.title });
  }

  return [...defaultCrumbs, ...crumbs.reverse()];
};
