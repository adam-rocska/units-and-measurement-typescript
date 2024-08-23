export type ElectricResistanceSymbol = typeof electricResistanceSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isElectricResistanceSymbol(candidate: any): candidate is ElectricResistanceSymbol {
  return electricResistanceSymbols.includes(candidate);
}

/**
* All the Electric Resistance symbols.
*/
export const electricResistanceSymbols = [
  "MΩ",
  "kΩ",
  "Ω",
  "mΩ",
  "µΩ"
] as const;
