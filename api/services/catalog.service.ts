import { Get, Prefix } from "api/decorators";
import { IGet } from "api/decorators/types/Get.types";
import { Category } from "types/type/category.type";

@Prefix("catalog")
class CatalogService {
    @Get("all")
    async getAllCategory({
        requestUrl,
        callbackResponse,
    }: IGet<Category> = {}) {
        return callbackResponse();
    }
}

export const catalogService = new CatalogService();
