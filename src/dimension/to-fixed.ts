import {type Measurement} from "./measurement";
import * as o from "../object";

/**
 * Rounds the value of a measurement to a specified number of decimal places.
 *
 * @param measurement - The measurement to round.
 * @param fractionDigits - The number of decimal places to round to. If not provided, the default value is used.
 * @returns A new measurement with the rounded value.
 */
export const toFixed = <
  Units extends string,
  Unit extends Units,
  Value extends number
>(
  measurement: Measurement<Units, Unit, Value>,
  fractionDigits?: number
): Measurement<Units, Unit, number> => Object.create(
  o.toFixed(measurement, fractionDigits),
  Object.getOwnPropertyDescriptors(measurement)
);