import {units, type Conversions, measurement} from "!src/dimension";

describe("units", () => {
  it("should return the units of a measurement", () => {
    const testUnits = ["m", "cm", "mm"] as const;
    type TestUnits = typeof testUnits[number];
    const conversions: Conversions<TestUnits> = {
      m: [v => v, v => v],
      cm: [v => v * 100, v => v / 100],
      mm: [v => v * 1000, v => v / 1000],
    };
    const test = measurement(conversions, 1, "m");

    expect(units(test)).toEqual(testUnits);
  });
});