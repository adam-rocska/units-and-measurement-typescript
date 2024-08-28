import {type Alternatives} from "./alternatives";
import {type Conversions} from "../conversion";
import {alternativeGet} from "./alternative-get";

export type AlternativeDescriptor<
  Units extends string,
  Unit extends Units
> = PropertyDescriptorOf<Alternatives<Units>, Unit>;

export const propertyDescriptor = <
  Units extends string,
  Unit extends Units
>(
  conversions: Conversions<Units>,
  unit: Unit
): AlternativeDescriptor<Units, Unit> => ({
  enumerable: true,
  get: alternativeGet(conversions, unit),
});