import {ElectricPotentialDifferenceDimension} from "!src/dimensions/electricity/electric-potential-difference/electric-potential-difference-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("ElectricPotentialDifferenceDimension", () => {
  describe(".megavolts", () => {
    it('should have "MV" as its symbol.', () => {
      expect(ElectricPotentialDifferenceDimension.megavolts.symbol).toEqual("MV");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricPotentialDifferenceDimension.megavolts.converter).toEqual(
        new LinearUnitConverter(1000000.0)
      );
    });
  });
  describe(".kilovolts", () => {
    it('should have "kV" as its symbol.', () => {
      expect(ElectricPotentialDifferenceDimension.kilovolts.symbol).toEqual("kV");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricPotentialDifferenceDimension.kilovolts.converter).toEqual(
        new LinearUnitConverter(1000.0)
      );
    });
  });
  describe(".volts", () => {
    it('should have "V" as its symbol.', () => {
      expect(ElectricPotentialDifferenceDimension.volts.symbol).toEqual("V");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricPotentialDifferenceDimension.volts.converter).toEqual(
        new LinearUnitConverter(1.0)
      );
    });
  });
  describe(".millivolts", () => {
    it('should have "mV" as its symbol.', () => {
      expect(ElectricPotentialDifferenceDimension.millivolts.symbol).toEqual("mV");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricPotentialDifferenceDimension.millivolts.converter).toEqual(
        new LinearUnitConverter(0.001)
      );
    });
  });
  describe(".microvolts", () => {
    it('should have "µV" as its symbol.', () => {
      expect(ElectricPotentialDifferenceDimension.microvolts.symbol).toEqual("µV");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricPotentialDifferenceDimension.microvolts.converter).toEqual(
        new LinearUnitConverter(0.000001)
      );
    });
  });
});
