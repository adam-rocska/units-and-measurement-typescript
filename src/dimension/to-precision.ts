import {type Measurement} from "./measurement";
import * as o from "../object";

/**
 * Returns a new measurement with the value rounded to the specified number of decimal places.
 *
 * @param measurement - The measurement to round.
 * @param fractionDigits - The number of decimal places to round to. If not provided, the default behavior is used.
 * @returns A new measurement with the rounded value.
 */
export const toPrecision = <
  Units extends string,
  Unit extends Units,
  Value extends number
>(
  measurement: Measurement<Units, Unit, Value>,
  fractionDigits?: number
): Measurement<Units, Unit, number> => Object.create(
  o.toPrecision(measurement, fractionDigits),
  Object.getOwnPropertyDescriptors(measurement)
);