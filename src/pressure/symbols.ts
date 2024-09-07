export type PressureSymbol = typeof pressureSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isPressureSymbol(candidate: any): candidate is PressureSymbol {
  return pressureSymbols.includes(candidate);
}

/**
* All the Pressure symbols.
*/
export const pressureSymbols = [
  "N/m²",
  "GPa",
  "MPa",
  "kPa",
  "hPa",
  "inHg",
  "bar",
  "mbar",
  "mmHg",
  "psi"
] as const;
