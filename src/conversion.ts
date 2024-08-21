/**
 * A tuple of conversion functions to and from a base unit.
 */
export type Conversion = readonly [
  toBase: (value: number) => number,
  fromBase: (value: number) => number
];

/**
 * A function that creates a conversion tuple.
 */
export type ConversionFactory<
  Parameters extends readonly any[] = readonly any[]
> = (...parameters: Parameters) => Conversion;

/**
 * Creates a linear conversion tuple, where:
 * - `base = value * coefficient + constant`
 * - `value = (base - constant) / coefficient`
 */
export const linearConversion: ConversionFactory = (
  coefficient: number,
  constant: number = 0
) => [
    (value: number): number => value * coefficient + constant,
    (value: number): number => (value - constant) / coefficient
  ];
