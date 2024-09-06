import {measurement, Measurement} from "../measurement";
import {value} from "../value";
import {arithmeticOperation} from "./arithmetic-operation";

export const add = arithmeticOperation.bind(null, (a, b) => a + b);
export const subtract = arithmeticOperation.bind(null, (a, b) => a - b);

export function multiply<Unit extends string>(
  multiplicand: Measurement<Unit>,
  multiplier: number
): Measurement<Unit> {
  return measurement(multiplicand, value(multiplicand) * multiplier);
}

export function divide<Unit extends string>(
  dividend: Measurement<Unit>,
  divisor: number
): Measurement<Unit> {
  return measurement(dividend, value(dividend) / divisor);
}

export function power<Unit extends string>(
  base: Measurement<Unit>,
  exponent: number
): Measurement<Unit> {
  return measurement(base, value(base) ** exponent);
}

export function root<Unit extends string>(
  radicand: Measurement<Unit>,
  index: number
): Measurement<Unit> {
  return measurement(radicand, value(radicand) ** (1 / index));
}

export function logarithm<Unit extends string>(
  antilogarithm: Measurement<Unit>,
  base: number
): Measurement<Unit> {
  return measurement(antilogarithm, Math.log(value(antilogarithm)) / Math.log(base));
}

