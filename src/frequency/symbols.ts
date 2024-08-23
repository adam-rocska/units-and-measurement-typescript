export type FrequencySymbol = typeof frequencySymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isFrequencySymbol(candidate: any): candidate is FrequencySymbol {
  return frequencySymbols.includes(candidate);
}

/**
* All the Frequency symbols.
*/
export const frequencySymbols = [
  "THz",
  "GHz",
  "MHz",
  "kHz",
  "Hz",
  "mHz",
  "µHz",
  "nHz"
] as const;
