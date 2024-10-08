import {type Measurement} from "./measurement";
import * as string from "./string";
import * as tuple from "./tuple";
import * as object from "./object";

/**
 * Retrieves the value from a measurement object.
 *
 * @param measurement - The measurement object to retrieve the value from.
 * @returns The value of the measurement.
 */
export function value<
  Unit extends string,
  Value extends number
>(measurement: Measurement<Unit, Value>): Value {
  if (string.isMeasurement(measurement)) return string.value(measurement);
  if (tuple.isMeasurement(measurement)) return tuple.value(measurement);
  return object.value(measurement);
}