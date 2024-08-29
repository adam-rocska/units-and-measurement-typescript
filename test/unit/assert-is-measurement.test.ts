import {assertIsMeasurement} from "!src";

describe("assertIsMeasurement", () => {
  it("should throw if the candidate is not a measurement", () => {
    expect(() => assertIsMeasurement(1)).toThrow();
  });

  it("should throw if the candidate is null", () => {
    expect(() => assertIsMeasurement(null)).toThrow();
  });

  it("shouldn't throw if the candidate is a measurement", () => {
    expect(() => assertIsMeasurement({value: 1, unit: "cm"})).not.toThrow();
  });

  it("shouldn't throw if the candidate is a measurement with a specified unit", () => {
    expect(() => assertIsMeasurement({value: 1, unit: "cm"}, "cm")).not.toThrow();
  });

  it("should throw if the candidate is a measurement with a different unit", () => {
    expect(() => assertIsMeasurement({value: 1, unit: "cm"}, "in")).toThrow();
  });
});