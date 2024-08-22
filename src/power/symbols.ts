export type PowerSymbol = typeof powerSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isPowerSymbol(candidate: any): candidate is PowerSymbol {
  return powerSymbols.includes(candidate);
}

/**
* All the Power symbols.
*/
export const powerSymbols = [
  "TW",
  "GW",
  "MW",
  "kW",
  "W",
  "mW",
  "µW",
  "nW",
  "pW",
  "fW",
  "hp"
] as const;
