import {DurationDimension} from "!src/dimensions/time-and-motion/duration/duration-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("DurationDimension", () => {
  describe(".seconds", () => {
    it('should have "sec" as its symbol.', () => {
      expect(DurationDimension.seconds.symbol).toEqual("sec");
    });

    it("should have its unit conversion set properly.", () => {
      expect(DurationDimension.seconds.converter).toEqual(
        new LinearUnitConverter(1)
      );
    });
  });
  describe(".minutes", () => {
    it('should have "min" as its symbol.', () => {
      expect(DurationDimension.minutes.symbol).toEqual("min");
    });

    it("should have its unit conversion set properly.", () => {
      expect(DurationDimension.minutes.converter).toEqual(
        new LinearUnitConverter(60)
      );
    });
  });
  describe(".hours", () => {
    it('should have "hr" as its symbol.', () => {
      expect(DurationDimension.hours.symbol).toEqual("hr");
    });

    it("should have its unit conversion set properly.", () => {
      expect(DurationDimension.hours.converter).toEqual(
        new LinearUnitConverter(3600)
      );
    });
  });
});
