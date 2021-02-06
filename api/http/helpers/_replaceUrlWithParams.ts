export function _replaceUrlWithParams(url, params) {
  let replacedURL = url;
  Object.keys(params).forEach((paramKey) => {
    const paramValue = params[paramKey];
    replacedURL = replacedURL.replace(
      new RegExp(`:${paramKey}`, 'g'),
      paramValue
    );
  });
  return replacedURL;
}
