/**
 * Represents an internationally recognized illuminance symbol.
 */
export type IlluminanceSymbol = typeof illuminanceSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isIlluminanceSymbol(candidate: any): candidate is IlluminanceSymbol {
  return illuminanceSymbols.includes(candidate);
}

/**
 * All the area symbols.
 */
export const illuminanceSymbols = [
  "lx"
] as const;
