import {type Measurement, measurement} from "../measurement";
import {value} from "../value";
import {toCommonUnit} from "./to-common-unit";

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
