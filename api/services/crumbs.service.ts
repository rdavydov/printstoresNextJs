import { Controller, Get } from "api/decorators";
import { Query } from "api/decorators/params/Query";

@Controller("crumbs")
class CrumbsService {
    @Get()
    async getCrumbsConfig({ query, callbackResponse }: any) {
        return callbackResponse();
    }
    @Get()
    async getCatalogCrumbs(): Promise<{ path: string; title: string }> {
        return;
    }

    @Get()
    async getCategoryCrumbsByKey(
        @Query("key") key: string
    ): Promise<{ path: string; title: string }> {
        return;
    }
    @Get()
    async getProductCrumbsByKeyAndPrefix(
        @Query("prefix") prefix: string,
        @Query("id") id: string
    ): Promise<{ path: string; title: string }> {
        return;
    }

    @Get()
    async getProductCrumbsByPrefix(
        @Query("prefix") prefix: string
    ): Promise<{ path: string; title: string }> {
        return;
    }
}

export const crumbsService = new CrumbsService();
