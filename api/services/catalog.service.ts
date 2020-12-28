import { Prefix } from "utils/decorators/Prefix";
import { Get } from "utils/decorators/Get";

import { AxiosResponse } from "axios";

@Prefix("catalog")
class CatalogService {
    @Get("all")
    async getAllCategory(...response: AxiosResponse<any>[]) {
        return response[0];
    }
}

export const catalogService = new CatalogService();
