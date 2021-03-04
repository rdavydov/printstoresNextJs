import { Request } from "../../http/Request";
import { MenuResponse } from "./types/menu.response";

class MenuService {
  request = new Request("menu");

  getPageMenu(menuType): Promise<MenuResponse> {
    return this.request.GET({ url: ":menuType", params: { menuType } });
  }
}

export const menuService = new MenuService();
