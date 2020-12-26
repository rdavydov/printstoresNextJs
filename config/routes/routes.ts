import { Routes } from "../../types/type/routes.type";

export class RoutesConfig {
  private routes = {
    goods: "goods",
    catalog: "catalog",
    category: "category",
    product: "product",
    home: "",
  };

  private routesTitle = {
    goods: "",
    catalog: "Каталог",
    home: "Главная",
  };

  private getRoutes() {
    return this.routes;
  }

  getCategoryRoute(currentPath: string): string {
    return currentPath + `/${this.routes.category}/[key]`;
  }

  getProductsRoute(): string {
    return `/${this.routes.product}/[key]`;
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

  getRouteProduct(
    categoryID: string | number | string[],
    goodsID: string | number | string[]
  ): string {
    return `/${this.routes.catalog}/${this.routes.category}/${categoryID}/${this.routes.goods}/${goodsID}`;
  }

  getCrumbsConfig() {
    return [
      { path: `/${this.routes.home}`, name: this.routesTitle.home },
      { path: `/${this.routes.catalog}`, name: this.routesTitle.catalog },
    ];
  }
}

export const routesConfig = new RoutesConfig();
