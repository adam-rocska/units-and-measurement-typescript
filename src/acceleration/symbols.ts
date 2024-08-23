export type AccelerationSymbol = typeof accelerationSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isAccelerationSymbol(candidate: any): candidate is AccelerationSymbol {
  return accelerationSymbols.includes(candidate);
}

/**
* All the Acceleration symbols.
*/
export const accelerationSymbols = [
  "m/s²",
  "g"
] as const;
