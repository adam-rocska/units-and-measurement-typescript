import {Measurement, unit, value} from "./measurement";
import {Conversion} from "./conversion";
import {IsUnion} from "type-fest/source/internal"; // TODO: Revisit to check if this kind of import is really such a good idea.

/// TODO: Add the feature to optionally provide the type of measurement expression expected.
export type MeasurementFactory<Unit extends string> = {
  <Value extends number>(value: Value): Measurement<Unit, Value>;
  <Value extends number>(measurement: Measurement<Unit, Value>): Measurement<Unit, Value>;
};

export function measurementFactory<
  Unit extends string
>(
  arg1: IsUnion<Unit> extends true
    ? {[unit in Unit]: Conversion}
    : Unit
): IsUnion<Unit> extends true
  ? {[unit in Unit]: MeasurementFactory<Unit>}
  : MeasurementFactory<Unit> {
  // TODO: These typecasts should be safe, but I should come back and double check!
  if (typeof arg1 === "string") return v => typeof v === "number" ? [v, arg1 as Unit] : v;

  const conversions = arg1 as {[unit in Unit]: Conversion};
  return Array
    .from(Object.keys(conversions) as Unit[])
    .reduce(
      (dimension, dimensionUnit: Unit) => ({
        ...dimension,
        [dimensionUnit]: (arg1 => {
          if (typeof arg1 === "number") return [arg1, dimensionUnit];
          const [sourceValue, sourceUnit] = [value(arg1), unit(arg1)];
          if (sourceUnit === dimensionUnit) return [sourceValue, sourceUnit];
          const [_, toBase] = conversions[sourceUnit];
          const [fromBase, __] = conversions[dimensionUnit];
          return [fromBase(toBase(sourceValue)), dimensionUnit];
        }) satisfies MeasurementFactory<Unit>,
      }),
      Object.create(null)
    ) satisfies {[unit in Unit]: MeasurementFactory<Unit>};
}
