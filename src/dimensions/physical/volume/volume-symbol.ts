/**
 * Represents an internationally recognized volume symbol.
 */
export type VolumeSymbol = typeof volumeSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isVolumeSymbol(candidate: any): candidate is VolumeSymbol {
  return volumeSymbols.includes(candidate);
}

/**
 * All the area symbols.
 */
export const volumeSymbols = [
  "ML",
  "kL",
  "L",
  "dL",
  "cL",
  "mL",
  "km³",
  "m³",
  "dm³",
  "mm³",
  "in³",
  "ft³",
  "yd³",
  "mi³",
  "af",
  "bsh",
  "tsp",
  "tbsp",
  "fl oz",
  "cup",
  "pt",
  "qt",
  "gal",
  "tsp",
  "tbsp",
  "fl oz",
  "pt",
  "qt",
  "gal",
  "metric cup"
] as const;
