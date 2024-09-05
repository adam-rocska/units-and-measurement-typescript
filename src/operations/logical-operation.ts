import {type Measurement} from "../measurement";
import {toCommonUnit} from "./to-common-unit";

/**
 * Performs a logical operation on a series of measurements.
 * The measurements are converted to a common unit before the operation is performed.
 *
 * @template Unit - The unit of measurement.
 * @param operation - The logical operation to perform on the measurements.
 * @param measurements - The measurements to perform the operation on.
 * @returns The result of the logical operation.
 */
export function logicalOperation<
  Unit extends string
>(
  operation: <M extends Measurement<Unit>>(a: M, b: M) => boolean,
  ...measurements: [Measurement<Unit>, Measurement<Unit>, ...Measurement<Unit>[]]
): boolean | undefined {
  if (measurements.length < 2) return undefined;
  const asCommonUnit = toCommonUnit(...measurements);
  if (asCommonUnit === undefined) return undefined;
  let lastMeasurement = asCommonUnit[0];
  if (lastMeasurement === undefined) return undefined;
  for (const current of asCommonUnit.slice(1)) {
    if (!operation(lastMeasurement, current)) return false;
    lastMeasurement = current;
  }
  return true;
}
