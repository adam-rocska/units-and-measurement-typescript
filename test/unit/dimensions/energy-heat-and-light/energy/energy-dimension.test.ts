import {EnergyDimension} from "!src/dimensions/energy-heat-and-light/energy/energy-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("EnergyDimension", () => {
  describe(".kilojoules", () => {
    it('should have "kJ" as its symbol.', () => {
      expect(EnergyDimension.kilojoules.symbol).toEqual("kJ");
    });

    it("should have its unit conversion set properly.", () => {
      expect(EnergyDimension.kilojoules.converter).toEqual(
        new LinearUnitConverter(1000)
      );
    });
  });
  describe(".joules", () => {
    it('should have "J" as its symbol.', () => {
      expect(EnergyDimension.joules.symbol).toEqual("J");
    });

    it("should have its unit conversion set properly.", () => {
      expect(EnergyDimension.joules.converter).toEqual(
        new LinearUnitConverter(1)
      );
    });
  });
  describe(".kilocalories", () => {
    it('should have "kCal" as its symbol.', () => {
      expect(EnergyDimension.kilocalories.symbol).toEqual("kCal");
    });

    it("should have its unit conversion set properly.", () => {
      expect(EnergyDimension.kilocalories.converter).toEqual(
        new LinearUnitConverter(4184)
      );
    });
  });
  describe(".calories", () => {
    it('should have "cal" as its symbol.', () => {
      expect(EnergyDimension.calories.symbol).toEqual("cal");
    });

    it("should have its unit conversion set properly.", () => {
      expect(EnergyDimension.calories.converter).toEqual(
        new LinearUnitConverter(4.184)
      );
    });
  });
  describe(".kilowattHours", () => {
    it('should have "kWh" as its symbol.', () => {
      expect(EnergyDimension.kilowattHours.symbol).toEqual("kWh");
    });

    it("should have its unit conversion set properly.", () => {
      expect(EnergyDimension.kilowattHours.converter).toEqual(
        new LinearUnitConverter(3600000)
      );
    });
  });
  describe(".wattHours", () => {
    it('should have "Wh" as its symbol.', () => {
      expect(EnergyDimension.wattHours.symbol).toEqual("Wh");
    });

    it("should have its unit conversion set properly.", () => {
      expect(EnergyDimension.wattHours.converter).toEqual(
        new LinearUnitConverter(3600)
      );
    });
  });
  describe(".electronvolts", () => {
    it('should have "eV" as its symbol.', () => {
      expect(EnergyDimension.electronvolts.symbol).toEqual("eV");
    });

    it("should have its unit conversion set properly.", () => {
      expect(EnergyDimension.electronvolts.converter).toEqual(
        new LinearUnitConverter(1.60218e-19)
      );
    });
  });
});
