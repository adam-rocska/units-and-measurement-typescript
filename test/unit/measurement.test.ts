import {isMeasurement, unit, value} from "!src/measurement";
import * as string from "!src/measurement/string";
import * as tuple from "!src/measurement/tuple";
import * as object from "!src/measurement/object";
import * as dimension from "!src/dimension/measurement";

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
    expect(isMeasurement({m: 1})).toBe(true);
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
    expect(isMeasurement({m: 1}, "m")).toBe(true);
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
    expect(value({m: 1})).toBe(1);
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
    expect(unit({m: 1})).toBe("m");
  });
});