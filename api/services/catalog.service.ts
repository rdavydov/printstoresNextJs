import { Get } from "api/decorators/http/Get";
import { Category } from "types/type/category.type";
import "reflect-metadata";
import { Controller } from "api/decorators";

@Controller("catalog")
class CatalogService {
    @Get("all")
    async getAllCategory(): Promise<Category> {
        return;
    }
}

export const catalogService = new CatalogService();
