export const generateURL = (...args): string => {
    return args
        .filter((el, index) => {
            if (el) return el;
        })
        .join("/");
};
