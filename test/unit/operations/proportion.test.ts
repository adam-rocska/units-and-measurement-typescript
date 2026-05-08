import {describe, expect, it} from "vitest";
import {
  object,
  string,
  tuple,
} from "@adam-rocska/units-and-measurement";
import {proportion} from "@adam-rocska/units-and-measurement/operations";
import {
  centimeters,
  meters,
} from "@adam-rocska/units-and-measurement/length";
import {seconds} from "@adam-rocska/units-and-measurement/duration";

describe("proportion", () => {
  it("should return the ratio for string measurements with the same unit", () => {
    expect(proportion(string.measurement(10, "px"), string.measurement(5, "px")))
      .toBe(2);
  });

  it("should return the ratio for tuple measurements with the same unit", () => {
    expect(proportion(tuple.measurement(15, "rem"), tuple.measurement(3, "rem")))
      .toBe(5);
  });

  it("should return the ratio for object measurements with the same unit", () => {
    expect(proportion(object.measurement(12, "kg"), object.measurement(4, "kg")))
      .toBe(3);
  });

  it("should preserve JavaScript division semantics for zero denominators", () => {
    expect(proportion(string.measurement(1, "px"), string.measurement(0, "px")))
      .toBe(Infinity);
  });

  it("should return undefined for plain measurements with different units", () => {
    expect(proportion(string.measurement(1, "m"), string.measurement(100, "cm")))
      .toBeUndefined();
  });

  it("should convert when the numerator is a dimension measurement", () => {
    expect(proportion(meters(2), string.measurement(50, "cm")))
      .toBe(4);
  });

  it("should convert when the denominator is a dimension measurement", () => {
    expect(proportion(tuple.measurement(50, "cm"), meters(2)))
      .toBe(0.25);
  });

  it("should convert when both inputs are dimension measurements", () => {
    expect(proportion(meters(2), centimeters(50)))
      .toBe(4);
  });

  it("should return undefined for incompatible dimension measurements", () => {
    expect(proportion(meters(1), seconds(1)))
      .toBeUndefined();
  });
});
