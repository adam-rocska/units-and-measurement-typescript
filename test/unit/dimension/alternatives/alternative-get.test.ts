import {alternativeGet} from "!src/dimension/alternatives/alternative-get";
import {type Conversions} from "!src/dimension/conversion";

describe("alternativeGet", () => {
  const units = ["m", "ft"] as const;
  type Units = typeof units[number];
  const conversions: Conversions<Units> = {
    m: [x => x, x => x],
    ft: [x => x / 3.28084, x => x * 3.28084],
  };

  it("should return a function", () => {
    const unit = "ft";
    const result = alternativeGet(conversions, unit);
    expect(typeof result).toBe("function");
  });

  it("should return a function that returns a Measurement", () => {
    const unit = "ft";
    const result = alternativeGet(conversions, unit).call({unit: "m", value: 0});
    expect(result).toHaveProperty("unit", unit);
    expect(result).toHaveProperty("value", 0);
  });

  it("should return a function that returns a Measurement with the same value if the unit is the same", () => {
    const unit = "ft";
    const value = 1;
    const result = alternativeGet(conversions, unit).call({unit, value});
    expect(result).toHaveProperty("unit", unit);
    expect(result).toHaveProperty("value", value);
  });
  it("should return a function that returns a Measurement with the converted value if the unit is different", () => {
    const unit = "ft";
    const value = 1;
    const result = alternativeGet(conversions, "m").call({unit, value});
    expect(result).toHaveProperty("unit", "m");
    expect(result.value).toBeCloseTo(0.3048);
  });
});