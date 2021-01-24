import { Controller, Upload } from "api/decorators";
import { FormData } from "api/decorators/params/FormData";

interface Response {
    path: string;
}

@Controller("upload")
class UploadFileService {
    @Upload()
    async uploadFile(
        @FormData("file") file: Blob | File | string
    ): Promise<Response> {
        return;
    }
}

export const uploadFileService = new UploadFileService();
