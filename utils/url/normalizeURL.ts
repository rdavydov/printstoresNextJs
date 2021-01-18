import { generateURL } from "utils/generateURL";

interface INormalizeUrl {
    prefix: string;
    url?: string | string[];
    requestUrl: string[] | string;
    query: { [key: string]: string };
}

export const normalizeURL = ({
    prefix,
    url,
    requestUrl,
    query,
}: INormalizeUrl) => {
    if (query) {
        const requestURL = `${url}?` + new URLSearchParams(query);
        return generateURL(prefix, requestURL);
    } else {
        return generateURL(prefix, url, requestUrl);
    }
};
