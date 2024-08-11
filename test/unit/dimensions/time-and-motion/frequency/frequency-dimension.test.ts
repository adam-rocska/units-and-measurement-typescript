import {FrequencyDimension} from "!src/dimensions/time-and-motion/frequency/frequency-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("FrequencyDimension", () => {
  describe(".terahertz", () => {
    it('should have "THz" as its symbol.', () => {
      expect(FrequencyDimension.terahertz.symbol).toEqual("THz");
    });

    it("should have its unit conversion set properly.", () => {
      expect(FrequencyDimension.terahertz.converter).toEqual(
        new LinearUnitConverter(1000000000000)
      );
    });
  });
  describe(".gigahertz", () => {
    it('should have "GHz" as its symbol.', () => {
      expect(FrequencyDimension.gigahertz.symbol).toEqual("GHz");
    });

    it("should have its unit conversion set properly.", () => {
      expect(FrequencyDimension.gigahertz.converter).toEqual(
        new LinearUnitConverter(1000000000)
      );
    });
  });
  describe(".megahertz", () => {
    it('should have "MHz" as its symbol.', () => {
      expect(FrequencyDimension.megahertz.symbol).toEqual("MHz");
    });

    it("should have its unit conversion set properly.", () => {
      expect(FrequencyDimension.megahertz.converter).toEqual(
        new LinearUnitConverter(1000000)
      );
    });
  });
  describe(".kilohertz", () => {
    it('should have "kHz" as its symbol.', () => {
      expect(FrequencyDimension.kilohertz.symbol).toEqual("kHz");
    });

    it("should have its unit conversion set properly.", () => {
      expect(FrequencyDimension.kilohertz.converter).toEqual(
        new LinearUnitConverter(1000)
      );
    });
  });
  describe(".hertz", () => {
    it('should have "Hz" as its symbol.', () => {
      expect(FrequencyDimension.hertz.symbol).toEqual("Hz");
    });

    it("should have its unit conversion set properly.", () => {
      expect(FrequencyDimension.hertz.converter).toEqual(
        new LinearUnitConverter(1)
      );
    });
  });
  describe(".millihertz", () => {
    it('should have "mHz" as its symbol.', () => {
      expect(FrequencyDimension.millihertz.symbol).toEqual("mHz");
    });

    it("should have its unit conversion set properly.", () => {
      expect(FrequencyDimension.millihertz.converter).toEqual(
        new LinearUnitConverter(0.001)
      );
    });
  });
  describe(".microhertz", () => {
    it('should have "µHz" as its symbol.', () => {
      expect(FrequencyDimension.microhertz.symbol).toEqual("µHz");
    });

    it("should have its unit conversion set properly.", () => {
      expect(FrequencyDimension.microhertz.converter).toEqual(
        new LinearUnitConverter(0.000001)
      );
    });
  });
  describe(".nanohertz", () => {
    it('should have "nHz" as its symbol.', () => {
      expect(FrequencyDimension.nanohertz.symbol).toEqual("nHz");
    });

    it("should have its unit conversion set properly.", () => {
      expect(FrequencyDimension.nanohertz.converter).toEqual(
        new LinearUnitConverter(1e-9)
      );
    });
  });
});
