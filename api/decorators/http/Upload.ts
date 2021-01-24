import ApiClient from "api/ApiClient";
import { requestConfig } from "api/services/RequestConfig.service";
import { AxiosResponse } from "axios";
import { generateURL } from "utils/generateURL";
import { _createApiParams } from "../helpers/createApiParams";
import { _getFormData } from "../helpers/getFormData";
import { metadataKey } from "../Prefix";

interface IRequestProps {
    file: any;
    requestUrl?: string[];
    callbackResponse?: () => AxiosResponse<any>;
}

export function Upload(apiUrl?: string, convertToFormData?: boolean) {
    return (
        target: Object,
        methodName: string,
        descriptor: TypedPropertyDescriptor<any>
    ) => {
        const apiClient = async (instance: Object, ...props: any[]) => {
            const { urlToUse, formData } = _createApiParams(
                instance,
                methodName,
                props,
                { createFormData: true },
                apiUrl
            );
            const config = requestConfig.getformDataConfig();
            const { data } = await ApiClient.post(urlToUse, formData, config);
            return data;
        };
        descriptor.value = async function (...props) {
            const instance = this;
            const response: Response = await apiClient(instance, ...props);
            return response;
        };
        return descriptor;
    };
}
