const customSortString = (order: string, s: string): string => {
  const customOrder = (c: string): number =>
    order.includes(c) ? order.indexOf(c) : order.length;

  return s
    .split("")
    .sort((a, b) => customOrder(a) - customOrder(b))
    .join("");
};
