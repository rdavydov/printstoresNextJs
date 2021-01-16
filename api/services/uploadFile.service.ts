import { AxiosResponse } from "axios";
import { Prefix } from "api/decorators/Prefix";
import { UploadFile } from "api/decorators/UploadFile";

interface IUpload {
    file: any;
    requestUrl?: string[];
    callbackResponse?: () => AxiosResponse<any>;
}

@Prefix("upload")
class UploadFileService {
    @UploadFile()
    async uploadFile({ file, requestUrl, callbackResponse }: IUpload) {
        return callbackResponse();
    }
}

export const uploadFileService = new UploadFileService();
