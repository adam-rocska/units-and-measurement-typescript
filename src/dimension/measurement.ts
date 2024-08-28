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
 * @param unit - The unit of the measurement.
 * @returns The predicate result.
 */
export const isMeasurement = <
  Units extends string,
  Unit extends Units
>(
  candidate: any,
  units?: readonly Units[],
  unit?: Unit
): candidate is Measurement<Unit> => {
  if (!o.isMeasurement(candidate, unit)) return false;

  if (!units) units = Object.keys(candidate) as Units[];
  const candidateKeys = Object.keys(candidate);

  if (!units.every(unit => candidateKeys.includes(unit))) return false;
  if (!candidateKeys.every((key: any) => units.includes(key))) return false;

  if (Object.entries(candidate).some(([key, value]) => !o.isMeasurement(value, key))) return false;

  return true;
};

/// MARK: Assertion

/**
 * Asserts that a candidate is a dimension measurement.
 * @param candidate - The candidate to check.
 * @param units - The units of the dimension.
 * @param unit - The unit of the measurement.
 * @throws If the candidate is not a measurement.
 */
export const assertIsMeasurement = <
  Units extends string,
  Unit extends Units
>(
  candidate: any,
  units?: readonly Units[],
  unit?: Unit
): asserts candidate is Measurement<Unit> => {
  if (isMeasurement(candidate, units, unit)) return;
  throw new Error("Candidate is not a measurement.");
};