import {Measurement as MeasurementValue, unit as unitOf, value as valueOf} from "../measurement";
import {Conversions} from "../conversion";

export type Measurement<Unit extends string> = {
  <Value extends number>(value: Value): MeasurementValue<Unit, Value>;
  <Value extends number>(measurement: MeasurementValue<Unit, Value>): MeasurementValue<Unit, Value>;
};

export type Dimension<Unit extends string> = {[unit in Unit]: Measurement<Unit>};

export function Measurement<Unit extends string>(unit: Unit): Measurement<Unit>;
export function Measurement<Unit extends string>(conversions: Conversions<Unit>): Dimension<Unit>;
export function Measurement(description: any): any {
  return typeof description === "string"
    ? UnitMeasurement(description)
    : DimensionMeasurement(description);
}

export const UnitMeasurement = <
  Unit extends string
>(
  unit: Unit
): Measurement<Unit> => v => typeof v === "number"
  ? [v, unit]
  : [valueOf(v), unitOf(v)];

export function DimensionMeasurement<
  Unit extends string
>(
  conversions: Conversions<Unit>
): Dimension<Unit> {
  return Array
    .from(Object.keys(conversions) as Unit[])
    .reduce(
      (dimension, toUnit) => ({
        ...dimension,
        [toUnit]: (arg1 => {
          if (typeof arg1 === "number") return [arg1, toUnit];
          const [fromValue, fromUnit] = [valueOf(arg1), unitOf(arg1)];
          if (fromUnit === toUnit) return [fromValue, fromUnit];
          const [toBase, fromBase] = [
            conversions[fromUnit][0],
            conversions[toUnit][1],
          ];
          return [fromBase(toBase(fromValue)), toUnit];
        }) satisfies Measurement<Unit>,
      }),
      Object.create(null) satisfies Dimension<Unit>
    );
}