export const generateURL = (...args): string => {
    console.log(args);
    return args
        .filter((el, index) => {
            if (el) {
                if (Array.isArray(el)) {
                    console.log("test");
                    return el.map((el) => el);
                } else {
                    return el;
                }
            }
        })
        .join("/");
};
