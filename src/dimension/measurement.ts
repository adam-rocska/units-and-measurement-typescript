import {type Alternatives} from "./alternatives";
import {type Conversions} from "./conversion";
import * as o from "../object";
import {propertyDescriptors} from "./alternatives";
import {isMeasurement} from "./is-measurement";

/**
 * Represents a dimension measurement.
 * @template Units - The units of the dimension.
 */
export type Measurement<
  Units extends string,
  Unit extends Units = Units,
  Value extends number = number
> =
  & o.Measurement<Unit, Value>
  & Alternatives<Units>;


/**
 * Creates a dimension measurement governed by a set of conversions.
 * @param conversions - The conversions to use.
 * @param value - The value of the measurement.
 * @param unit - The unit of the measurement.
 * @returns A dimension measurement.
 * @template Units - The units of the dimension.
 * @template Unit - The unit of the measurement.
 * @template Value - The value of the measurement.
 */
export function measurement<
  Units extends string,
  Unit extends Units,
  Value extends number
>(
  conversions: Conversions<Units>,
  value: Value,
  unit: Unit
): Measurement<Units, Unit, Value>;
/**
 * Creates a dimension measurement governed by another
 * dimension measurement.
 * @param base - The base measurement.
 * @param value - The value of the measurement.
 * @param unit - The unit of the measurement.
 * @returns A dimension measurement of the same dimension as the base.
 * @template Units - The units of the dimension.
 * @template Unit - The unit of the measurement.
 * @template Value - The value of the measurement.
 */
export function measurement<
  Units extends string,
  Unit extends Units,
  Value extends number
>(
  base: Measurement<Units>,
  value: Value,
  unit: Unit
): Measurement<Units, Unit, Value>;
export function measurement<
  Units extends string,
  Unit extends Units,
  Value extends number
>(
  basis: Conversions<Units> | Measurement<Units>,
  value: Value,
  unit: Unit
): Measurement<Units, Unit, Value> {
  return Object(Object.create(
    o.measurement(value, unit),
    isMeasurement(basis)
      ? Object.getOwnPropertyDescriptors(basis)
      : propertyDescriptors(basis)
  ));
}
