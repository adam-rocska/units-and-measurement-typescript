import {Conversions} from "!src/dimension/conversion";
import {dimension} from "!src/dimension/dimension";
import {measurement, isMeasurement, toFixed, dimensionSymbol, conversionSymbol, value, unit} from "!src/dimension/dimension";


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
    expect(() => length["m"] = 2).toThrow();
  });

  it("should not allow deleting properties", () => {
    expect(() => delete length["m"]).toThrow();
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

  it("should allow retrieving the conversions", () => {
    expect(length[conversionSymbol]).toBe(conversions);
  });

  it("should return undefined for unknown properties", () => {
    expect(length["random"]).toBe(undefined);
  });

});

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
    expect(Reflect.ownKeys(testMeasurement)).toEqual(["m", "cm", "in"]);

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
    expect(() => testMeasurement["random"] = 1).toThrow();
  });

  it("shouldn't allow setting non number values.", () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(() => testMeasurement["cm"] = "1").toThrow();
  });

  it('should not allow deleting properties', () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(() => delete testMeasurement["m"]).toThrow();
  });

  it('should not allow setting the prototype', () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(Reflect.setPrototypeOf(testMeasurement, {})).toBe(false);
  });

  it('should have nothing/null as its prototype', () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(Reflect.getPrototypeOf(testMeasurement)).toBe(null);
  });

  it("should allow retrieving the conversions", () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(testMeasurement[conversionSymbol]).toBe(conversions);
  });

  it("should allow retrieving the dimension producing it", () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(testMeasurement[dimensionSymbol]).toBe(dimension(conversions));
  });

  it("should return undefined for unknown properties", () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(testMeasurement["random"]).toBe(undefined);
    expect(testMeasurement[Symbol("random-non-existent")]).toBe(undefined);
  });
});

describe("value", () => {
  const conversions: Conversions<"m" | "cm" | "in"> = {
    m: [v => v, v => v],
    cm: [v => v / 100, v => v * 100],
    in: [v => v / 39.37, v => v * 39.37]
  };

  it('should return the base value of the dimension measurement.', () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(value(testMeasurement)).toBe(1);

    testMeasurement["cm"] = 200;
    expect(value(testMeasurement)).toBe(2);

    testMeasurement["in"] = 20;
    expect(value(testMeasurement)).toBeCloseTo(0.508);
  });
});

describe("unit", () => {
  const conversions: Conversions<"m" | "cm" | "in"> = {
    m: [v => v, v => v],
    cm: [v => v / 100, v => v * 100],
    in: [v => v / 39.37, v => v * 39.37]
  };

  it('should return the base unit of the dimension measurement.', () => {
    const testMeasurement = measurement(conversions, 1, "m");
    expect(unit(testMeasurement)).toBe("m");

    testMeasurement["cm"] = 200;
    expect(unit(testMeasurement)).toBe("m");

    testMeasurement["in"] = 20;
    expect(unit(testMeasurement)).toBe("m");
  });
});

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

  it('should return true if the candidate is a valid measurement', () => {
    expect(isMeasurement({m: 1}, ["m"])).toBe(true);
  });

  it('should return false if the candidate is a valid measurement but has an invalid unit', () => {
    expect(isMeasurement({m: 1}, ["cm"])).toBe(false);
  });
});

describe("toFixed", () => {
  const conversions: Conversions<"m" | "cm" | "in"> = {
    m: [v => v, v => v],
    cm: [v => v / 100, v => v * 100],
    in: [v => v / 39.37, v => v * 39.37]
  };

  it('should return a new measurement with the values fixed', () => {
    const testMeasurement = measurement(conversions, 1, "m");
    const fixedMeasurement = toFixed(testMeasurement, 2);
    expect(fixedMeasurement["m"]).toBe(1);
    expect(fixedMeasurement["cm"]).toBe(100);
    expect(fixedMeasurement["in"]).toBeCloseTo(39.37);
  });

  it('should return a new measurement with the values fixed', () => {
    const testMeasurement = measurement(conversions, 1, "m");
    const fixedMeasurement = toFixed(testMeasurement, 0);
    expect(fixedMeasurement["m"]).toBe(1);
    expect(fixedMeasurement["cm"]).toBe(100);
    expect(fixedMeasurement["in"]).toBe(39);
  });
});