import {type Measurement} from "./measurement";

/**
 * Type predicate that checks if a value is a measurement object.
 *
 * @template Unit The type of the unit of measurement.
 * @template Value The type of the value of the measurement.
 * @param candidate The value to check.
 * @param unit The unit of the measurement.
 * @param value The value of the measurement.
 * @returns true if the candidate is a measurement object, false otherwise.
 */
export const isMeasurement = <
  Unit extends string = string,
  Value extends number = number
>(
  candidate: any,
  unit?: Unit,
  value?: Value
): candidate is Measurement<Unit, Value> => {
  if (typeof candidate !== "object") return false;
  if (candidate === null) return false;
  if (!("unit" in candidate)) return false;
  if (!("value" in candidate)) return false;

  const {value: valueCandidate, unit: unitCandidate} = candidate;
  if (typeof valueCandidate !== "number") return false;
  if (typeof unitCandidate !== "string") return false;

  if (unit !== undefined && unitCandidate !== unit) return false;
  if (value !== undefined && valueCandidate !== value) return false;

  return true;
};
