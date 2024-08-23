export type ElectricPotentialDifferenceSymbol = typeof electricPotentialDifferenceSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isElectricPotentialDifferenceSymbol(candidate: any): candidate is ElectricPotentialDifferenceSymbol {
  return electricPotentialDifferenceSymbols.includes(candidate);
}

/**
* All the Electric Potential Difference symbols.
*/
export const electricPotentialDifferenceSymbols = [
  "MV",
  "kV",
  "V",
  "mV",
  "µV"
] as const;
