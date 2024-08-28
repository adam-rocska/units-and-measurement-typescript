import {type Measurement, measurement} from "./measurement";

/**
 * Returns the value of a measurement object, fixed to a
 * number of decimal places.
 *
 * @template Unit The type of the unit of measurement.
 * @template Value The type of the value of the measurement.
 * @param measurement The measurement object.
 * @returns The value of the measurement object.
 */
export const toFixed = <
  Unit extends string,
  Value extends number
>(
  {value, unit}: Measurement<Unit, Value>,
  fractionDigits?: number
): Measurement<Unit, number> => measurement(
  parseFloat(value.toFixed(fractionDigits)),
  unit
);
