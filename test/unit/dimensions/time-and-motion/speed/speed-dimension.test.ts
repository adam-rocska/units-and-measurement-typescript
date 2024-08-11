import {SpeedDimension} from "!src/dimensions/time-and-motion/speed/speed-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("SpeedDimension", () => {
  describe(".metersPerSecond", () => {
    it('should have "m/s" as its symbol.', () => {
      expect(SpeedDimension.metersPerSecond.symbol).toEqual("m/s");
    });

    it("should have its unit conversion set properly.", () => {
      expect(SpeedDimension.metersPerSecond.converter).toEqual(
        new LinearUnitConverter(1)
      );
    });
  });
  describe(".kilometersPerHour", () => {
    it('should have "km/h" as its symbol.', () => {
      expect(SpeedDimension.kilometersPerHour.symbol).toEqual("km/h");
    });

    it("should have its unit conversion set properly.", () => {
      expect(SpeedDimension.kilometersPerHour.converter).toEqual(
        new LinearUnitConverter(0.277778)
      );
    });
  });
  describe(".milesPerHour", () => {
    it('should have "mph" as its symbol.', () => {
      expect(SpeedDimension.milesPerHour.symbol).toEqual("mph");
    });

    it("should have its unit conversion set properly.", () => {
      expect(SpeedDimension.milesPerHour.converter).toEqual(
        new LinearUnitConverter(0.44704)
      );
    });
  });
  describe(".knots", () => {
    it('should have "kn" as its symbol.', () => {
      expect(SpeedDimension.knots.symbol).toEqual("kn");
    });

    it("should have its unit conversion set properly.", () => {
      expect(SpeedDimension.knots.converter).toEqual(
        new LinearUnitConverter(0.514444)
      );
    });
  });
});
