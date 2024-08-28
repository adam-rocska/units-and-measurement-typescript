import {type Measurement} from './measurement';
import {value} from './value';
import {unit} from './unit';

/**
 * Returns the value of a measurement with a fixed number of decimal places.
 *
 * @template Unit The type of the unit of measurement.
 * @template Value The type of the value of the measurement.
 * @param measurement The measurement to get the value of.
 * @param fractionDigits The number of decimal places to return.
 * @returns The value of the measurement with a fixed number of decimal places.
 */
export const toPrecision = <
  Unit extends string,
  Value extends number
>(
  measurement: Measurement<Unit, Value>,
  precision?: number
): Measurement<Unit, number> => {
  const v = value(measurement).toPrecision(precision);
  const m = unit(measurement);
  return `${v}${m}` as Measurement<Unit, number>;
};