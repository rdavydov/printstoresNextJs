import { AxiosResponse } from "axios";
import { Prefix } from "utils/decorators/Prefix";
import { UploadFile } from "utils/decorators/UploadFile";

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
