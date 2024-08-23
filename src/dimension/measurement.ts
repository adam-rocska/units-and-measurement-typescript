import {Conversions} from "../conversion";
import {type Measurement} from "./measurement-type";
import {Dimension} from "./dimension";
import {UnitMeasurement} from "./measurement-unit";
import {DimensionMeasurement} from "./measurement-dimension";

export function Measurement<Unit extends string>(unit: Unit): Measurement<Unit>;
export function Measurement<Unit extends string>(conversions: Conversions<Unit>): Dimension<Unit>;
export function Measurement(description: any): any {
  return typeof description === "string"
    ? UnitMeasurement(description)
    : DimensionMeasurement(description);
}

