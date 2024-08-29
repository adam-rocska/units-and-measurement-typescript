import type {Measurement} from "./measurement";
import {isMeasurement as isString} from "./string";
import {isMeasurement as isTuple} from "./tuple";
import {isMeasurement as isObject} from "./object";
import {isMeasurement as isDimension} from "./dimension";

export function isMeasurement<
  Units extends string,
  Unit extends Units = Units
>(
  candidate: any,
  unit?: Unit,
  ...units: Units[]
): candidate is Measurement<Unit> {
  if (isDimension(candidate, units, unit)) return true;
  if (units.length === 0) {
    if (isString(candidate, unit)) return true;
    if (isTuple(candidate, unit)) return true;
    if (isObject(candidate, unit)) return true;
    return false;
  }
  units = [unit, ...units];
  for (const unit of units) {
    if (isString(candidate, unit)) return true;
    if (isTuple(candidate, unit)) return true;
    if (isObject(candidate, unit)) return true;
  }
  return false;
}