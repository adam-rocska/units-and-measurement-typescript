export type TemperatureSymbol = typeof temperatureSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isTemperatureSymbol(candidate: any): candidate is TemperatureSymbol {
  return temperatureSymbols.includes(candidate);
}

/**
* All the Temperature symbols.
*/
export const temperatureSymbols = [
  "K",
  "°C",
  "°F",
  "°R"
] as const;
