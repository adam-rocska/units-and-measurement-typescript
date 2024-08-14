import {Invertible} from "@adam-rocska/invertible";
import {UnitConverter} from "../unit-converter";

export const valueToBase = (
  coefficient: number,
  constant: number = 0
): UnitConverter => Invertible(
  async (value: number) => (value * coefficient) + constant,
  async (value: number) => (value - constant) / coefficient
);