import {Conversions} from "!src/dimension/conversion";
import {measurement, isMeasurement, toFixed, dimension} from "!src/dimension/dimension";
import * as o from "!src/measurement/object";


/// MARK: Dimension Tests
describe("dimension", () => {
  const units = ["m", "cm", "in"] as const;
  type Units = typeof units[number];
  const conversions: Conversions<Units> = {
    "m": [(value) => value, (value) => value],
    "cm": [(value) => value / 100, (value) => value * 100],
    "in": [(value) => value / 39.37, (value) => value * 39.37]
  };
  const length = dimension<Units>(conversions);

  it("should have the units as its keys", () => {
    expect(Reflect.ownKeys(length)).toEqual(["m", "cm", "in"]);
    expect("m" in length).toBe(true);
    expect("cm" in length).toBe(true);
    expect("in" in length).toBe(true);
  });

  it("should not allow setting properties", () => {
    expect(() => (length as any)["m"] = 2).toThrow();
  });

  it("should not allow deleting properties", () => {
    expect(() => delete (length as any)["m"]).toThrow();
  });

  it("should not allow setting the prototype", () => {
    expect(Reflect.setPrototypeOf(length, {})).toBe(false);
  });

  it("should have nothing/null as its prototype", () => {
    expect(Reflect.getPrototypeOf(length)).toBe(null);
  });

  describe('having a "m" measurement.', () => {
    it('should return the same value.', () => {
      const testLength = length.m(1);
      expect(testLength.m).toBe(1);
    });
    it('should convert to "cm".', () => {
      const testLength = length.m(1);
      expect(testLength.cm).toBeCloseTo(100);
    });
    it('should convert to "in".', () => {
      const testLength = length.m(1);
      expect(testLength.in).toBeCloseTo(39.37);
    });
  });

  describe('having a "cm" measurement.', () => {
    it('should convert to "m".', () => {
      const testLength = length.cm(100);
      expect(testLength.m).toBe(1);
    });
    it('should return the same value.', () => {
      const testLength = length.cm(100);
      expect(testLength.cm).toBe(100);
    });
    it('should convert to "in".', () => {
      const testLength = length.cm(100);
      expect(testLength.in).toBeCloseTo(39.37);
    });
  });

  describe('having an "in" measurement.', () => {
    it('should convert to "m".', () => {
      const testLength = length.in(39.37);
      expect(testLength.m).toBe(1);
    });
    it('should convert to "cm".', () => {
      const testLength = length.in(39.37);
      expect(testLength.cm).toBeCloseTo(100);
    });
    it('should return the same value.', () => {
      const testLength = length.in(39.37);
      expect(testLength.in).toBeCloseTo(39.37);
    });
  });

});

/// MARK: Measurement Tests
describe("measurement", () => {
  const conversions: Conversions<"m" | "cm" | "in"> = {
    m: [v => v, v => v],
    cm: [v => v / 100, v => v * 100],
    in: [v => v / 39.37, v => v * 39.37]
  };

  it("should convert between units", () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(testMeasurement["m"]).toBe(1);
    expect(testMeasurement["cm"]).toBe(100);
    expect(testMeasurement["in"]).toBeCloseTo(39.37);
  });

  it('should have the units as its keys', () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(Reflect.ownKeys(testMeasurement)).toEqual(["value", "unit", "m", "cm", "in"]);
    expect(Object.keys(testMeasurement)).toEqual(["m", "cm", "in"]);
    expect(Reflect.ownKeys(testMeasurement)).toContain("cm");
    expect(Reflect.ownKeys(testMeasurement)).toContain("m");
    expect(Reflect.ownKeys(testMeasurement)).toContain("in");

    expect("m" in testMeasurement).toBe(true);
    expect("cm" in testMeasurement).toBe(true);
    expect("in" in testMeasurement).toBe(true);
  });

  it('should allow setting by measurement units', () => {
    const testMeasurement = measurement(conversions, 1, "m");
    testMeasurement["cm"] = 200;
    expect(testMeasurement["cm"]).toBe(200);
    expect(testMeasurement["m"]).toBe(2);
    expect(testMeasurement["in"]).toBeCloseTo(78.74);

    testMeasurement["in"] = 20;
    expect(testMeasurement["in"]).toBe(20);
    expect(testMeasurement["m"]).toBeCloseTo(0.508);
    expect(testMeasurement["cm"]).toBeCloseTo(50.8);

    testMeasurement["m"] = 1;
    expect(testMeasurement["m"]).toBe(1);
    expect(testMeasurement["cm"]).toBe(100);
    expect(testMeasurement["in"]).toBeCloseTo(39.37);
  });

  it("shouldn't allow setting random properties", () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(() => (testMeasurement as any)["random"] = 1).toThrow();
  });

  it("shouldn't allow setting non number values.", () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(() => (testMeasurement as any)["cm"] = "1").toThrow();
  });

  it('should not allow deleting properties', () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(() => delete (testMeasurement as any)["m"]).toThrow();
  });

  it('should not allow setting the prototype', () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(Reflect.setPrototypeOf(testMeasurement, {})).toBe(false);
  });

  it('should have nothing/null as its prototype', () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(Reflect.getPrototypeOf(testMeasurement)).toBe(null);
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

describe("toFixed", () => {
  const conversions: Conversions<"m" | "cm" | "in"> = {
    m: [v => v, v => v],
    cm: [v => v / 100, v => v * 100],
    in: [v => v / 39.37, v => v * 39.37]
  };

  it("should return the measurement with the fixed number of fraction digits", () => {
    const testM = measurement(conversions, 0.1 + 0.2, "m");
    const testCm = measurement(conversions, 0.1 + 0.2, "cm");
    const testIn = measurement(conversions, 0.1 + 0.2, "in");

    expect(toFixed(testM, 1).m).toBeCloseTo(0.3);
    expect(toFixed(testM, 1).cm).toBeCloseTo(30);
    expect(toFixed(testM, 1).in).toBeCloseTo(11.81);

    expect(toFixed(testCm, 1).m).toBeCloseTo(0.003);
    expect(toFixed(testCm, 1).cm).toBeCloseTo(0.3);
    expect(toFixed(testCm, 1).in).toBeCloseTo(0.12);

    expect(toFixed(testIn, 1).m).toBeCloseTo(0.0076);
    expect(toFixed(testIn, 1).cm).toBeCloseTo(0.76);
    expect(toFixed(testIn, 1).in).toBeCloseTo(0.3);
  });

});