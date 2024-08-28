import {isMeasurement, unit, value, toFixed} from "!src/measurement";
import {Conversions} from "!src/dimension";
import * as d from "!src/dimension";
import * as o from "!src/object";
import * as t from "!src/tuple";
import * as s from "!src/string";

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
    const value = 1;
    const unit = "m";
    expect(isMeasurement({value, unit, [unit]: value})).toBe(true);
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
    const value = 1;
    const unit = "m";
    expect(isMeasurement({value, unit, [unit]: value}, "m")).toBe(true);
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
    const v = 1;
    const u = "m";
    expect(value({value: v, unit: u, [u]: v})).toBe(1);
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
    const v = 1;
    const u = "m";
    expect(unit({value: v, unit: u, [u]: v})).toBe("m");
  });

  it("should throw an error for a non-measurement.", () => {
    expect(() => unit(1 as any)).toThrow("Failed to resolve the unit of the measurement.");
  });
});

describe("toFixed", () => {
  it("should return a string measurement with the fixed value.", () => {
    expect(toFixed("1.123m", 2)).toBe("1.12m");
  });

  it("should return a tuple measurement with the fixed value.", () => {
    expect(toFixed([1.123, "m"], 2)).toEqual([1.12, "m"]);
  });

  it("should return an object measurement with the fixed value.", () => {
    expect(toFixed({value: 1.123, unit: "m"}, 2)).toEqual({value: 1.12, unit: "m"});
  });

  it("should return a dimension measurement with the fixed value.", () => {
    const stubUnits = ["m", "cm", "ft"] as const;
    const stubConversions: Conversions<typeof stubUnits[number]> = {
      m: [v => v, v => v],
      cm: [v => v / 100, v => v * 100],
      ft: [v => v / 3.281, v => v * 3.281]
    };
    const testMeasurement = d.measurement(stubConversions, 0.1 + 0.2, "m");
    const toFixedTestMeasurement = toFixed(testMeasurement, 2);
    if (!d.isMeasurement(toFixedTestMeasurement, stubUnits)) {
      console.error("The measurement is not a dimension measurement.", toFixedTestMeasurement);
      throw new Error("The measurement is not a dimension measurement.");
    }
    expect(toFixedTestMeasurement.m).toBeCloseTo(0.3);
    expect(toFixedTestMeasurement.cm).toBeCloseTo(30);
    expect(toFixedTestMeasurement.ft).toBeCloseTo(0.98);
    expect(toFixedTestMeasurement.value).toBe(0.3);
    expect(toFixedTestMeasurement.unit).toBe(testMeasurement);
  });

  describe("when no fraction digits are specified.", () => {
    it("should return a string measurement with the fixed value.", () => {
      expect(toFixed("1.123m")).toBe("1m");
    });

    it("should return a tuple measurement with the fixed value.", () => {
      expect(toFixed([1.123, "m"])).toEqual([1, "m"]);
    });

    it("should return an object measurement with the fixed value.", () => {
      expect(toFixed({value: 1.123, unit: "m"})).toEqual({value: 1, unit: "m"});
    });

    it("should return a dimension measurement with the fixed value.", () => {
      const stubUnits = ["m", "cm", "ft"] as const;
      const stubConversions: Conversions<typeof stubUnits[number]> = {
        m: [v => v, v => v],
        cm: [v => v / 100, v => v * 100],
        ft: [v => v / 3.281, v => v * 3.281]
      };
      const testMeasurement = d.measurement(stubConversions, 0.1 + 0.2, "m");
      const toFixedTestMeasurement = toFixed(testMeasurement);
      if (!d.isMeasurement(toFixedTestMeasurement, stubUnits)) {
        console.error("The measurement is not a dimension measurement.", toFixedTestMeasurement);
        throw new Error("The measurement is not a dimension measurement.");
      }
      expect(toFixedTestMeasurement.m).toEqual(0.1 + 0.2);
      expect(toFixedTestMeasurement.cm).toEqual((0.1 + 0.2) * 100);
      expect(toFixedTestMeasurement.ft).toBeCloseTo((0.1 + 0.2) / 3.281);
      expect(toFixedTestMeasurement.value).toBe(0.1 + 0.2);
      expect(toFixedTestMeasurement.unit).toBe(testMeasurement);
    });
  });
});