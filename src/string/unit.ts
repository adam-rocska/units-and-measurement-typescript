import {type Measurement} from "./measurement";

/**
 * Returns the unit of a measurement.
 *
 * @template Unit The type of the unit of measurement.
 * @template Value The type of the value of the measurement.
 * @param measurement The measurement to get the unit of.
 * @returns The unit of the measurement.
 */
export const unit = <
  Unit extends string,
  Value extends number = number
>(
  measurement: Measurement<Unit, Value>
): Unit => {
  return measurement.slice(parseFloat(measurement).toString().length) as Unit;
};
