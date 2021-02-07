export const generateURL = (...args): string => args
  .filter((el) => el && el.length)
  .reduce((prev: [], cur) => prev.concat(cur), [])
  .join('/');
