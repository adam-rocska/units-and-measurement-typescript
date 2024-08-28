import {type Measurement} from "./measurement";

/**
 * Returns the value of a measurement object.
 *
 * @template Unit The type of the unit of measurement.
 * @template Value The type of the value of the measurement.
 * @param measurement The measurement object.
 * @returns The value of the measurement object.
 */
export const value = <
  Unit extends string,
  Value extends number = number
>(
  measurement: Measurement<Unit, Value>
): Value => measurement.value;
