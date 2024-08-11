export class Unit<Symbol extends string> {
  public readonly symbol: Symbol;
  public constructor(symbol: Symbol) {this.symbol = symbol;}
}