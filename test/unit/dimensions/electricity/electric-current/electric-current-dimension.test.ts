import {ElectricCurrentDimension} from "!src/dimensions/electricity/electric-current/electric-current-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("ElectricCurrentDimension", () => {
  describe(".megaamperes", () => {
    it('should have "MA" as its symbol.', () => {
      expect(ElectricCurrentDimension.megaamperes.symbol).toEqual("MA");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricCurrentDimension.megaamperes.converter).toEqual(
        new LinearUnitConverter(1000000.0)
      );
    });
  });
  describe(".kiloamperes", () => {
    it('should have "kA" as its symbol.', () => {
      expect(ElectricCurrentDimension.kiloamperes.symbol).toEqual("kA");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricCurrentDimension.kiloamperes.converter).toEqual(
        new LinearUnitConverter(1000.0)
      );
    });
  });
  describe(".amperes", () => {
    it('should have "A" as its symbol.', () => {
      expect(ElectricCurrentDimension.amperes.symbol).toEqual("A");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricCurrentDimension.amperes.converter).toEqual(
        new LinearUnitConverter(1.0)
      );
    });
  });
  describe(".milliamperes", () => {
    it('should have "mA" as its symbol.', () => {
      expect(ElectricCurrentDimension.milliamperes.symbol).toEqual("mA");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricCurrentDimension.milliamperes.converter).toEqual(
        new LinearUnitConverter(0.001)
      );
    });
  });
  describe(".microamperes", () => {
    it('should have "µA" as its symbol.', () => {
      expect(ElectricCurrentDimension.microamperes.symbol).toEqual("µA");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricCurrentDimension.microamperes.converter).toEqual(
        new LinearUnitConverter(0.000001)
      );
    });
  });
});
