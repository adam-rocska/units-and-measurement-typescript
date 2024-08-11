/**
 * Represents an internationally recognized electric current symbol.
 */
export type ElectricCurrentSymbol = typeof electricCurrentSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isElectricCurrentSymbol(candidate: any): candidate is ElectricCurrentSymbol {
  return electricCurrentSymbols.includes(candidate);
}

/**
 * All the area symbols.
 */
export const electricCurrentSymbols = [
  "MA",
  "kA",
  "A",
  "mA",
  "µA"
] as const;
