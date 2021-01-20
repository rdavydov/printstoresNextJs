import { Get, Prefix } from "api/decorators";
import { IGet } from "api/decorators/types/Get.types";
@Prefix("crumbs")
class CrumbsService {
    @Get()
    async getCrumbsConfig({
        query,
        callbackResponse,
    }: IGet<Array<{ path: string; title: string }>> = {}) {
        return callbackResponse();
    }
}

export const crumbsService = new CrumbsService();
