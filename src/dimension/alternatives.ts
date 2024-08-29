import {type Measurement} from "./measurement";
import {type Conversions} from "./conversion";
import * as o from "../object";

/// MARK: Alternatives

/**
 * Represents a collection of alternative measurements for different units.
 *
 * @template Units - The string literal type representing the available units.
 */
export type Alternatives<
  Units extends string
> = {
    readonly [unit in Units]: Measurement<Units, unit, number>
  };

/// MARK: Property Descriptors

/**
 * Generates property descriptors for the given conversions.
 *
 * @template Units - The type of units.
 * @param conversions - The conversions object.
 * @returns The property descriptors for the alternatives.
 */
export function propertyDescriptors<
  Units extends string
>(
  conversions: Conversions<Units>
): PropertyDescriptorsOf<Alternatives<Units>> {
  const descriptors = Object.create(null);
  for (const unit in conversions) descriptors[unit] = propertyDescriptor(
    conversions,
    unit
  );
  return descriptors;
}

/// MARK: Property Descriptor


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

/// MARK: Alternative Getter

/**
* Represents a function type that retrieves an alternative measurement of a specific unit.
*
* @template Units - The string literal type representing the available units.
* @template Unit - The specific unit for which the alternative measurement is retrieved.
* @param this - The measurement object.
* @returns A measurement object representing the alternative measurement of the specified unit.
*/
export type AlternativeGet<
  Units extends string,
  Unit extends Units
> = (this: o.Measurement<Units>) => Measurement<Units, Unit, number>;

/**
 * Retrieves an alternative measurement value based on the specified unit.
 *
 * @template Units - The string literal type representing all possible units.
 * @template Unit - The specific unit to retrieve the alternative value for.
 * @param conversions - The conversion functions for all units.
 * @param unit - The unit to retrieve the alternative value for.
 * @returns A function that retrieves the alternative measurement value.
 */
export const alternativeGet = <
  Units extends string,
  Unit extends Units
>(
  conversions: Conversions<Units>,
  unit: Unit
): AlternativeGet<Units, Unit> => function () {
  let value: number;
  if (this.unit === unit) {
    value = this.value;
  } else {
    const [toBase, fromBase] = [
      conversions[this.unit][0],
      conversions[unit][1]
    ];
    value = fromBase(toBase(this.value));
  }
  return Object.create(
    o.measurement(value, unit),
    propertyDescriptors(conversions)
  );
};
