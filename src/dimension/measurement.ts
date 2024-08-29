import {type Alternatives} from "./alternatives/alternatives";
import {type Conversions} from "./conversion";
import * as o from "../object";
import {propertyDescriptors} from "./alternatives/property-descriptors";

/// MARK: Type

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

/// MARK: Factory

/**
 * Creates a dimension measurement.
 * @param conversions - The conversions for the dimension.
 * @param value - The value of the measurement.
 * @param unit - The unit of the measurement.
 * @returns The measurement.
 * @template Units - The units of the dimension.
 * @template Unit - The unit of the measurement.
 */
export const measurement = <
  Units extends string,
  Unit extends Units,
  Value extends number
>(
  conversions: Conversions<Units>,
  value: Value,
  unit: Unit
): Measurement<Units, Unit, Value> => Object(Object.create(
  o.measurement(value, unit),
  propertyDescriptors(conversions)
));
