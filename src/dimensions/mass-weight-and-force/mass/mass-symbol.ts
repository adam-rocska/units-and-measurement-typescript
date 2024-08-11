/**
 * Represents an internationally recognized mass symbol.
 */
export type MassSymbol = typeof massSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isMassSymbol(candidate: any): candidate is MassSymbol {
  return massSymbols.includes(candidate);
}

/**
 * All the area symbols.
 */
export const massSymbols = [
  "kg",
  "g",
  "dg",
  "cg",
  "mg",
  "µg",
  "ng",
  "pg",
  "oz",
  "lb",
  "st",
  "t",
  "ton",
  "ct",
  "oz t",
  "slug"
] as const;
