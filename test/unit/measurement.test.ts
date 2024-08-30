import {measurement} from "!src";
import * as string from "!src/string";
import * as tuple from "!src/tuple";
import * as object from "!src/object";
import * as dimension from "!src/dimension";

describe("measurement", () => {
  it("should create a string if the provided basis is a string", () => {
    const basis = string.measurement(1, "m");
    const result = measurement(basis, 2);
    expect(string.isMeasurement(result)).toBe(true);
    expect(string.value(result)).toBe(2);
    expect(string.unit(result)).toBe("m");
  });

  it("should create a tuple if the provided basis is a tuple", () => {
    const basis = tuple.measurement(1, "m");
    const result = measurement(basis, 2);
    expect(tuple.isMeasurement(result)).toBe(true);
    expect(tuple.value(result)).toBe(2);
    expect(tuple.unit(result)).toBe("m");
  });

  it("should create an object if the provided basis is an object", () => {
    const basis = object.measurement(1, "m");
    const result = measurement(basis, 2);
    expect(object.isMeasurement(result)).toBe(true);
    expect(object.value(result)).toBe(2);
    expect(object.unit(result)).toBe("m");
  });

  it("should create a dimension if the provided basis is a dimension", () => {
    const units = ["m", "cm", "in"] as const;
    type Units = typeof units[number];
    const conversions: dimension.Conversions<Units> = {
      m: [v => v, v => v],
      cm: [v => v / 100, v => v * 100],
      in: [v => v / 39.37, v => v * 39.37]
    };
    const testDimension = dimension.dimension(conversions);
    const basis = testDimension.m(1);

    const result = measurement(basis, 2);

    expect(dimension.isMeasurement(result)).toBe(true);
    expect(result.value).toBe(2);
    expect(result.unit).toBe("m");
  });
});