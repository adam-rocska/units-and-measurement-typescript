/**
 * A tuple of conversion functions to and from a base unit.
 */
export type Conversion = readonly [
  toBase: (value: number) => number,
  fromBase: (value: number) => number
];

/**
 * A record of conversion tuples for each unit.
 */
export type Conversions<Unit extends string> = {[unit in Unit]: Conversion};

/**
 * Creates a linear conversion tuple, where:
 * - `base = value * coefficient + constant`
 * - `value = (base - constant) / coefficient`
 */
export const linearConversion = (
  coefficient: number,
  constant: number = 0
): Conversion => [
    (value: number): number => value * coefficient + constant,
    (value: number): number => (value - constant) / coefficient,
  ];