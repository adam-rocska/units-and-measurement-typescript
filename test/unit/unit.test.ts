import {Unit} from "!src/unit";
import {SymbolOf} from "!src/unit";

describe("SymbolOf", () => {
  it("should return the symbol of the unit", () => {
    const symbol = "m" as const;
    type Symbol = typeof symbol;

    const testUnit: Unit<Symbol> = new Unit(symbol);
    type TestUnit = typeof testUnit;
    expect(SymbolOf(testUnit)).toEqual(symbol);
  });
});