/**
 * Represents an internationally recognized concentration mass symbol.
 */
export type ConcentrationMassSymbol = typeof concentrationMassSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isConcentrationMassSymbol(candidate: any): candidate is ConcentrationMassSymbol {
  return concentrationMassSymbols.includes(candidate);
}

/**
 * All the area symbols.
 */
export const concentrationMassSymbols = [
  "g/L",
  "mg/dL"
] as const;
