import {ElectricChargeDimension} from "!src/dimensions/electricity/electric-charge/electric-charge-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("ElectricChargeDimension", () => {
  describe(".coulombs", () => {
    it('should have "C" as its symbol.', () => {
      expect(ElectricChargeDimension.coulombs.symbol).toEqual("C");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricChargeDimension.coulombs.converter).toEqual(
        new LinearUnitConverter(1)
      );
    });
  });
  describe(".megaampereHours", () => {
    it('should have "MAh" as its symbol.', () => {
      expect(ElectricChargeDimension.megaampereHours.symbol).toEqual("MAh");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricChargeDimension.megaampereHours.converter).toEqual(
        new LinearUnitConverter(3600000000)
      );
    });
  });
  describe(".kiloampereHours", () => {
    it('should have "kAh" as its symbol.', () => {
      expect(ElectricChargeDimension.kiloampereHours.symbol).toEqual("kAh");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricChargeDimension.kiloampereHours.converter).toEqual(
        new LinearUnitConverter(3600000)
      );
    });
  });
  describe(".ampereHours", () => {
    it('should have "Ah" as its symbol.', () => {
      expect(ElectricChargeDimension.ampereHours.symbol).toEqual("Ah");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricChargeDimension.ampereHours.converter).toEqual(
        new LinearUnitConverter(3600)
      );
    });
  });
  describe(".milliampereHours", () => {
    it('should have "mAh" as its symbol.', () => {
      expect(ElectricChargeDimension.milliampereHours.symbol).toEqual("mAh");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricChargeDimension.milliampereHours.converter).toEqual(
        new LinearUnitConverter(3.6)
      );
    });
  });
  describe(".microampereHours", () => {
    it('should have "µAh" as its symbol.', () => {
      expect(ElectricChargeDimension.microampereHours.symbol).toEqual("µAh");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ElectricChargeDimension.microampereHours.converter).toEqual(
        new LinearUnitConverter(0.0036)
      );
    });
  });
});
