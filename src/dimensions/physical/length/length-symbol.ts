/**
 * Represents an internationally recognized length symbol.
 */
export type LengthSymbol = typeof lengthSymbols[number];

/**
 * Type predicate, tells if the symbol is a length symbol.
 * @param candidate The candidate to test.
 * @returns `true` if the symbol is a length symbol, `false` otherwise.
 */
export function isLengthSymbol(candidate: any): candidate is LengthSymbol {
  return lengthSymbols.includes(candidate as LengthSymbol);
}

/**
 * All the length symbols.
 */
export const lengthSymbols = [
  'Mm',
  'kM',
  'hm',
  'dam',
  'm',
  'dm',
  'cm',
  'mm',
  'µm',
  'nm',
  'pm',
  'in',
  'ft',
  'yd',
  'mi',
  'smi',
  'ly',
  'NM',
  'ftm',
  'fur',
  'ua',
  'pc',
] as const;
