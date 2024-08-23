import {unit as unitOf, value as valueOf} from "../measurement";
import {Measurement} from "./measurement-type";

export const UnitMeasurement = <
  Unit extends string
>(
  unit: Unit
): Measurement<Unit> => v => typeof v === "number"
  ? [v, unit]
  : [valueOf(v), unitOf(v)];
