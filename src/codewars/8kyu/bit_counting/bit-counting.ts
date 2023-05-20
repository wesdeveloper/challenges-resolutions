export const countBits = (n: number): number => {
  if (n <= 0) {
    return 0;
  }

  return n.toString(2).replace(/0/g, '').length;
};
