import {type Measurement} from "./measurement";
import * as string from "./string";
import * as tuple from "./tuple";
import * as object from "./object";
import * as dimension from "./dimension";

/**
 * Applies precision formatting to a measurement value.
 *
 * @param measurement - The measurement value to apply precision formatting to.
 * @param fractionDigits - The number of digits to appear after the decimal point.
 * @returns A new measurement value with precision formatting applied.
 */
export const toPrecision = <
  Unit extends string,
  Value extends number
>(
  measurement: Measurement<Unit, Value>,
  fractionDigits?: number
): Measurement<Unit, number> => {
  if (dimension.isMeasurement(measurement)) return dimension.toPrecision(measurement, fractionDigits);
  if (string.isMeasurement(measurement)) return string.toPrecision(measurement, fractionDigits);
  if (tuple.isMeasurement(measurement)) return tuple.toPrecision(measurement, fractionDigits);
  return object.toPrecision(measurement, fractionDigits);
};