import {TemperatureDimension} from "!src/dimensions/energy-heat-and-light/temperature/temperature-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("TemperatureDimension", () => {
  describe(".kelvin", () => {
    it('should have "K" as its symbol.', () => {
      expect(TemperatureDimension.kelvin.symbol).toEqual("K");
    });

    it("should have its unit conversion set properly.", () => {
      expect(TemperatureDimension.kelvin.converter).toEqual(
        new LinearUnitConverter(1,(0))
      );
    });
  });
  describe(".celsius", () => {
    it('should have "°C" as its symbol.', () => {
      expect(TemperatureDimension.celsius.symbol).toEqual("°C");
    });

    it("should have its unit conversion set properly.", () => {
      expect(TemperatureDimension.celsius.converter).toEqual(
        new LinearUnitConverter(1,(273.15))
      );
    });
  });
  describe(".fahrenheit", () => {
    it('should have "°F" as its symbol.', () => {
      expect(TemperatureDimension.fahrenheit.symbol).toEqual("°F");
    });

    it("should have its unit conversion set properly.", () => {
      expect(TemperatureDimension.fahrenheit.converter).toEqual(
        new LinearUnitConverter(0.55555555555556,(255.37222222222428))
      );
    });
  });
  describe(".rankine", () => {
    it('should have "°R" as its symbol.', () => {
      expect(TemperatureDimension.rankine.symbol).toEqual("°R");
    });

    it("should have its unit conversion set properly.", () => {
      expect(TemperatureDimension.rankine.converter).toEqual(
        new LinearUnitConverter(0.55555555555556,(0))
      );
    });
  });
});
