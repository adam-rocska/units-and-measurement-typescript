import {Measurement as MeasurementValue} from "../measurement";

export type Measurement<Unit extends string> = {
  <Value extends number>(value: Value): MeasurementValue<Unit, Value>;
  <Value extends number>(measurement: MeasurementValue<Unit, Value>): MeasurementValue<Unit, Value>;
};
