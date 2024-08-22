export type AngleSymbol = typeof angleSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isAngleSymbol(candidate: any): candidate is AngleSymbol {
  return angleSymbols.includes(candidate);
}

/**
* All the Angle symbols.
*/
export const angleSymbols = [
  "°",
  "ʹ",
  "ʺ",
  "rad",
  "grad",
  "rev"
] as const;
