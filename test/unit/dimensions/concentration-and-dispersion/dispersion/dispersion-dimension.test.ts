import {DispersionDimension} from "!src/dimensions/concentration-and-dispersion/dispersion/dispersion-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("DispersionDimension", () => {
  describe(".partsPerMillion", () => {
    it('should have "ppm" as its symbol.', () => {
      expect(DispersionDimension.partsPerMillion.symbol).toEqual("ppm");
    });

    it("should have its unit conversion set properly.", () => {
      expect(DispersionDimension.partsPerMillion.converter).toEqual(
        new LinearUnitConverter(1)
      );
    });
  });
  describe(".partsPerBillion", () => {
    it('should have "ppb" as its symbol.', () => {
      expect(DispersionDimension.partsPerBillion.symbol).toEqual("ppb");
    });

    it("should have its unit conversion set properly.", () => {
      expect(DispersionDimension.partsPerBillion.converter).toEqual(
        new LinearUnitConverter(1e-3)
      );
    });
  });
  describe(".partsPerTrillion", () => {
    it('should have "ppt" as its symbol.', () => {
      expect(DispersionDimension.partsPerTrillion.symbol).toEqual("ppt");
    });

    it("should have its unit conversion set properly.", () => {
      expect(DispersionDimension.partsPerTrillion.converter).toEqual(
        new LinearUnitConverter(1e-6)
      );
    });
  });
});
