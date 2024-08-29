import {type Measurement} from "./measurement";

/**
 * Rounds the value of a measurement tuple to the specified precision.
 *
 * @param measurement The measurement tuple.
 * @param precision The number of significant digits.
 * @returns A new measurement tuple with the rounded value.
 */
export const toPrecision = <
  Unit extends string,
  Value extends number
>(
  [value, unit]: Measurement<Unit, Value>,
  precision?: number
): Measurement<Unit, number> => [
    parseFloat(value.toPrecision(precision)),
    unit
  ];