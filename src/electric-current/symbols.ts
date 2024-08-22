export type ElectricCurrentSymbol = typeof electricCurrentSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isElectricCurrentSymbol(candidate: any): candidate is ElectricCurrentSymbol {
  return electricCurrentSymbols.includes(candidate);
}

/**
* All the Electric Current symbols.
*/
export const electricCurrentSymbols = [
  "MA",
  "kA",
  "A",
  "mA",
  "µA"
] as const;
