import {type Measurement} from "./measurement";

/**
 * Returns the value of a measurement.
 *
 * @template Unit The type of the unit of measurement.
 * @template Value The type of the value of the measurement.
 * @param measurement The measurement to get the value of.
 * @returns The value of the measurement.
 */
export const value = <
  Unit extends string,
  Value extends number = number
>(
  measurement: Measurement<Unit, Value>
): Value => parseFloat(measurement) as Value;