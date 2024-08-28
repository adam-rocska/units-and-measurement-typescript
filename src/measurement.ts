import * as string from "./string";
import * as tuple from "./tuple";
import * as object from "./object";
import * as dimension from "./dimension";

export type Measurement<Unit extends string, Value extends number = number> =
  | string.Measurement<Unit, Value>
  | tuple.Measurement<Unit, Value>
  | object.Measurement<Unit, Value>
  | dimension.Measurement<Unit, Unit, Value>
  ;

export function isMeasurement<
  Units extends string,
  Unit extends Units = Units
>(
  candidate: any,
  unit: Unit,
  ...units: Units[]
): candidate is Measurement<Unit> {
  if (dimension.isMeasurement(candidate, units, unit)) return true;
  if (units.length === 0) {
    if (string.isMeasurement(candidate, unit)) return true;
    if (tuple.isMeasurement(candidate, unit)) return true;
    if (object.isMeasurement(candidate, unit)) return true;
    return false;
  }
  units = [unit, ...units];
  for (const unit of units) {
    if (string.isMeasurement(candidate, unit)) return true;
    if (tuple.isMeasurement(candidate, unit)) return true;
    if (object.isMeasurement(candidate, unit)) return true;
  }
  return false;
}

export function value<
  Unit extends string,
  Value extends number
>(measurement: Measurement<Unit, Value>): Value {
  if (string.isMeasurement(measurement)) return string.value(measurement);
  if (tuple.isMeasurement(measurement)) return tuple.value(measurement);
  return object.value(measurement);
}

export function unit<Unit extends string>(measurement: Measurement<Unit>): Unit {
  if (string.isMeasurement(measurement)) return string.unit(measurement);
  if (tuple.isMeasurement(measurement)) return tuple.unit(measurement);
  return object.unit(measurement);
}

export const toFixed = <
  Unit extends string,
  Value extends number
>(
  measurement: Measurement<Unit, Value>,
  fractionDigits?: number
): Measurement<Unit, number> => {
  if (dimension.isMeasurement(measurement)) return dimension.toFixed(measurement, fractionDigits);
  if (string.isMeasurement(measurement)) return string.toFixed(measurement, fractionDigits);
  if (tuple.isMeasurement(measurement)) return tuple.toFixed(measurement, fractionDigits);
  return object.toFixed(measurement, fractionDigits);
};