import {type Measurement} from "./measurement";
import * as o from "../object";

export const toFixed = <
  Units extends string,
  Unit extends Units,
  Value extends number
>(
  measurement: Measurement<Units, Unit, Value>,
  fractionDigits?: number
): Measurement<Units, Unit, number> => Object.create(
  o.toFixed(measurement, fractionDigits),
  Object.getOwnPropertyDescriptors(measurement)
);