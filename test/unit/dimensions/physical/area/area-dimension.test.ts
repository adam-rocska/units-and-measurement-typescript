import {AreaDimension} from "!src/dimensions/physical/area/area-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("AreaDimension", () => {
  describe(".squareMegameters", () => {
    it('should have "Mm²" as its symbol.', () => {
      expect(AreaDimension.squareMegameters.symbol).toEqual("Mm²");
    });
    it('should have its coefficient equal "1e12"', () => {
      expect(AreaDimension.squareMegameters.converter).toEqual(
        new LinearUnitConverter(1e12)
      );
    });
  });
  describe(".squareKilometers", () => {
    it('should have "km²" as its symbol.', () => {
      expect(AreaDimension.squareKilometers.symbol).toEqual("km²");
    });
    it('should have its coefficient equal "1000000.0"', () => {
      expect(AreaDimension.squareKilometers.converter).toEqual(
        new LinearUnitConverter(1000000.0)
      );
    });
  });
  describe(".squareMeters", () => {
    it('should have "m²" as its symbol.', () => {
      expect(AreaDimension.squareMeters.symbol).toEqual("m²");
    });
    it('should have its coefficient equal "1.0"', () => {
      expect(AreaDimension.squareMeters.converter).toEqual(
        new LinearUnitConverter(1.0)
      );
    });
  });
  describe(".squareCentimeters", () => {
    it('should have "cm²" as its symbol.', () => {
      expect(AreaDimension.squareCentimeters.symbol).toEqual("cm²");
    });
    it('should have its coefficient equal "0.0001"', () => {
      expect(AreaDimension.squareCentimeters.converter).toEqual(
        new LinearUnitConverter(0.0001)
      );
    });
  });
  describe(".squareMillimeters", () => {
    it('should have "mm²" as its symbol.', () => {
      expect(AreaDimension.squareMillimeters.symbol).toEqual("mm²");
    });
    it('should have its coefficient equal "0.000001"', () => {
      expect(AreaDimension.squareMillimeters.converter).toEqual(
        new LinearUnitConverter(0.000001)
      );
    });
  });
  describe(".squareMicrometers", () => {
    it('should have "µm²" as its symbol.', () => {
      expect(AreaDimension.squareMicrometers.symbol).toEqual("µm²");
    });
    it('should have its coefficient equal "1e-12"', () => {
      expect(AreaDimension.squareMicrometers.converter).toEqual(
        new LinearUnitConverter(1e-12)
      );
    });
  });
  describe(".squareNanometers", () => {
    it('should have "nm²" as its symbol.', () => {
      expect(AreaDimension.squareNanometers.symbol).toEqual("nm²");
    });
    it('should have its coefficient equal "1e-18"', () => {
      expect(AreaDimension.squareNanometers.converter).toEqual(
        new LinearUnitConverter(1e-18)
      );
    });
  });
  describe(".squareInches", () => {
    it('should have "in²" as its symbol.', () => {
      expect(AreaDimension.squareInches.symbol).toEqual("in²");
    });
    it('should have its coefficient equal "0.00064516"', () => {
      expect(AreaDimension.squareInches.converter).toEqual(
        new LinearUnitConverter(0.00064516)
      );
    });
  });
  describe(".squareFeet", () => {
    it('should have "ft²" as its symbol.', () => {
      expect(AreaDimension.squareFeet.symbol).toEqual("ft²");
    });
    it('should have its coefficient equal "0.092903"', () => {
      expect(AreaDimension.squareFeet.converter).toEqual(
        new LinearUnitConverter(0.092903)
      );
    });
  });
  describe(".squareYards", () => {
    it('should have "yd²" as its symbol.', () => {
      expect(AreaDimension.squareYards.symbol).toEqual("yd²");
    });
    it('should have its coefficient equal "0.836127"', () => {
      expect(AreaDimension.squareYards.converter).toEqual(
        new LinearUnitConverter(0.836127)
      );
    });
  });
  describe(".squareMiles", () => {
    it('should have "mi²" as its symbol.', () => {
      expect(AreaDimension.squareMiles.symbol).toEqual("mi²");
    });
    it('should have its coefficient equal "2.59e+6"', () => {
      expect(AreaDimension.squareMiles.converter).toEqual(
        new LinearUnitConverter(2.59e6)
      );
    });
  });
  describe(".acres", () => {
    it('should have "ac" as its symbol.', () => {
      expect(AreaDimension.acres.symbol).toEqual("ac");
    });
    it('should have its coefficient equal "4046.86"', () => {
      expect(AreaDimension.acres.converter).toEqual(
        new LinearUnitConverter(4046.86)
      );
    });
  });
  describe(".ares", () => {
    it('should have "a" as its symbol.', () => {
      expect(AreaDimension.ares.symbol).toEqual("a");
    });
    it('should have its coefficient equal "100"', () => {
      expect(AreaDimension.ares.converter).toEqual(
        new LinearUnitConverter(100)
      );
    });
  });
  describe(".hectares", () => {
    it('should have "ha" as its symbol.', () => {
      expect(AreaDimension.hectares.symbol).toEqual("ha");
    });
    it('should have its coefficient equal "10000"', () => {
      expect(AreaDimension.hectares.converter).toEqual(
        new LinearUnitConverter(10000)
      );
    });
  });
});
