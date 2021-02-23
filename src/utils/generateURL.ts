export const generateURL = (...args): string =>
  args
    .filter(Boolean)
    .reduce((prev: [], cur) => prev.concat(cur), [])
    .join("/");
