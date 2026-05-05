import {type Measurement} from "../measurement";
import {value} from "../value";
import {unit} from "../unit";
import * as d from "../dimension";
import * as object from "../object";
import * as string from "../string";
import * as tuple from "../tuple";
import {acceleration} from "../acceleration/dimension";
import {angle} from "../angle/dimension";
import {area} from "../area/dimension";
import {concentrationMass} from "../concentration-mass/dimension";
import {dispersion} from "../dispersion/dimension";
import {duration} from "../duration/dimension";
import {electricCharge} from "../electric-charge/dimension";
import {electricCurrent} from "../electric-current/dimension";
import {electricPotentialDifference} from "../electric-potential-difference/dimension";
import {electricResistance} from "../electric-resistance/dimension";
import {energy} from "../energy/dimension";
import {frequency} from "../frequency/dimension";
import {illuminance} from "../illuminance/dimension";
import {information} from "../information/dimension";
import {length} from "../length/dimension";
import {mass} from "../mass/dimension";
import {power} from "../power/dimension";
import {pressure} from "../pressure/dimension";
import {speed} from "../speed/dimension";
import {temperature} from "../temperature/dimension";
import {volume} from "../volume/dimension";

type AnyDimension = d.Dimension<any>;
type AnyDimensionMeasurement = d.Measurement<any>;
type ConversionContext =
  | {
    readonly kind: "dimension";
    readonly dimension: AnyDimension;
  }
  | {
    readonly kind: "measurement";
    readonly measurement: AnyDimensionMeasurement;
  };

const builtInDimensions = [
  acceleration,
  angle,
  area,
  concentrationMass,
  dispersion,
  duration,
  electricCharge,
  electricCurrent,
  electricPotentialDifference,
  electricResistance,
  energy,
  frequency,
  illuminance,
  information,
  length,
  mass,
  power,
  pressure,
  speed,
  temperature,
  volume,
] as readonly AnyDimension[];

/**
 * Converts an array of measurements to a common unit.
 *
 * @param measurements - The array of measurements to be converted.
 * @returns An array of measurements in a common unit, or `undefined` if the measurements can't be converted to a common unit.
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
  const sourceUnits = measurements.map(unit);
  const conversionContext = commonDimension(measurements, sourceUnits);
  const result: Measurement<Unit>[] = [];

  for (const m of measurements) {
    const convertedValue = valueInUnit(m, targetUnit, conversionContext);
    if (convertedValue === undefined) return undefined;
    result.push(measurementInUnit(m, convertedValue, targetUnit));
  }

  return result;
}

function commonDimension<Unit extends string>(
  measurements: readonly Measurement<Unit>[],
  sourceUnits: readonly Unit[]
): ConversionContext | undefined {
  for (const m of measurements) {
    if (!d.isMeasurement(m)) continue;
    if (sourceUnits.every((sourceUnit) => d.units(m).includes(sourceUnit))) {
      return {kind: "measurement", measurement: m};
    }
  }

  const dimension = builtInDimensions.find((dimension) =>
    sourceUnits.every((sourceUnit) => sourceUnit in dimension)
  );
  if (dimension === undefined) return undefined;
  return {kind: "dimension", dimension};
}

function valueInUnit<Unit extends string>(
  measurement: Measurement<Unit>,
  targetUnit: Unit,
  conversionContext: ConversionContext | undefined
): number | undefined {
  const sourceUnit = unit(measurement);
  if (sourceUnit === targetUnit) return value(measurement);

  if (d.isMeasurement(measurement)) {
    if (!d.units(measurement).includes(targetUnit)) return undefined;
    return measurement[targetUnit].value;
  }

  if (conversionContext === undefined) return undefined;

  const dimensionMeasurement = conversionContext.kind === "measurement"
    ? d.measurement(conversionContext.measurement, value(measurement), sourceUnit)
    : conversionContext.dimension[sourceUnit]?.(value(measurement));

  if (dimensionMeasurement === undefined) return undefined;

  return dimensionMeasurement[targetUnit]?.value;
}

function measurementInUnit<Unit extends string>(
  measurement: Measurement<Unit>,
  nextValue: number,
  nextUnit: Unit
): Measurement<Unit> {
  if (d.isMeasurement(measurement)) return d.measurement(measurement, nextValue, nextUnit);
  if (object.isMeasurement(measurement)) return object.measurement(nextValue, nextUnit);
  if (tuple.isMeasurement(measurement)) return tuple.measurement(nextValue, nextUnit);
  return string.measurement(nextValue, nextUnit);
}
