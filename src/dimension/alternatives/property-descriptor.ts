import {type Alternatives} from "./alternatives";
import {type Conversions} from "../conversion";
import {alternativeGet} from "./alternative-get";

/**
 * Represents a descriptor for an alternative unit in a dimension.
 *
 * @template Units - The type of units available.
 * @template Unit - The specific unit type.
 */
export type AlternativeDescriptor<
  Units extends string,
  Unit extends Units
> = PropertyDescriptorOf<Alternatives<Units>, Unit>;

/**
 * Creates a property descriptor for a specific unit of measurement.
 *
 * @template Units - The type of units available.
 * @template Unit - The specific unit of measurement.
 *
 * @param conversions - The conversions object containing the unit conversions.
 * @param unit - The specific unit of measurement.
 *
 * @returns A property descriptor for the specified unit of measurement.
 */
export const propertyDescriptor = <
  Units extends string,
  Unit extends Units
>(
  conversions: Conversions<Units>,
  unit: Unit
): AlternativeDescriptor<Units, Unit> => ({
  enumerable: true,
  get: alternativeGet(conversions, unit),
});