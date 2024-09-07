export type ElectricChargeSymbol = typeof electricChargeSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isElectricChargeSymbol(candidate: any): candidate is ElectricChargeSymbol {
  return electricChargeSymbols.includes(candidate);
}

/**
* All the Electric Charge symbols.
*/
export const electricChargeSymbols = [
  "C",
  "MAh",
  "kAh",
  "Ah",
  "mAh",
  "µAh"
] as const;
