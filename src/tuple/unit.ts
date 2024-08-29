import {type Measurement} from "./measurement";

/**
 * Extracts the unit from a measurement tuple.
 *
 * @param measurement The measurement tuple.
 * @returns The unit of the measurement.
 */
export const unit = <
  Unit extends string,
  Value extends number = number
>(
  measurement: Measurement<Unit, Value>
): Unit => measurement[1];
