import {LengthDimension} from "!src/dimensions/physical/length/length-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("LengthDimension", () => {
  describe(".megameters", () => {
    it('should have "Mm" as its symbol.', () => {
      expect(LengthDimension.megameters.symbol).toEqual("Mm");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.megameters.converter).toEqual(
        new LinearUnitConverter(1000000.0)
      );
    });
  });
  describe(".kilometers", () => {
    it('should have "kM" as its symbol.', () => {
      expect(LengthDimension.kilometers.symbol).toEqual("kM");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.kilometers.converter).toEqual(
        new LinearUnitConverter(1000.0)
      );
    });
  });
  describe(".hectometers", () => {
    it('should have "hm" as its symbol.', () => {
      expect(LengthDimension.hectometers.symbol).toEqual("hm");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.hectometers.converter).toEqual(
        new LinearUnitConverter(100.0)
      );
    });
  });
  describe(".decameters", () => {
    it('should have "dam" as its symbol.', () => {
      expect(LengthDimension.decameters.symbol).toEqual("dam");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.decameters.converter).toEqual(
        new LinearUnitConverter(10.0)
      );
    });
  });
  describe(".meters", () => {
    it('should have "m" as its symbol.', () => {
      expect(LengthDimension.meters.symbol).toEqual("m");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.meters.converter).toEqual(
        new LinearUnitConverter(1.0)
      );
    });
  });
  describe(".decimeters", () => {
    it('should have "dm" as its symbol.', () => {
      expect(LengthDimension.decimeters.symbol).toEqual("dm");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.decimeters.converter).toEqual(
        new LinearUnitConverter(0.1)
      );
    });
  });
  describe(".centimeters", () => {
    it('should have "cm" as its symbol.', () => {
      expect(LengthDimension.centimeters.symbol).toEqual("cm");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.centimeters.converter).toEqual(
        new LinearUnitConverter(0.01)
      );
    });
  });
  describe(".millimeters", () => {
    it('should have "mm" as its symbol.', () => {
      expect(LengthDimension.millimeters.symbol).toEqual("mm");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.millimeters.converter).toEqual(
        new LinearUnitConverter(0.001)
      );
    });
  });
  describe(".micrometers", () => {
    it('should have "µm" as its symbol.', () => {
      expect(LengthDimension.micrometers.symbol).toEqual("µm");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.micrometers.converter).toEqual(
        new LinearUnitConverter(0.000001)
      );
    });
  });
  describe(".nanometers", () => {
    it('should have "nm" as its symbol.', () => {
      expect(LengthDimension.nanometers.symbol).toEqual("nm");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.nanometers.converter).toEqual(
        new LinearUnitConverter(1e-9)
      );
    });
  });
  describe(".picometers", () => {
    it('should have "pm" as its symbol.', () => {
      expect(LengthDimension.picometers.symbol).toEqual("pm");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.picometers.converter).toEqual(
        new LinearUnitConverter(1e-12)
      );
    });
  });
  describe(".twips", () => {
    it('should have "tw" as its symbol.', () => {
      expect(LengthDimension.twips.symbol).toEqual("tw");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.twips.converter).toEqual(
        new LinearUnitConverter(127 / 7200 / 1000)
      );
    });
  });
  describe(".points", () => {
    it('should have "pt" as its symbol.', () => {
      expect(LengthDimension.points.symbol).toEqual("pt");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.points.converter).toEqual(
        new LinearUnitConverter(127 / 360 / 1000)
      );
    });
  });
  describe(".picas", () => {
    it('should have "pc" as its symbol.', () => {
      expect(LengthDimension.picas.symbol).toEqual("pc");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.picas.converter).toEqual(
        new LinearUnitConverter(127 / 30 / 1000)
      );
    });
  });
  describe(".inches", () => {
    it('should have "in" as its symbol.', () => {
      expect(LengthDimension.inches.symbol).toEqual("in");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.inches.converter).toEqual(
        new LinearUnitConverter(25.4 / 1000)
      );
    });
  });
  describe(".feet", () => {
    it('should have "ft" as its symbol.', () => {
      expect(LengthDimension.feet.symbol).toEqual("ft");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.feet.converter).toEqual(
        new LinearUnitConverter(0.3048)
      );
    });
  });
  describe(".yards", () => {
    it('should have "yd" as its symbol.', () => {
      expect(LengthDimension.yards.symbol).toEqual("yd");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.yards.converter).toEqual(
        new LinearUnitConverter(0.9144)
      );
    });
  });
  describe(".miles", () => {
    it('should have "mi" as its symbol.', () => {
      expect(LengthDimension.miles.symbol).toEqual("mi");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.miles.converter).toEqual(
        new LinearUnitConverter(1609.34)
      );
    });
  });
  describe(".scandinavianMiles", () => {
    it('should have "smi" as its symbol.', () => {
      expect(LengthDimension.scandinavianMiles.symbol).toEqual("smi");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.scandinavianMiles.converter).toEqual(
        new LinearUnitConverter(10000)
      );
    });
  });
  describe(".lightyears", () => {
    it('should have "ly" as its symbol.', () => {
      expect(LengthDimension.lightyears.symbol).toEqual("ly");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.lightyears.converter).toEqual(
        new LinearUnitConverter(9.461e+15)
      );
    });
  });
  describe(".nauticalMiles", () => {
    it('should have "NM" as its symbol.', () => {
      expect(LengthDimension.nauticalMiles.symbol).toEqual("NM");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.nauticalMiles.converter).toEqual(
        new LinearUnitConverter(1852)
      );
    });
  });
  describe(".fathoms", () => {
    it('should have "ftm" as its symbol.', () => {
      expect(LengthDimension.fathoms.symbol).toEqual("ftm");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.fathoms.converter).toEqual(
        new LinearUnitConverter(1.8288)
      );
    });
  });
  describe(".furlongs", () => {
    it('should have "fur" as its symbol.', () => {
      expect(LengthDimension.furlongs.symbol).toEqual("fur");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.furlongs.converter).toEqual(
        new LinearUnitConverter(201.168)
      );
    });
  });
  describe(".astronomicalUnits", () => {
    it('should have "ua" as its symbol.', () => {
      expect(LengthDimension.astronomicalUnits.symbol).toEqual("ua");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.astronomicalUnits.converter).toEqual(
        new LinearUnitConverter(1.496e+11)
      );
    });
  });
  describe(".parsecs", () => {
    it('should have "pc" as its symbol.', () => {
      expect(LengthDimension.parsecs.symbol).toEqual("pc");
    });

    it("should have its unit conversion set properly.", () => {
      expect(LengthDimension.parsecs.converter).toEqual(
        new LinearUnitConverter(3.086e+16)
      );
    });
  });
});
