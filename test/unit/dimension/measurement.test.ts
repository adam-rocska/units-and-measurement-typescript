import {measurement, isMeasurement} from "!src/dimension/measurement";
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

describe("isMeasurement", () => {
  it('should return false if the candidate is not an object', () => {
    expect(isMeasurement(1, ["m"])).toBe(false);
  });
  it('should return false if the candidate is null', () => {
    expect(isMeasurement(null, ["m"])).toBe(false);
  });

  it('should return false if the candidate does not have a unit', () => {
    expect(isMeasurement({}, ["m"])).toBe(false);
  });

  it('should return false if the candidate has a non-number value', () => {
    expect(isMeasurement({m: "1"}, ["m"])).toBe(false);
  });

  it('should return true if the candidate is a valid measurement', () => {
    expect(isMeasurement({m: 1}, ["m"])).toBe(true);
  });

  it('should return false if the candidate is a valid measurement but has an invalid unit', () => {
    expect(isMeasurement({m: 1}, ["cm"])).toBe(false);
  });
});