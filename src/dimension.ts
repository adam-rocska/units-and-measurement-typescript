import {ConversionFactory, ConversionMap} from "./conversion";
import {Unit} from "./unit";

export type Dimension<
  Map extends ConversionMap<any, any>
> = Map extends ConversionMap<any, infer Units>
  ? {[unit in Units]: Unit<unit>;}[Units]
  : never;

export function Dimension<
  ConvertedBy extends ConversionFactory,
  UnitSymbol extends string
>(
  conversionFactory: ConvertedBy,
  conversionMap: ConversionMap<ConvertedBy, UnitSymbol>
): Dimension<typeof conversionMap> {
  return [] as any;
}
