import type {Measurement} from "./measurement";
import {isMeasurement as isString} from "./string";
import {isMeasurement as isTuple} from "./tuple";
import {isMeasurement as isObject} from "./object";
import {isMeasurement as isDimension} from "./dimension";

/**
 * Type predicate, determining if a candidate is a measurement.
 *
 * @template Units - The type of units.
 * @template Unit - The specific unit type.
 * @param candidate - The value to be checked.
 * @param unit - The specific unit to be checked against.
 * @param units - Additional units to be checked against.
 * @returns A boolean indicating whether the candidate is a valid measurement.
 */
export const isMeasurement = <
  Units extends string,
  Unit extends Units = Units
>(
  candidate: any,
  unit?: Unit,
  units?: readonly Units[]
): candidate is Measurement<Unit> => {
  if (!unit) {
    if (isDimension(candidate)) return true;
    if (isString(candidate)) return true;
    if (isTuple(candidate)) return true;
    if (isObject(candidate)) return true;
  }

  units = units ?? [];

  if (isDimension(candidate, units, unit)) return true;

  for (const u of units.concat(unit as any)) {
    if (isString(candidate, u)) return true;
    if (isTuple(candidate, u)) return true;
    if (isObject(candidate, u)) return true;
  }

  return false;

};