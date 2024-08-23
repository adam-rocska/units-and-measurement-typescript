import {isString, String, value as valueFromString, unit as unitFromString, toFixed as stringToFixed, toExponential as stringToExponential, toPrecision as stringToPrecision} from "./string";
import {isTuple, Tuple, value as valueFromTuple, unit as unitFromTuple, toFixed as tupleToFixed, toExponential as tupleToExponential, toPrecision as tupleToPrecision} from "./tuple";

export type Measurement<
  Unit extends string,
  Value extends number = number
> =
  | Tuple<Unit, Value>
  | String<Unit, Value>
  ;

export const toTuple = <
  Unit extends string,
  Value extends number = number
>(measurement: Measurement<Unit, Value>): Tuple<Unit, Value> => {
  if (measurement instanceof Array) return [...measurement];
  const value = parseFloat(measurement) as Value;
  const unit = measurement.slice(value.toString().length) as Unit;
  return [value, unit];
};

export const toString = <
  Unit extends string,
  Value extends number = number
>(measurement: Measurement<Unit, Value>): String<Unit, Value> => {
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
  if (isTuple(candidate, unit, value)) return true;
  if (isString(candidate, unit, value)) return true;
  return false;
};

export const value = <
  Unit extends string,
  Value extends number = number
>(
  measurement: Measurement<Unit, Value>
): Value => {
  if (isTuple(measurement)) return valueFromTuple(measurement);
  return valueFromString(measurement);
};

export const unit = <
  Unit extends string,
  Value extends number = number
>(
  measurement: Measurement<Unit, Value>
): Unit => {
  if (isTuple(measurement)) return unitFromTuple(measurement);
  return unitFromString(measurement);
};

export function toFixed<Unit extends string,>(
  measurement: Tuple<Unit, number>,
  fractionDigits?: number
): Tuple<Unit, number>;
export function toFixed<Unit extends string,>(
  measurement: String<Unit, number>,
  fractionDigits?: number
): String<Unit, number>;
export function toFixed<Unit extends string,>(
  measurement: Measurement<Unit, number>,
  fractionDigits?: number
): Measurement<Unit, number> {
  if (isTuple(measurement)) return tupleToFixed(measurement, fractionDigits);
  return stringToFixed(measurement, fractionDigits);
}

export function toExponential<Unit extends string,>(
  measurement: Tuple<Unit, number>,
  fractionDigits?: number
): Tuple<Unit, number>;
export function toExponential<Unit extends string,>(
  measurement: String<Unit, number>,
  fractionDigits?: number
): String<Unit, number>;
export function toExponential<
  Unit extends string
>(
  measurement: Measurement<Unit, number>,
  fractionDigits?: number
): Measurement<Unit, number> {
  if (isTuple(measurement)) return tupleToExponential(measurement, fractionDigits);
  return stringToExponential(measurement, fractionDigits);
}

export function toPrecision<Unit extends string,>(
  measurement: Tuple<Unit, number>,
  precision?: number
): Tuple<Unit, number>;
export function toPrecision<Unit extends string,>(
  measurement: String<Unit, number>,
  precision?: number
): String<Unit, number>;
export function toPrecision<
  Unit extends string
>(
  measurement: Measurement<Unit, number>,
  precision?: number
): Measurement<Unit, number> {
  if (isTuple(measurement)) return tupleToPrecision(measurement, precision);
  return stringToPrecision(measurement, precision);
}
