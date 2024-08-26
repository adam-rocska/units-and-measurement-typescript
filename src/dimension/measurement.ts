import {Conversions} from "./conversion";

export type Measurement<
  Units extends string
> = {
    readonly [unit in Units]: number
  };

export const measurement = <
  Units extends string,
  Unit extends Units
>(
  conversions: Conversions<Units>,
  value: number,
  unit: Unit
): Measurement<Units> => new Proxy(
  Object.create(null),
  {
    get: (_, asUnit: Units) => {
      if (asUnit === unit) return value;
      const [toBase, fromBase] = [
        conversions[unit][0],
        conversions[asUnit][1]
      ];
      return fromBase(toBase(value));
    }
  }
);
