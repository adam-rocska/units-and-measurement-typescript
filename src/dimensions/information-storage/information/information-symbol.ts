/**
 * Represents an internationally recognized information symbol.
 */
export type InformationSymbol = typeof informationSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isInformationSymbol(candidate: any): candidate is InformationSymbol {
  return informationSymbols.includes(candidate);
}

/**
 * All the area symbols.
 */
export const informationSymbols = [
  "b",
  "B",
  "kb",
  "Mb",
  "Gb",
  "Tb",
  "Pb",
  "Eb",
  "Zb",
  "Yb",
  "Kib",
  "KB",
  "Mib",
  "MB",
  "Gib",
  "GB",
  "Tib",
  "TB",
  "Pib",
  "PB",
  "Eib",
  "EB",
  "Zib",
  "ZB",
  "Yib",
  "YB"
] as const;
