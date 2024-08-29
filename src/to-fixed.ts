import {type Measurement} from "./measurement";
import * as string from "./string";
import * as tuple from "./tuple";
import * as object from "./object";
import * as dimension from "./dimension";

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