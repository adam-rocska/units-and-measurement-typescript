import {type Conversions} from "!src/dimension/conversion";
import {isMeasurement, measurement} from "!src/dimension";
import * as o from "!src/object";


const units = ["m", "cm", "in"] as const;
type Units = typeof units[number];
const conversions: Conversions<Units> = {
  m: [v => v, v => v],
  cm: [v => v / 100, v => v * 100],
  in: [v => v / 39.37, v => v * 39.37]
};

describe("isMeasurement", () => {
  it('should return false if the provided units are empty', () => {
    expect(isMeasurement({}, [])).toBe(false);
  });

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

  it('should return false if the candidate is a valid measurement but has an invalid unit', () => {
    expect(isMeasurement({m: 1}, ["cm"])).toBe(false);
  });

  it('should return true if the candidate is a valid measurement', () => {
    const actualMeasurement = measurement(conversions, 1, "m");
    expect(isMeasurement(actualMeasurement)).toBe(true);
    expect(isMeasurement(actualMeasurement, units)).toBe(true);
    expect(isMeasurement(actualMeasurement, units, "m")).toBe(true);
  });

  it("should return false if the candidate is a valid measurement but has a unit mismatch", () => {
    const actualMeasurement = measurement(conversions, 1, "m");
    expect(isMeasurement(actualMeasurement, units, "cm")).toBe(false);
    expect(isMeasurement(actualMeasurement, units, "in")).toBe(false);
    expect(isMeasurement(actualMeasurement, units, "m")).toBe(true);
  });

  it("should return false if the candidate is a valid measurement, but has a unit set mismatch", () => {
    const actualMeasurement = measurement(conversions, 1, "m");
    expect(isMeasurement(actualMeasurement, units.slice(1), "m")).toBe(false);
    expect(isMeasurement(actualMeasurement, units.slice(-1), "m")).toBe(false);
  });

  it("should return false if the candidate has non-measurement fields keyed by units", () => {
    const candidate = Object.create(
      o.measurement(123, "m"), {
      cm: {enumerable: true, value: 123},
      in: {enumerable: true, value: 123},
      m: {enumerable: true, value: 123}
    });
    expect(isMeasurement(candidate, units)).toBe(false);
  });

  it("should return false if the candidate doesn't conform the «object» Measurement type.", () => {
    expect(isMeasurement({value: 1, unit: "m"}, ["m"])).toBe(false);
  });
});
