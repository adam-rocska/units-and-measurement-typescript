import {measurement} from "!src/dimension/measurement";
import {type Conversions} from "!src/dimension/conversion";

describe("measurement", () => {
  const conversions: Conversions<"m" | "cm" | "in"> = {
    m: [v => v, v => v],
    cm: [v => v / 100, v => v * 100],
    in: [v => v / 39.37, v => v * 39.37]
  };

  it("should convert between units", () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(testMeasurement["m"]).toBe(1);
    expect(testMeasurement["cm"]).toBe(100);
    expect(testMeasurement["in"]).toBeCloseTo(39.37);
  });
});