import {AngleDimension} from "!src/dimensions/physical/angle/angle-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("AngleDimension", () => {
  describe(".degrees", () => {
    it('should have "°" as its symbol.', () => {
      expect(AngleDimension.degrees.symbol).toEqual("°");
    });

    it("should have its unit conversion set properly.", () => {
      expect(AngleDimension.degrees.converter).toEqual(
        new LinearUnitConverter(1)
      );
    });
  });
  describe(".arcMinutes", () => {
    it('should have "ʹ" as its symbol.', () => {
      expect(AngleDimension.arcMinutes.symbol).toEqual("ʹ");
    });

    it("should have its unit conversion set properly.", () => {
      expect(AngleDimension.arcMinutes.converter).toEqual(
        new LinearUnitConverter(0.016667)
      );
    });
  });
  describe(".arcSeconds", () => {
    it('should have "ʺ" as its symbol.', () => {
      expect(AngleDimension.arcSeconds.symbol).toEqual("ʺ");
    });

    it("should have its unit conversion set properly.", () => {
      expect(AngleDimension.arcSeconds.converter).toEqual(
        new LinearUnitConverter(0.00027778)
      );
    });
  });
  describe(".radians", () => {
    it('should have "rad" as its symbol.', () => {
      expect(AngleDimension.radians.symbol).toEqual("rad");
    });

    it("should have its unit conversion set properly.", () => {
      expect(AngleDimension.radians.converter).toEqual(
        new LinearUnitConverter(57.2958)
      );
    });
  });
  describe(".gradians", () => {
    it('should have "grad" as its symbol.', () => {
      expect(AngleDimension.gradians.symbol).toEqual("grad");
    });

    it("should have its unit conversion set properly.", () => {
      expect(AngleDimension.gradians.converter).toEqual(
        new LinearUnitConverter(0.9)
      );
    });
  });
  describe(".revolutions", () => {
    it('should have "rev" as its symbol.', () => {
      expect(AngleDimension.revolutions.symbol).toEqual("rev");
    });

    it("should have its unit conversion set properly.", () => {
      expect(AngleDimension.revolutions.converter).toEqual(
        new LinearUnitConverter(360)
      );
    });
  });
});
