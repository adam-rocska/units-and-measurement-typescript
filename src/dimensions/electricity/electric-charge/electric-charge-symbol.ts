/**
 * Represents an internationally recognized electric charge symbol.
 */
export type ElectricChargeSymbol = typeof electricChargeSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isElectricChargeSymbol(candidate: any): candidate is ElectricChargeSymbol {
  return electricChargeSymbols.includes(candidate);
}

/**
 * All the area symbols.
 */
export const electricChargeSymbols = [
  "C",
  "MAh",
  "kAh",
  "Ah",
  "mAh",
  "µAh"
] as const;
