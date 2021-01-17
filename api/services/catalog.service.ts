import { Get, Prefix } from "api/decorators";
import { IGet } from "api/decorators/types/Get.types";

@Prefix("catalog")
class CatalogService {
    @Get()
    async getAllCategory({ requestUrl, callbackResponse }: IGet) {
        return callbackResponse();
    }
}

export const catalogService = new CatalogService();
