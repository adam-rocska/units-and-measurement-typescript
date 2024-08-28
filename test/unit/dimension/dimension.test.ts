import {Conversions} from "!src/dimension/conversion";
import {dimension} from "!src/dimension/dimension";


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
      expect(testLength.m.value).toBe(1);
    });
    it('should convert to "cm".', () => {
      const testLength = length.m(1);
      expect(testLength.cm.value).toBeCloseTo(100);
    });
    it('should convert to "in".', () => {
      const testLength = length.m(1);
      expect(testLength.in.value).toBeCloseTo(39.37);
    });
  });

  describe('having a "cm" measurement.', () => {
    it('should convert to "m".', () => {
      const testLength = length.cm(100);
      expect(testLength.m.value).toBe(1);
    });

    it('should return the same value.', () => {
      //// EZ SZARIK BE VÉGTELEN CIKLUSSAL
      const testLength = length.cm(100);
      expect(testLength.cm.value).toBe(100);
    });
    it('should convert to "in".', () => {
      const testLength = length.cm(100);
      expect(testLength.in.value).toBeCloseTo(39.37);
    });
  });

  describe('having an "in" measurement.', () => {
    it('should convert to "m".', () => {
      const testLength = length.in(39.37);
      expect(testLength.m.value).toBe(1);
    });
    it('should convert to "cm".', () => {
      const testLength = length.in(39.37);
      expect(testLength.cm.value).toBeCloseTo(100);
    });
    it('should return the same value.', () => {
      const testLength = length.in(39.37);
      expect(testLength.in.value).toBeCloseTo(39.37);
    });
  });

});
