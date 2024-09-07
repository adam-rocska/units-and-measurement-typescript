export type DispersionSymbol = typeof dispersionSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isDispersionSymbol(candidate: any): candidate is DispersionSymbol {
  return dispersionSymbols.includes(candidate);
}

/**
* All the Dispersion symbols.
*/
export const dispersionSymbols = [
  "ppm",
  "ppb",
  "ppt"
] as const;
