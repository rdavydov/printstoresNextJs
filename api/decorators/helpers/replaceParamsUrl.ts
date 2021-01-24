export const _replaceParamsUrl = (
    url: string,
    paramsToReplace: { [key: string]: any }
) => {
    let replacedURL = url;
    Object.keys(paramsToReplace).forEach((paramKey) => {
        const paramValue = paramsToReplace[paramKey];
        replacedURL = replacedURL.replace(
            new RegExp(`{${paramKey}}`, "g"),
            paramValue
        );
    });
    return replacedURL;
};
