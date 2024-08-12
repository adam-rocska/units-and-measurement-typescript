/**
 * A unit of measurement.
 * @template Symbol The symbol of the unit, such as 'm' for meters.
 */
export class Unit<Symbol extends string> {
  public readonly symbol: Symbol;
  public constructor(symbol: Symbol) {this.symbol = symbol;}
}

/**
 * The symbol of the associated unit.
 * @template U The unit to get the symbol of.
 */
export type SymbolOf<U extends Unit<any>> = U extends Unit<infer Symbol> ? Symbol : never;
export function SymbolOf<U extends Unit<any>>(unit: U): SymbolOf<U> {return unit.symbol;}
