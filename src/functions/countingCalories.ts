import { FormValues } from "../components/Calсulator/CalculatorForm/Form";

export const countingCalories = (data: FormValues) => {
  const count = ((10 * data.weight) + (6.25 * data.height) - (5 * data.age) + (data.sex === 1 ? 161 : -5)) * data.activity;
  return count;
};
