import {type Measurement} from "./measurement";
import * as string from "./string";
import * as tuple from "./tuple";
import * as object from "./object";

/**
 * Returns the unit of measurement for the given measurement.
 *
 * @template Unit - The type of unit.
 * @param measurement - The measurement value.
 * @returns The unit of measurement.
 */
export function unit<Unit extends string>(measurement: Measurement<Unit>): Unit {
  if (string.isMeasurement(measurement)) return string.unit(measurement);
  if (tuple.isMeasurement(measurement)) return tuple.unit(measurement);
  return object.unit(measurement);
}
