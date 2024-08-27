import {isMeasurement, unit, value, toFixed} from "!src/measurement";

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

describe("value", () => {
  it("should return the value of a string measurement.", () => {
    expect(value("1m")).toBe(1);
  });

  it("should return the value of a tuple measurement.", () => {
    expect(value([1, "m"])).toBe(1);
  });

  it("should return the value of an object measurement.", () => {
    expect(value({value: 1, unit: "m"})).toBe(1);
  });

  it("should return the value of a dimension measurement.", () => {
    const v = 1;
    const u = "m";
    expect(value({value: v, unit: u, [u]: v})).toBe(1);
  });

  /// NOTE: This test is only to make sure we're on the safe side. Normally it can't occur.
  it("should return NaN for a non-measurement.", () => {
    expect(value(1 as any)).toBe(NaN);
  });
});

describe("unit", () => {
  it("should return the unit of a string measurement.", () => {
    expect(unit("1m")).toBe("m");
  });

  it("should return the unit of a tuple measurement.", () => {
    expect(unit([1, "m"])).toBe("m");
  });

  it("should return the unit of an object measurement.", () => {
    expect(unit({value: 1, unit: "m"})).toBe("m");
  });

  it("should return the unit of a dimension measurement.", () => {
    const v = 1;
    const u = "m";
    expect(unit({value: v, unit: u, [u]: v})).toBe("m");
  });

  it("should throw an error for a non-measurement.", () => {
    expect(() => unit(1 as any)).toThrow("Failed to resolve the unit of the measurement.");
  });
});
