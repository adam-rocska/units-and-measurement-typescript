export type Conversion = readonly [
  toBase: (value: number) => number,
  fromBase: (value: number) => number
];

export type ConversionFactory = (...parameters: readonly any[]) => Conversion;

export type ConversionMapItem<
  ConvertedBy extends ConversionFactory,
  UnitSymbol extends string
> = readonly [
  unit: UnitSymbol,
  ...parameters: Parameters<ConvertedBy>
];

export type ConversionMap<
  ConvertedBy extends ConversionFactory,
  UnitSymbol extends string
> = readonly ConversionMapItem<ConvertedBy, UnitSymbol>[];