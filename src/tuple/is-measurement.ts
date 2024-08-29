import {type Measurement} from "./measurement";

/**
 * Type predicate that checks if a value is a measurement tuple.
 *
 * @param candidate The value to check.
 * @param unit The expected unit of the measurement.
 * @param value The expected value of the measurement.
 * @returns The candidate is a measurement tuple.
 */
export const isMeasurement = <
  Unit extends string = string,
  Value extends number = number
>(
  candidate: any,
  unit?: Unit,
  value?: Value
): candidate is Measurement<Unit, Value> => {
  if (!Array.isArray(candidate)) return false;
  if (candidate.length !== 2) return false;

  const [valueCandidate, unitCandidate] = candidate;
  if (typeof valueCandidate !== "number") return false;
  if (typeof unitCandidate !== "string") return false;

  if (unit !== undefined && unitCandidate !== unit) return false;
  if (value !== undefined && valueCandidate !== value) return false;

  return true;
};
