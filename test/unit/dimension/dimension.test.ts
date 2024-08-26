import {Conversions} from "!src/dimension/conversion";
import {dimension} from "!src/dimension/dimension";

describe("dimension", () => {
  const units = ["m", "cm", "in"] as const;
  type Units = typeof units[number];
  const conversions: Conversions<Units> = {
    "m": [(value) => value, (value) => value],
    "cm": [(value) => value / 100, (value) => value * 100],
    "in": [(value) => value / 39.37, (value) => value * 39.37]
  };
  const length = dimension<Units>(conversions);

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