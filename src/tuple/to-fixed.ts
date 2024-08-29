import {type Measurement} from "./measurement";

/**
 * Rounds the value of a measurement tuple to the specified number of decimal places.
 *
 * @param measurement The measurement tuple.
 * @param fractionDigits The number of decimal places.
 * @returns A new measurement tuple with the rounded value.
 */
export const toFixed = <
  Unit extends string,
  Value extends number
>(
  [value, unit]: Measurement<Unit, Value>,
  fractionDigits?: number
): Measurement<Unit, number> => [
    parseFloat(value.toFixed(fractionDigits)),
    unit
  ];
