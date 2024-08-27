import * as string from "./measurement/string";
import * as tuple from "./measurement/tuple";
import * as object from "./measurement/object";
import * as conversions from "./dimension/conversion";
import * as dimension from "./dimension/dimension";

export type Measurement<Unit extends string> =
  | string.Measurement<Unit>
  | tuple.Measurement<Unit>
  | object.Measurement<Unit>
  | dimension.Measurement<Unit>;

export function isMeasurement<
  Unit extends string
>(
  candidate: any,
  ...units: Unit[]
): candidate is Measurement<Unit> {
  if (dimension.isMeasurement<Unit>(candidate, units)) return true;
  if (units.length === 0) {
    if (string.isMeasurement(candidate)) return true;
    if (tuple.isMeasurement(candidate)) return true;
    if (object.isMeasurement(candidate)) return true;
    return false;
  }
  for (const unit of units) {
    if (string.isMeasurement(candidate, unit)) return true;
    if (tuple.isMeasurement(candidate, unit)) return true;
    if (object.isMeasurement(candidate, unit)) return true;
  }
  return false;
}

export function value<Unit extends string>(measurement: Measurement<Unit>): number {
  if (string.isMeasurement(measurement)) return string.value(measurement);
  if (tuple.isMeasurement(measurement)) return tuple.value(measurement);
  if (object.isMeasurement(measurement)) return object.value(measurement);
  return NaN;
}

export function unit<Unit extends string>(measurement: Measurement<Unit>): Unit {
  if (string.isMeasurement(measurement)) return string.unit(measurement);
  if (tuple.isMeasurement(measurement)) return tuple.unit(measurement);
  if (object.isMeasurement(measurement)) return object.unit(measurement);
  throw new Error("Failed to resolve the unit of the measurement.");
}

export function toFixed<Unit extends string>(
  measurement: Measurement<Unit>,
  fractionDigits?: number
): Measurement<Unit> {
  if (string.isMeasurement(measurement)) return string.toFixed(measurement, fractionDigits);
  if (tuple.isMeasurement(measurement)) return tuple.toFixed(measurement, fractionDigits);
  if (object.isMeasurement(measurement)) return object.toFixed(measurement, fractionDigits);
  return dimension.toFixed(measurement, fractionDigits);
}