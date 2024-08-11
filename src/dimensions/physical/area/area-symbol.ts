/**
 * Represents an internationally recognized area symbol.
 */
export type AreaSymbol = typeof areaSymbols[number];

/**
 * Type predicate, tells if the symbol is a area symbol.
 * @param candidate The candidate to test.
 * @returns `true` if the symbol is a area symbol, `false` otherwise.
 */
export function isAreaSymbol(candidate: any): candidate is AreaSymbol {
  return areaSymbols.includes(candidate as AreaSymbol);
}

/**
 * All the area symbols.
 */
export const areaSymbols = [
  "Mm²",
  "km²",
  "m²",
  "cm²",
  "mm²",
  "µm²",
  "nm²",
  "in²",
  "ft²",
  "yd²",
  "mi²",
  "ac",
  "a",
  "ha",
] as const;
