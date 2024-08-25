import {type Measurement, MeasurementObject} from "../measurement";
import {type Dimension} from "./dimension";

export class DimensionMeasurementObject<
  Unit extends string,
  Value extends number
>
  extends MeasurementObject<Unit, Value> {

  public readonly dimension: Dimension<Unit>;

  constructor(dimension: Dimension<Unit>, measurement: Measurement<Unit, Value>) {
    super(measurement);
    this.dimension = dimension;
  }

  public as<AnotherUnit extends Unit>(
    u: AnotherUnit
  ): DimensionMeasurementObject<AnotherUnit, number> {
    return new DimensionMeasurementObject(
      this.dimension,
      this.dimension[u](this.measurement)
    );
  }

}