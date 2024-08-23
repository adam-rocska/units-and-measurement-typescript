export type LengthSymbol = typeof lengthSymbols[number];

/**
 * Type predicate.
 * @param candidate The candidate to test.
 */
export function isLengthSymbol(candidate: any): candidate is LengthSymbol {
  return lengthSymbols.includes(candidate);
}

/**
* All the Length symbols.
*/
export const lengthSymbols = [
  "Mm",
  "kM",
  "hm",
  "dam",
  "m",
  "dm",
  "cm",
  "mm",
  "µm",
  "nm",
  "pm",
  "tw",
  "pt",
  "P",
  "in",
  "ft",
  "yd",
  "mi",
  "smi",
  "ly",
  "NM",
  "ftm",
  "fur",
  "ua",
  "pc"
] as const;
