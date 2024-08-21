import {String} from "./string";
import {Tuple} from "./tuple";

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
  if (measurement instanceof Array) return measurement;
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
