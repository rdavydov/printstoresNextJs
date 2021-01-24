import { Controller, Upload } from "api/decorators";
import { RequestFormData } from "api/decorators/params/RequestFormData";
import { AxiosResponse } from "axios";

interface Response {
    path: string;
}

@Controller("upload")
class UploadFileService {
    @Upload()
    async uploadFile(
        @RequestFormData("file") file: Blob | File
    ): Promise<Response> {
        return;
    }
}

export const uploadFileService = new UploadFileService();
