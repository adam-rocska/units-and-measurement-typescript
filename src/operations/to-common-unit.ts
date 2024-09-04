import {type Measurement, measurement} from "../measurement";
import {value} from "../value";
import {unit} from "../unit";
import * as d from "../dimension";

/**
 * Converts an array of measurements to a common unit.
 *
 * @param measurements - The array of measurements to be converted.
 * @returns The array of measurements converted to a common unit.
 * @template Unit - The type of unit for the measurements.
 */
export function toCommonUnit<
  Unit extends string
>(
  ...measurements: Measurement<Unit>[]
): Measurement<Unit>[] | undefined {
  if (measurements.length === 0) return [];
  if (measurements.length === 1) return measurements;
  const targetUnit = unit(measurements[0]!);
  const result: Measurement<Unit>[] = [];

  for (const m of measurements) {
    if (d.isMeasurement(m)) {
      if (!d.units(m).includes(targetUnit)) return undefined;
      result.push(d.measurement(m, m.value, targetUnit));
      continue;
    }
    if (unit(m) !== targetUnit) return undefined;
    result.push((measurement(m, value(m))));
  }

  return result;
}
