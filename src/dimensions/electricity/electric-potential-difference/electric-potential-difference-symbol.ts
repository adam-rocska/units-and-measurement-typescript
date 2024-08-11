/**
 * Represents an internationally recognized electric potential difference symbol.
 */
export type ElectricPotentialDifferenceSymbol = typeof electricPotentialDifferenceSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isElectricPotentialDifferenceSymbol(candidate: any): candidate is ElectricPotentialDifferenceSymbol {
  return electricPotentialDifferenceSymbols.includes(candidate);
}

/**
 * All the area symbols.
 */
export const electricPotentialDifferenceSymbols = [
  "MV",
  "kV",
  "V",
  "mV",
  "µV"
] as const;
