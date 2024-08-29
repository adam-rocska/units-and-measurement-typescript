import {isMeasurement} from "!src";

describe("isMeasurement", () => {
  it("should return true for a string measurement.", () => {
    expect(isMeasurement("1m")).toBe(true);
  });

  it("should return true for a tuple measurement.", () => {
    expect(isMeasurement([1, "m"])).toBe(true);
  });

  it("should return true for an object measurement.", () => {
    expect(isMeasurement({value: 1, unit: "m"})).toBe(true);
  });

  it("should return true for a dimension measurement.", () => {
    const value = 1;
    const unit = "m";
    expect(isMeasurement({value, unit, [unit]: value})).toBe(true);
  });

  it("should return false for a non-measurement.", () => {
    expect(isMeasurement(1)).toBe(false);
  });

  it("should return true for a string measurement with the specified unit.", () => {
    expect(isMeasurement("1m", "m")).toBe(true);
  });

  it("should return true for a tuple measurement with the specified unit.", () => {
    expect(isMeasurement([1, "m"], "m")).toBe(true);
  });

  it("should return true for an object measurement with the specified unit.", () => {
    expect(isMeasurement({value: 1, unit: "m"}, "m")).toBe(true);
  });

  it("should return true for a dimension measurement with the specified unit.", () => {
    const value = 1;
    const unit = "m";
    expect(isMeasurement({value, unit, [unit]: value}, "m")).toBe(true);
  });

  it("should return false for a string measurement with the wrong unit.", () => {
    expect(isMeasurement("1m", "s")).toBe(false);
  });
});