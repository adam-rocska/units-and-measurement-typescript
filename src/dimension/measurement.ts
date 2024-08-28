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

/// MARK: Predicate

/**
 * Type predicate, determining if a candidate is a dimension measurement.
 * @param candidate - The candidate to check.
 * @param units - The units of the dimension.
 * @returns The predicate result.
 */
export const isMeasurement = <
  Unit extends string
>(
  candidate: any,
  units: readonly Unit[]
): candidate is Measurement<Unit> => {
  if (typeof candidate !== "object") return false;
  if (candidate === null) return false;
  if (units.length === 0) units = Object.keys(candidate) as Unit[];
  if (units.length === 0) return false;

  for (const unit of units) {
    if (!(unit in candidate)) return false;
    if (typeof candidate[unit] !== "number") return false;
  }

  return o.isMeasurement(candidate);
};

/// MARK: Assertion

/**
 * Asserts that a candidate is a dimension measurement.
 * @param candidate - The candidate to check.
 * @param units - The units of the dimension.
 * @throws If the candidate is not a measurement.
 */
export const assertIsMeasurement = <
  Unit extends string
>(
  candidate: any,
  units: readonly Unit[]
): asserts candidate is Measurement<Unit> => {
  if (isMeasurement(candidate, units)) return;
  throw new Error("Candidate is not a measurement.");
}