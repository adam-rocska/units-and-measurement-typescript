export type AreaSymbol = typeof areaSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isAreaSymbol(candidate: any): candidate is AreaSymbol {
  return areaSymbols.includes(candidate);
}

/**
* All the Area symbols.
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
  "ha"
] as const;
