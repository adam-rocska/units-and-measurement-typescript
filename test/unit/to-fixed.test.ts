import {toFixed} from "!src";
import {Conversions} from "!src/dimension";
import * as d from "!src/dimension";


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