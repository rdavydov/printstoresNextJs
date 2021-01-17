import { Prefix, Upload } from "api/decorators";
import { AxiosResponse } from "axios";

interface IUpload {
    file: any;
    requestUrl?: string[];
    callbackResponse?: () => AxiosResponse<any>;
}

@Prefix("upload")
class UploadFileService {
    @Upload()
    async uploadFile({ file, requestUrl, callbackResponse }: IUpload) {
        return callbackResponse();
    }
}

export const uploadFileService = new UploadFileService();
