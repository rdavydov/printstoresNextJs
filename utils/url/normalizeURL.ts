import { generateURL } from 'utils/generateURL';

interface INormalizeUrl {
    prefix: string;
    apiUrl?: string | string[];
    requestUrl: string[] | string;
    query?: { [key: string]: string };
    params?: { [key: string]: string };
}

export const normalizeURL = ({
  prefix,
  apiUrl,
  requestUrl,
  query,
}: INormalizeUrl) => {
  if (query) {
    const params = `?${new URLSearchParams(query).toString()}`;
    if (prefix && apiUrl) return generateURL(prefix, apiUrl + params);
    if (!prefix) return generateURL(apiUrl + params);
    return generateURL(prefix + params);
  }
  return generateURL(prefix, apiUrl, requestUrl);
};
