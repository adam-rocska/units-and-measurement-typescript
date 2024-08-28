import {type Measurement} from "./measurement";

/**
 * Type predicate that checks if a string is a valid measurement.
 *
 * @template Unit The type of the unit of measurement.
 * @template Value The type of the value of the measurement.
 * @param candidate The value to check.
 * @param unit The unit of the measurement.
 * @param value The value of the measurement.
 * @returns The result of the check.
 */
export const isMeasurement = <
  Unit extends string = string,
  Value extends number = number
>(
  candidate: any,
  unit?: Unit,
  value?: Value
): candidate is Measurement<Unit, Value> => {
  if (typeof candidate !== "string") return false;

  const valueCandidate = parseFloat(candidate);
  if (Number.isNaN(valueCandidate)) return false;

  const unitCandidate = candidate.replace(valueCandidate.toString(), "").trim();
  if (!unitCandidate) return false;

  if (unit !== undefined && unitCandidate !== unit) return false;
  if (value !== undefined && valueCandidate !== value) return false;

  if (`${valueCandidate}${unitCandidate}` !== candidate) return false;

  return true;
};