export const generateURL = (...args): string => {
    return args
        .filter((el) => el && el.length)
        .reduce((prev: [], cur) => {
            return prev.concat(cur);
        }, [])
        .join("/");
};
