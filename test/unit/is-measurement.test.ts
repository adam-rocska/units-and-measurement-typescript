import {isMeasurement} from "!src/is-measurement";
import {Conversions} from "!src/dimension";
import {measurement as string} from "!src/string";
import {measurement as tuple} from "!src/tuple";
import {measurement as object} from "!src/object";
import {measurement as dimension} from "!src/dimension";



describe("isMeasurement", () => {
  const units = ["cm", "m", "in", "ft"] as const;
  type Units = typeof units[number];
  const conversions: Conversions<Units> = {
    cm: [v => v * 2.54, v => v / 2.54],
    m: [v => v * 100, v => v / 100],
    in: [v => v, v => v],
    ft: [v => v * 12, v => v / 12]
  };
  const testDimension = dimension(conversions, 1, "cm");
  const testString = string(1, "cm");
  const testTuple = tuple(1, "cm");
  const testObject = object(1, "cm");

  describe("when no unit specified", () => {
    it("should return true for a dimension", () => {
      expect(isMeasurement(testDimension)).toBe(true);
    });

    it("should return true for a string", () => {
      expect(isMeasurement(testString)).toBe(true);
    });

    it("should return true for a tuple", () => {
      expect(isMeasurement(testTuple)).toBe(true);
    });

    it("should return true for an object", () => {
      expect(isMeasurement(testObject)).toBe(true);
    });

    it("should return false for a string with no unit", () => {
      expect(isMeasurement("1")).toBe(false);
    });

    it("should return false for a tuple with no unit", () => {
      expect(isMeasurement([1])).toBe(false);
    });
  });

  describe("when a unit is specified", () => {
    it("should return true for a string with the specified unit", () => {
      expect(isMeasurement("1cm", "cm")).toBe(true);
    });

    it("should return true for a tuple with the specified unit", () => {
      expect(isMeasurement([1, "cm"], "cm")).toBe(true);
    });

    it("should return true for an object with the specified unit", () => {
      expect(isMeasurement({value: 1, unit: "cm"}, "cm")).toBe(true);
    });

    it("should return false for a string with a different unit", () => {
      expect(isMeasurement("1cm", "in")).toBe(false);
    });

    it("should return false for a tuple with a different unit", () => {
      expect(isMeasurement([1, "cm"], "in")).toBe(false);
    });

    it("should return false for an object with a different unit", () => {
      expect(isMeasurement({value: 1, unit: "cm"}, "in")).toBe(false);
    });

    it("should return false for a string with no unit", () => {
      expect(isMeasurement("1", "cm")).toBe(false);
    });

    it("should return false for a tuple with no unit", () => {
      expect(isMeasurement([1], "cm")).toBe(false);
    });

    it("should return false for an object with no unit", () => {
      expect(isMeasurement({value: 1}, "cm")).toBe(false);
    });

  });

  describe("when a unit and units specified", () => {
    it("should return true for a string with the specified unit", () => {
      expect(isMeasurement("1cm", "cm", units)).toBe(true);
    });

    it("should return true for a tuple with the specified unit", () => {
      expect(isMeasurement([1, "px"], "px" as any, ["em"])).toBe(true);
    });

    it("should return true for an object with the specified unit", () => {
      expect(isMeasurement({value: 1, unit: "px"}, "px" as any, ["em"])).toBe(true);
    });

    it("should return true for a string with a different unit", () => {
      expect(isMeasurement("1px", "em" as any, ["px"])).toBe(true);
    });

    it("should return true for a tuple with a different unit", () => {
      expect(isMeasurement([1, "px"], "em" as any, ["px"])).toBe(true);
    });

    it("should return true for an object with a different unit", () => {
      expect(isMeasurement({value: 1, unit: "px"}, "em" as any, ["px"])).toBe(true);
    });

    it("should return false for a string with no unit", () => {
      expect(isMeasurement("1", "px" as any, ["em"])).toBe(false);
    });

    it("should return false for a tuple with no unit", () => {
      expect(isMeasurement([1], "px" as any, ["em"])).toBe(false);
    });

    it("should return false for an object with no unit", () => {
      expect(isMeasurement({value: 1}, "px" as any, ["em"])).toBe(false);
    });

    it("should return true for a dimension with a matching unit", () => {
      expect(isMeasurement(testDimension, "cm", units)).toBe(true);
    });
  });

});