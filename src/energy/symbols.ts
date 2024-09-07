export type EnergySymbol = typeof energySymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isEnergySymbol(candidate: any): candidate is EnergySymbol {
  return energySymbols.includes(candidate);
}

/**
* All the Energy symbols.
*/
export const energySymbols = [
  "kJ",
  "J",
  "kCal",
  "cal",
  "kWh",
  "Wh",
  "eV"
] as const;
