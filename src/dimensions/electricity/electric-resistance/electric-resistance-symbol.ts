/**
 * Represents an internationally recognized electric resistance symbol.
 */
export type ElectricResistanceSymbol = typeof electricResistanceSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isElectricResistanceSymbol(candidate: any): candidate is ElectricResistanceSymbol {
  return electricResistanceSymbols.includes(candidate);
}

/**
 * All the area symbols.
 */
export const electricResistanceSymbols = [
  "MΩ",
  "kΩ",
  "Ω",
  "mΩ",
  "µΩ"
] as const;
