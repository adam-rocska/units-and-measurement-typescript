import {type Measurement} from "./measurement";
import {isMeasurement} from "./is-measurement";

/**
 * Asserts that a candidate is an object measurement.
 * @param candidate - The candidate to check.
 * @param unit - The unit of the measurement.
 * @throws If the candidate is not a measurement.
 */
export const assertIsMeasurement = <
  Unit extends string
>(
  candidate: any,
  unit?: Unit
): asserts candidate is Measurement<Unit> => {
  if (isMeasurement(candidate, unit)) return;
  throw new Error("Candidate is not a measurement.");
};