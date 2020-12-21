import { Routes } from "../../types/type/routes.type";

export class RoutesConfig {
  private routes = {
    product: "product",
    catalog: "catalog",
    category: "category",
    home: "",
  };

  private routesTitle = {
    product: "",
    catalog: "Каталог",
    home: "Главная",
  };

  private getRoutes() {
    return this.routes;
  }

  getCategoryRoute(currentPath: string): string {
    return currentPath + `/${this.routes.category}/[categoryID]`;
  }

  getProductRoute(currentPath: string): string {
    return currentPath + `/${this.routes.product}/[productID]`;
  }

  getPaginationLinks(oldLinks: Routes[], lastLink: Routes[]): Routes[] {
    return [...oldLinks, ...lastLink];
  }

  getRoute(route: string): string {
    return this.routes[route];
  }

  getRouteCategory(id: string | number | string[]): string {
    return `/catalog/${this.routes.category}/${id}`;
  }

  getCrumbsConfig() {
    return [
      { path: `/${this.routes.home}`, name: this.routesTitle.home },
      { path: `/${this.routes.catalog}`, name: this.routesTitle.catalog },
    ];
  }
}

export const routesConfig = new RoutesConfig();
