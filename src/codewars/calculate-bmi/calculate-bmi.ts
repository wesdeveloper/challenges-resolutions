export function bmi(weight: number, height: number): string {
  const bmiStates = {
    underWeight: "Underweight",
    normal: "Normal",
    obese: "Obese",
    overWeight: "Overweight",
  };
  const bmi = weight / (height * height);

  if (bmi <= 18.5) return bmiStates.underWeight;
  if (bmi <= 25) return bmiStates.normal;
  if (bmi <= 30) return bmiStates.overWeight;

  return bmiStates.obese;
}
