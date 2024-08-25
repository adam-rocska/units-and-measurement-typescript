import {unit, value} from "../measurement";
import {Conversions} from "./conversion";
import {type Measurement} from "./measurement-type";
import {Dimension} from "./dimension";
import {DimensionMeasurementObject} from "./dimension-measurement-object";

export const DimensionMeasurement = <
  Unit extends string
>(
  conversions: Conversions<Unit>
): Dimension<Unit> => {
  // in case I'd simplify this again: We need the dimension reference for when the factory creates a new dimension measurement object instance, it has the reference without a shit ton of boilerplate
  const dimension: Dimension<Unit> = Array
    .from(Object.keys(conversions))
    .filter((key: string): key is keyof Conversions<Unit> => key in conversions) // Ok, dumb, but at least I could get rid of one more type casting.
    .reduce(
      (acc, toUnit) => ({
        ...acc,
        [toUnit]: (arg1 => {
          if (typeof arg1 === "number") return [arg1, toUnit];
          const [fromValue, fromUnit] = [value(arg1), unit(arg1)];
          if (fromUnit === toUnit) return [fromValue, fromUnit];
          const [toBase, fromBase] = [
            conversions[fromUnit][0],
            conversions[toUnit][1],
          ];
          return new DimensionMeasurementObject(dimension, [fromBase(toBase(fromValue)), toUnit]);
        }) satisfies Measurement<Unit, Unit>,
      }),
      Object.create(null)
    );
  return dimension;
};
