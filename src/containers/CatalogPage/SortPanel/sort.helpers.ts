let lastValue;
let direction = false;
export const getSortParams = (
  value?: string
): { sortBy: string; direction: 'ASC' | 'DESC' } => {
  if (!value) return { sortBy: '', direction: 'ASC' };
  lastValue = value;
  if (value === lastValue) {
    direction = !direction;
    return { sortBy: value, direction: direction ? 'ASC' : 'DESC' };
  }
  return { sortBy: value, direction: 'ASC' };
};
