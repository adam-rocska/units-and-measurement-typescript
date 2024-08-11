import {PressureDimension} from "!src/dimensions/mass-weight-and-force/pressure/pressure-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("PressureDimension", () => {
  describe(".newtonsPerMetersSquared", () => {
    it('should have "N/m²" as its symbol.', () => {
      expect(PressureDimension.newtonsPerMetersSquared.symbol).toEqual("N/m²");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PressureDimension.newtonsPerMetersSquared.converter).toEqual(
        new LinearUnitConverter(1)
      );
    });
  });
  describe(".gigapascals", () => {
    it('should have "GPa" as its symbol.', () => {
      expect(PressureDimension.gigapascals.symbol).toEqual("GPa");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PressureDimension.gigapascals.converter).toEqual(
        new LinearUnitConverter(1000000000)
      );
    });
  });
  describe(".megapascals", () => {
    it('should have "MPa" as its symbol.', () => {
      expect(PressureDimension.megapascals.symbol).toEqual("MPa");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PressureDimension.megapascals.converter).toEqual(
        new LinearUnitConverter(1000000)
      );
    });
  });
  describe(".kilopascals", () => {
    it('should have "kPa" as its symbol.', () => {
      expect(PressureDimension.kilopascals.symbol).toEqual("kPa");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PressureDimension.kilopascals.converter).toEqual(
        new LinearUnitConverter(1000)
      );
    });
  });
  describe(".hectopascals", () => {
    it('should have "hPa" as its symbol.', () => {
      expect(PressureDimension.hectopascals.symbol).toEqual("hPa");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PressureDimension.hectopascals.converter).toEqual(
        new LinearUnitConverter(100)
      );
    });
  });
  describe(".inchesOfMercury", () => {
    it('should have "inHg" as its symbol.', () => {
      expect(PressureDimension.inchesOfMercury.symbol).toEqual("inHg");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PressureDimension.inchesOfMercury.converter).toEqual(
        new LinearUnitConverter(3386.39)
      );
    });
  });
  describe(".bars", () => {
    it('should have "bar" as its symbol.', () => {
      expect(PressureDimension.bars.symbol).toEqual("bar");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PressureDimension.bars.converter).toEqual(
        new LinearUnitConverter(100000)
      );
    });
  });
  describe(".millibars", () => {
    it('should have "mbar" as its symbol.', () => {
      expect(PressureDimension.millibars.symbol).toEqual("mbar");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PressureDimension.millibars.converter).toEqual(
        new LinearUnitConverter(100)
      );
    });
  });
  describe(".millimetersOfMercury", () => {
    it('should have "mmHg" as its symbol.', () => {
      expect(PressureDimension.millimetersOfMercury.symbol).toEqual("mmHg");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PressureDimension.millimetersOfMercury.converter).toEqual(
        new LinearUnitConverter(133.322)
      );
    });
  });
  describe(".poundsForcePerSquareInch", () => {
    it('should have "psi" as its symbol.', () => {
      expect(PressureDimension.poundsForcePerSquareInch.symbol).toEqual("psi");
    });

    it("should have its unit conversion set properly.", () => {
      expect(PressureDimension.poundsForcePerSquareInch.converter).toEqual(
        new LinearUnitConverter(6894.76)
      );
    });
  });
});
