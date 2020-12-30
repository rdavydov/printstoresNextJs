import { Prefix } from "utils/decorators/Prefix";
import { Get } from "utils/decorators/Get";

import { AxiosResponse } from "axios";

@Prefix("catalog")
class CatalogService {
    @Get("all")
    async getAllCategory(...response: AxiosResponse<any>[]) {
        const [res] = response;
        return res;
    }
}

export const catalogService = new CatalogService();
