/**
 * Represents an internationally recognized angle symbol.
 */
export type AngleSymbol = typeof angleSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isAngleSymbol(candidate: any): candidate is AngleSymbol {
  return angleSymbols.includes(candidate);
}

/**
 * All the area symbols.
 */
export const angleSymbols = [
  "°",
  "ʹ",
  "ʺ",
  "rad",
  "grad",
  "rev"
] as const;
