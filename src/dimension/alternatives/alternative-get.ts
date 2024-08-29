import {type Measurement} from "../measurement";
import {type Conversions} from "../conversion";
import * as o from "../../object";
import {propertyDescriptors} from "./property-descriptors";

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
