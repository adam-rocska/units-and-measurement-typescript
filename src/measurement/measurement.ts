import * as string from "./string";
import * as tuple from "./tuple";

export type Measurement<
  Unit extends string,
  Value extends number = number
> =
  | tuple.Tuple<Unit, Value>
  | string.String<Unit, Value>
  ;

export const toTuple = <
  Unit extends string,
  Value extends number = number
>(measurement: Measurement<Unit, Value>): tuple.Tuple<Unit, Value> => {
  if (measurement instanceof Array) return [...measurement];
  return [string.value(measurement), string.unit(measurement)];
};

export const toString = <
  Unit extends string,
  Value extends number = number
>(measurement: Measurement<Unit, Value>): string.String<Unit, Value> => {
  if (measurement instanceof Array) return `${measurement[0]}${measurement[1]}`;
  return measurement;
};

export const isMeasurement = <
  Unit extends string = string,
  Value extends number = number
>(
  candidate: any,
  unit?: Unit,
  value?: Value
): candidate is Measurement<Unit, Value> => {
  if (tuple.isTuple(candidate, unit, value)) return true;
  if (string.isString(candidate, unit, value)) return true;
  return false;
};

export const value = <
  Unit extends string,
  Value extends number = number
>(
  measurement: Measurement<Unit, Value>
): Value => {
  if (tuple.isTuple(measurement)) return tuple.value(measurement);
  return string.value(measurement);
};

export const unit = <
  Unit extends string,
  Value extends number = number
>(
  measurement: Measurement<Unit, Value>
): Unit => {
  if (tuple.isTuple(measurement)) return tuple.unit(measurement);
  return string.unit(measurement);
};

export function toFixed<Unit extends string,>(
  measurement: Measurement<Unit, number>,
  fractionDigits?: number
): typeof measurement {
  if (tuple.isTuple(measurement)) return tuple.toFixed(measurement, fractionDigits);
  return string.toFixed(measurement, fractionDigits);
}

export function toExponential<
  Unit extends string
>(
  measurement: Measurement<Unit, number>,
  fractionDigits?: number
): typeof measurement {
  if (tuple.isTuple(measurement)) return tuple.toExponential(measurement, fractionDigits);
  return string.toExponential(measurement, fractionDigits);
}

export function toPrecision<
  Unit extends string
>(
  measurement: Measurement<Unit, number>,
  precision?: number
): typeof measurement {
  if (tuple.isTuple(measurement)) return tuple.toPrecision(measurement, precision);
  return string.toPrecision(measurement, precision);
}
