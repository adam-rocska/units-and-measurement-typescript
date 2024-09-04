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
 * @throws If the measurements have different units or dimensions.
 */
export function toCommonUnit<
  Unit extends string
>(
  ...measurements: Measurement<Unit>[]
): Measurement<Unit>[] {
  if (measurements.length === 0) return [];
  if (measurements.length === 1) return measurements;
  const targetUnit = unit(measurements[0]!);
  return measurements.map(m => {
    if (d.isMeasurement(m)) {
      if (!d.units(m).includes(targetUnit)) throw new TypeError(errorMessage);
      return d.measurement(m, m.value, targetUnit);
    }
    if (unit(m) !== targetUnit) throw new TypeError(errorMessage);
    return measurement(m, value(m));
  });
}

const errorMessage = "All measurements must have the same unit or be of the same dimension.";