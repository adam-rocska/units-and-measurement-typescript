import {type Conversions, measurement} from "!src/dimension";
import * as o from "!src/object";

const units = ["m", "cm", "in"] as const;
type Units = typeof units[number];
const conversions: Conversions<Units> = {
  m: [v => v, v => v],
  cm: [v => v / 100, v => v * 100],
  in: [v => v / 39.37, v => v * 39.37]
};

describe("measurement", () => {

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
