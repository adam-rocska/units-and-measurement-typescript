import {type Conversions} from "./conversion";
import {type Measurement, measurement} from "./measurement";

export type MeasurementFactory<Units extends string> = (
  value: number
) => Measurement<Units>;

export type Dimension<Units extends string> = {
  readonly [unit in Units]: MeasurementFactory<Units>;
};

export const dimension = <Units extends string>(
  conversions: Conversions<Units>
): Dimension<Units> => {
  return new Proxy(
    Object.create(null),
    {
      get: <Unit extends Units>(
        _: Dimension<Units>,
        unit: Unit
      ): MeasurementFactory<Units> => (
        value: number
      ): Measurement<Units> => measurement(
        conversions,
        value,
        unit
      )
    }
  );
};