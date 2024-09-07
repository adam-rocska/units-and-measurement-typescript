export type DurationSymbol = typeof durationSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isDurationSymbol(candidate: any): candidate is DurationSymbol {
  return durationSymbols.includes(candidate);
}

/**
* All the Duration symbols.
*/
export const durationSymbols = [
  "sec",
  "min",
  "hr"
] as const;
