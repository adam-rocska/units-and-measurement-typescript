import {MeasurementObject, unit, value} from "../measurement";
import {Measurement} from "./measurement-type";

export const UnitMeasurement = <
  Unit extends string
>(
  u: Unit
): Measurement<Unit, Unit> => v => new MeasurementObject(
  typeof v === "number"
    ? [v, u]
    : [value(v), unit(v)]
);