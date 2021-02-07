export function getInitialQuery<QueryType>(query, defaultQuery): QueryType {
  const searchQuery = Object.keys(query || {});
  if (!searchQuery.length) return defaultQuery;
  return searchQuery.every((key) => Object.keys(defaultQuery).includes(key)) ? query : defaultQuery;
}
