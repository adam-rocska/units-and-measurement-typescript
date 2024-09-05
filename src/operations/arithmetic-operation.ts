import {type Measurement, measurement} from "../measurement";
import {value} from "../value";
import {toCommonUnit} from "./to-common-unit";

/**
 * Performs an arithmetic operation on a list of measurements.
 * The measurements are converted to a common unit before the operation is performed.
 *
 * @template Unit - The unit type of the measurements.
 * @param operation - The arithmetic operation to perform on the measurements.
 * @param measurements - The list of measurements to perform the operation on.
 * @returns The result of the arithmetic operation as a new measurement, or undefined if the list of measurements is empty or invalid.
 */
export function arithmeticOperation<
  Unit extends string
>(
  operation: (a: number, b: number) => number,
  ...measurements: Measurement<Unit>[]
): Measurement<Unit> | undefined {
  if (measurements.length === 0) return undefined;
  if (measurements.length === 1) return measurement(measurements[0]!, value(measurements[0]!));
  const asCommonUnit = toCommonUnit(...measurements);
  if (asCommonUnit === undefined) return undefined;
  const [first, ...rest] = asCommonUnit;
  if (first === undefined) return undefined;
  return measurement(
    first,
    rest.reduce((acc, m) => operation(acc, value(m)), value(first))
  );
}
