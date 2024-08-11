import {ConcentrationMassDimension} from "!src/dimensions/concentration-and-dispersion/concentration-mass/concentration-mass-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("ConcentrationMassDimension", () => {
  describe(".gramsPerLiter", () => {
    it('should have "g/L" as its symbol.', () => {
      expect(ConcentrationMassDimension.gramsPerLiter.symbol).toEqual("g/L");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ConcentrationMassDimension.gramsPerLiter.converter).toEqual(
        new LinearUnitConverter(1)
      );
    });
  });
  describe(".milligramsPerDeciliter", () => {
    it('should have "mg/dL" as its symbol.', () => {
      expect(ConcentrationMassDimension.milligramsPerDeciliter.symbol).toEqual("mg/dL");
    });

    it("should have its unit conversion set properly.", () => {
      expect(ConcentrationMassDimension.milligramsPerDeciliter.converter).toEqual(
        new LinearUnitConverter(0.01)
      );
    });
  });
});
