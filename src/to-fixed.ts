import {type Measurement} from "./measurement";
import * as string from "./string";
import * as tuple from "./tuple";
import * as object from "./object";
import * as dimension from "./dimension";

/**
 * Converts a measurement value to a fixed number with a specified number of decimal places.
 *
 * @param measurement - The measurement value to convert.
 * @param fractionDigits - The number of decimal places to round to. If not provided, the default behavior is used.
 * @returns The converted measurement value with the specified number of decimal places.
 */
export const toFixed = <
  Unit extends string,
  Value extends number
>(
  measurement: Measurement<Unit, Value>,
  fractionDigits?: number
): Measurement<Unit, number> => {
  if (dimension.isMeasurement(measurement)) return dimension.toFixed(measurement, fractionDigits);
  if (string.isMeasurement(measurement)) return string.toFixed(measurement, fractionDigits);
  if (tuple.isMeasurement(measurement)) return tuple.toFixed(measurement, fractionDigits);
  return object.toFixed(measurement, fractionDigits);
};