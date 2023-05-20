export const isTriangle = (a: number, b: number, c: number): boolean => {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  return true;
};
