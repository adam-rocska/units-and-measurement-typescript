import * as string from "./string";
import * as tuple from "./tuple";
import * as object from "./object";
import * as dimension from "./dimension";
import {unit} from "./unit";

/// MARK: Measurement Type

/**
 * Represents a measurement with a specific unit and value.
 *
 * @template Unit - The type of unit for the measurement.
 * @template Value - The type of value for the measurement.
 */
export type Measurement<Unit extends string, Value extends number = number> =
  | string.Measurement<Unit, Value>
  | tuple.Measurement<Unit, Value>
  | object.Measurement<Unit, Value>
  | dimension.Measurement<Unit, Unit, Value>
  ;

/// MARK: String Measurement
/**
 * Creates a measurement string based on the specified base
 * and value.
 *
 * @template Unit - The unit type of the measurement.
 * @template Value - The value type of the measurement.
 *
 * @param {string.Measurement<Unit, number>} string - The base measurement string.
 * @param {Value}                           value  - The value of the measurement.
 *
 * @returns {string.Measurement<Unit, Value>} - The created measurement string.
 */
export function measurement<
  Unit extends string,
  Value extends number
>(
  string: string.Measurement<Unit, number>,
  value: Value
): string.Measurement<Unit, Value>;
/// MARK: Dimension Measurement
/**
 * Creates a dimension measurement object matching the
 * provided dimension of the given value.
 *
 * @template Units - The units of the dimension.
 * @template Unit  - The unit type of the measurement.
 * @template Value - The value type of the measurement.
 *
 * @param {dimension.Measurement<Units, Unit, Value>} dimension - The base dimension measurement.
 * @param {Value}                                     value     - The value of the measurement.
 *
 * @returns {Measurement<Unit, Value>} - The created measurement object.
 */
export function measurement<
  Units extends string,
  Unit extends Units,
  Value extends number
>(
  dimension: dimension.Measurement<Units, Unit, number>,
  value: Value
): dimension.Measurement<Units, Unit, Value>;
/// MARK: Tuple Measurement
/**
 * Creates a measurement tuple based on the specified base
 * and value.
 *
 * @template Unit - The unit type of the measurement.
 * @template Value - The value type of the measurement.
 *
 * @param {tuple.Measurement<Unit, number>} tuple - The base measurement tuple.
 * @param {Value}                           value - The value of the measurement.
 *
 * @returns {tuple.Measurement<Unit, Value>} - The created measurement tuple.
 */
export function measurement<
  Unit extends string,
  Value extends number
>(
  tuple: tuple.Measurement<Unit, number>,
  value: Value
): tuple.Measurement<Unit, Value>;
/// MARK: Object Measurement
/**
 * Creates a measurement object based on the specified base
 * and value.
 *
 * @template Unit - The unit type of the measurement.
 * @template Value - The value type of the measurement.
 *
 * @param {object.Measurement<Unit, number>} object - The base measurement object.
 * @param {Value}                            value  - The value of the measurement.
 *
 * @returns {object.Measurement<Unit, Value>} - The created measurement object.
 */
export function measurement<
  Unit extends string,
  Value extends number
>(
  object: object.Measurement<Unit, number>,
  value: Value
): object.Measurement<Unit, Value>;
/// MARK: Vague Measurement
/**
 * Creates a measurement object based on the specified base
 * and value.
 *
 * @template Unit  - The unit type of the measurement.
 * @template Value - The value type of the measurement.
 *
 * @param {Measurement<Unit, number>} base  - The base measurement object.
 * @param {Value}                     value - The value of the measurement.
 *
 * @returns {Measurement<Unit, Value>} - The created measurement object.
 */
export function measurement<
  Unit extends string,
  Value extends number
>(
  base: Measurement<Unit, number>,
  value: Value
): Measurement<Unit, Value>;
/// MARK: Measurement Factory
export function measurement<
  Unit extends string,
  Value extends number
>(
  base: Measurement<Unit, number>,
  value: Value
): Measurement<Unit, Value> {
  const u = unit(base);
  const v = value;
  if (dimension.isMeasurement(base)) return dimension.measurement(base, v, u);
  if (object.isMeasurement(base)) return object.measurement(v, u);
  if (tuple.isMeasurement(base)) return tuple.measurement(v, u);
  return string.measurement(v, u);
}

