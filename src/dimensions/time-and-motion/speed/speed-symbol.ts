/**
 * Represents an internationally recognized speed symbol.
 */
export type SpeedSymbol = typeof speedSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isSpeedSymbol(candidate: any): candidate is SpeedSymbol {
  return speedSymbols.includes(candidate);
}

/**
 * All the area symbols.
 */
export const speedSymbols = [
  "m/s",
  "km/h",
  "mph",
  "kn"
] as const;
