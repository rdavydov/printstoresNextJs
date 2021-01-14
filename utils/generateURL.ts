export const generateURL = (...args): string => {
    return args
        .filter((el, index) => {
            if (el) {
                if (Array.isArray(el)) {
                    return el.map((el) => el);
                } else {
                    return el;
                }
            }
        })
        .join("/");
};
