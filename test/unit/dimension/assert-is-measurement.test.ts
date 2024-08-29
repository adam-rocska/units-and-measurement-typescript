import {type Conversions, assertIsMeasurement, measurement} from "!src/dimension";

/// MARK: Measurement Tests

const units = ["m", "cm", "in"] as const;
type Units = typeof units[number];
const conversions: Conversions<Units> = {
  m: [v => v, v => v],
  cm: [v => v / 100, v => v * 100],
  in: [v => v / 39.37, v => v * 39.37]
};

/// MARK: assertIsMeasurement Tests

describe("assertIsMeasurement", () => {
  it('should throw if the provided units are empty', () => {
    expect(() => assertIsMeasurement({}, [])).toThrow();
  });

  it('should throw if the candidate is not an object', () => {
    expect(() => assertIsMeasurement(1, ["m"])).toThrow();
  });
  it('should throw if the candidate is null', () => {
    expect(() => assertIsMeasurement(null, ["m"])).toThrow();
  });

  it('should throw if the candidate does not have a unit', () => {
    expect(() => assertIsMeasurement({}, ["m"])).toThrow();
  });

  it('should throw if the candidate has a non-number value', () => {
    expect(() => assertIsMeasurement({m: "1"}, ["m"])).toThrow();
  });

  it('should throw if the candidate is a valid measurement but has an invalid unit', () => {
    expect(() => assertIsMeasurement({m: 1}, ["cm"])).toThrow();
  });

  it('should not throw if the candidate is a valid measurement', () => {
    const actualMeasurement = measurement(conversions, 1, "m");
    expect(() => assertIsMeasurement(actualMeasurement)).not.toThrow();
  });

  it("should throw if the candidate doesn't conform the «object» Measurement type.", () => {
    expect(() => assertIsMeasurement({value: 1, unit: "m"}, ["m"])).toThrow();
  });
});