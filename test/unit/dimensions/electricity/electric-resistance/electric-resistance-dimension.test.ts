import {ElectricResistanceDimension} from "!src/dimensions/electricity/electric-resistance/electric-resistance-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("ElectricResistanceDimension", () => {
  describe(".megaohms", () => {
    it('should have "MΩ" as its symbol.', () => {
      expect(ElectricResistanceDimension.megaohms.symbol).toEqual("MΩ");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricResistanceDimension.megaohms.converter).toEqual(
        new LinearUnitConverter(1000000)
      );
    });
  });
  describe(".kiloohms", () => {
    it('should have "kΩ" as its symbol.', () => {
      expect(ElectricResistanceDimension.kiloohms.symbol).toEqual("kΩ");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricResistanceDimension.kiloohms.converter).toEqual(
        new LinearUnitConverter(1000)
      );
    });
  });
  describe(".ohms", () => {
    it('should have "Ω" as its symbol.', () => {
      expect(ElectricResistanceDimension.ohms.symbol).toEqual("Ω");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricResistanceDimension.ohms.converter).toEqual(
        new LinearUnitConverter(1)
      );
    });
  });
  describe(".milliohms", () => {
    it('should have "mΩ" as its symbol.', () => {
      expect(ElectricResistanceDimension.milliohms.symbol).toEqual("mΩ");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricResistanceDimension.milliohms.converter).toEqual(
        new LinearUnitConverter(0.001)
      );
    });
  });
  describe(".microohms", () => {
    it('should have "µΩ" as its symbol.', () => {
      expect(ElectricResistanceDimension.microohms.symbol).toEqual("µΩ");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricResistanceDimension.microohms.converter).toEqual(
        new LinearUnitConverter(0.000001)
      );
    });
  });
});
