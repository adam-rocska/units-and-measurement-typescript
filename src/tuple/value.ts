import {type Measurement} from "./measurement";

/**
 * Extracts the value from a measurement tuple.
 *
 * @param measurement The measurement tuple.
 * @returns The value of the measurement.
 */
export const value = <
  Unit extends string,
  Value extends number = number
>(
  measurement: Measurement<Unit, Value>
): Value => measurement[0];
