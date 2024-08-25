import {unit, value} from "../measurement";
import {Conversions} from "../conversion";
import {type Measurement} from "./measurement-type";
import {Dimension} from "./dimension";

export function DimensionMeasurement<
  Unit extends string
>(
  conversions: Conversions<Unit>
): Dimension<Unit> {
  return Array
    .from(Object.keys(conversions))
    .filter((key: string): key is keyof Conversions<Unit> => key in conversions) // Ok, dumb, but at least I could get rid of one more type casting.
    .reduce(
      (dimension, toUnit) => ({
        ...dimension,
        [toUnit]: (arg1 => {
          if (typeof arg1 === "number") return [arg1, toUnit];
          const [fromValue, fromUnit] = [value(arg1), unit(arg1)];
          if (fromUnit === toUnit) return [fromValue, fromUnit];
          const [toBase, fromBase] = [
            conversions[fromUnit][0],
            conversions[toUnit][1],
          ];
          return [fromBase(toBase(fromValue)), toUnit];
        }) satisfies Measurement<Unit, Unit>,
      }),
      Object.create(null) satisfies Dimension<Unit>
    );
}