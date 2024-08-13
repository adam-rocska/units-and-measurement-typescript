import {AccelerationDimension} from "!src/dimensions/time-and-motion/acceleration/acceleration-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("AccelerationDimension", () => {
  describe(".metersPerSecondSquared", () => {
    it('should have "m/s²" as its symbol.', () => {
      expect(AccelerationDimension.metersPerSecondSquared.symbol).toEqual("m/s²");
    });

    it("should have its unit conversion set properly.", () => {
      expect(AccelerationDimension.metersPerSecondSquared.converter).toEqual(
        new LinearUnitConverter(1.0)
      );
    });
  });
  describe(".gravity", () => {
    it('should have "g" as its symbol.', () => {
      expect(AccelerationDimension.gravity.symbol).toEqual("g");
    });

    it("should have its unit conversion set properly.", () => {
      expect(AccelerationDimension.gravity.converter).toEqual(
        new LinearUnitConverter(9.81)
      );
    });
  });
});
