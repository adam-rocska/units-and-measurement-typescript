export type Conversion = readonly [
  toBase: (value: number) => number,
  fromBase: (value: number) => number
];

export type ConversionFactory = (...parameters: readonly any[]) => Conversion;

export type ConversionMap<
  ConvertedBy extends ConversionFactory,
  UnitSymbol extends string
> = {
    [unit in UnitSymbol]: Parameters<ConvertedBy>;
  };