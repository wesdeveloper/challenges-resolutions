export function rentalCarCost(d: number): number {
  const ammount = d * 40;

  if (d >= 3 && d < 7) {
    return ammount - 20;
  }

  if (d >= 7) {
    return ammount - 50;
  }

  return ammount;
}
