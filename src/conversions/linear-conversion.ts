import {ConversionFactory} from "../conversion";

export const linearConversion: ConversionFactory = (
  coefficient: number,
  constant: number = 0
) => [
    (value: number): number => value * coefficient + constant,
    (value: number): number => (value - constant) / coefficient
  ];