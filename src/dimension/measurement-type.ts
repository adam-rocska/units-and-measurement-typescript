import {Measurement as MeasurementValue} from "../measurement";

export type Measurement<
  Dimension extends string,
  Unit extends Dimension
> = {
  <Value extends number>(value: Value): MeasurementValue<Unit, Value>;
  <Value extends number>(measurement: MeasurementValue<Dimension, Value>): MeasurementValue<
    Unit,
    typeof measurement[1] extends Unit ? Value : number
  >;
};
