import {type Measurement} from "../measurement";
import {type Conversions} from "../conversion";
import * as o from "../../object";
import {propertyDescriptors} from "./property-descriptors";

export type AlternativeGet<
  Units extends string,
  Unit extends Units
> = (this: o.Measurement<Units>) => Measurement<Units, Unit, number>;

export const alternativeGet = <
  Units extends string,
  Unit extends Units
>(
  conversions: Conversions<Units>,
  unit: Unit
): AlternativeGet<Units, Unit> => function () {
  let value: number;
  if (this.unit === unit) {
    value = this.value;
  } else {
    const [toBase, fromBase] = [
      conversions[this.unit][0],
      conversions[unit][1]
    ];
    value = fromBase(toBase(this.value));
  }
  return Object.create(
    o.measurement(value, unit),
    propertyDescriptors(conversions)
  );
};
