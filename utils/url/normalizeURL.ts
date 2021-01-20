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
        const params = "?" + new URLSearchParams(query);
        if (prefix && url) return generateURL(prefix, url + params);
        if (!prefix) return generateURL(url + params);
        return generateURL(prefix + params);
    } else {
        return generateURL(prefix, url, requestUrl);
    }
};
