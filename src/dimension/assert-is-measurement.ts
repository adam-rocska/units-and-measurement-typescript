import {type Measurement} from "./measurement";
import {isMeasurement} from "./is-measurement";

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