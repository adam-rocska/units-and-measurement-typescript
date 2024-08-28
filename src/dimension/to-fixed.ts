import {type Measurement} from "./measurement";
import * as o from "../object";

export const toFixed = <
  Units extends string,
  Unit extends Units
>(
  measurement: Measurement<Units, Unit>,
  fractionDigits?: number
): Measurement<Units, Unit> => Object.create(
  o.toFixed(measurement, fractionDigits),
  Object.getOwnPropertyDescriptors(measurement)
);