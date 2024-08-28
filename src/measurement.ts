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

export type SpecificMeasurement<M extends Measurement<any>> =
  M extends string.Measurement<infer U, infer V> ? string.Measurement<U, V> :
  M extends tuple.Measurement<infer U, infer V> ? tuple.Measurement<U, V> :
  M extends dimension.Measurement<infer D, infer U, infer V> ? dimension.Measurement<D, U, V> :
  M extends object.Measurement<infer U, infer V> ? object.Measurement<U, V> :
  never
  ;

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

export const toFixed = <
  Unit extends string,
  Value extends number
>(
  measurement: Measurement<Unit, Value>,
  fractionDigits?: number
): Measurement<Unit, number> => {
  if (dimension.isMeasurement(measurement, [])) return dimension.toFixed(measurement, fractionDigits);
  if (string.isMeasurement(measurement)) return string.toFixed(measurement, fractionDigits);
  if (tuple.isMeasurement(measurement)) return tuple.toFixed(measurement, fractionDigits);
  return object.toFixed(measurement, fractionDigits);
};