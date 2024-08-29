import * as o from "../object";
import {type Measurement} from "./measurement";
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
  if (candidateKeys.length === 0) return false;

  if (Object.entries(candidate).some(([key, value]) => !o.isMeasurement(value, key))) return false;

  return true;
};
