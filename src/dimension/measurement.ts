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

export const isMeasurement = <
  Unit extends string
>(
  candidate: any,
  units: Unit[]
): candidate is Measurement<Unit> => {
  if (typeof candidate !== "object") return false;
  if (candidate === null) return false;

  for (const unit of units) {
    if (!(unit in candidate)) return false;
    if (typeof candidate[unit] !== "number") return false;
  }

  return true;
};