import {Conversions} from "!src/dimension/conversion";
import {assertIsMeasurement, isMeasurement, measurement} from "!src/dimension/measurement";
import * as o from "!src/object";

/// MARK: Measurement Tests

describe("measurement", () => {
  const units = ["m", "cm", "in"] as const;
  type Units = typeof units[number];
  const conversions: Conversions<Units> = {
    m: [v => v, v => v],
    cm: [v => v / 100, v => v * 100],
    in: [v => v / 39.37, v => v * 39.37]
  };

  it("should convert between units", () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(testMeasurement.m.value).toBe(1);
    expect(testMeasurement.cm.value).toBe(100);
    expect(testMeasurement.in.value).toBeCloseTo(39.37);
  });

  it('should have the units as its keys', () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(Reflect.ownKeys(testMeasurement)).toEqual(units);
    expect(Object.keys(testMeasurement)).toEqual(units);
    expect(Reflect.ownKeys(testMeasurement)).toContain("cm");
    expect(Reflect.ownKeys(testMeasurement)).toContain("m");
    expect(Reflect.ownKeys(testMeasurement)).toContain("in");

    expect("m" in testMeasurement).toBe(true);
    expect("cm" in testMeasurement).toBe(true);
    expect("in" in testMeasurement).toBe(true);
  });

  it('should not allow deleting properties', () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(() => delete (testMeasurement as any)["m"]).toThrow();
  });

  it('should have a pure object measurement as its prototype', () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(Reflect.getPrototypeOf(testMeasurement)).toEqual(o.measurement(1, "m"));
  });

  it("should return undefined for unknown properties", () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect((testMeasurement as any)["random"]).toBe(undefined);
    expect((testMeasurement as any)[Symbol("random-non-existent")]).toBe(undefined);
  });

  it("should conform to the «object» Measurement type.", () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(o.isMeasurement(testMeasurement)).toBe(true);
    expect(testMeasurement.value).toBe(1);
    expect(testMeasurement.unit).toBe("m");
  });
});


/// MARK: isMeasurement Tests

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
    const unit = "m";
    const value = 1;
    expect(isMeasurement({unit, value, [unit]: value}, ["m"])).toBe(true);
  });

  it("should return false if the candidate doesn't conform the «object» Measurement type.", () => {
    expect(isMeasurement({value: 1, unit: "m"}, ["m"])).toBe(false);
  });
});

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
    const unit = "m";
    const value = 1;
    expect(() => assertIsMeasurement({unit, value, [unit]: value}, ["m"])).not.toThrow();
  });

  it("should throw if the candidate doesn't conform the «object» Measurement type.", () => {
    expect(() => assertIsMeasurement({value: 1, unit: "m"}, ["m"])).toThrow();
  });
});