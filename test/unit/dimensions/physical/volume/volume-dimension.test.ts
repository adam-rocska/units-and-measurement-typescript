import {VolumeDimension} from "!src/dimensions/physical/volume/volume-dimension";
import {LinearUnitConverter} from "!src/unit-converters/linear-unit-converter";

describe("VolumeDimension", () => {
  describe(".megaliters", () => {
    it('should have "ML" as its symbol.', () => {
      expect(VolumeDimension.megaliters.symbol).toEqual("ML");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.megaliters.converter).toEqual(
        new LinearUnitConverter(1000000)
      );
    });
  });
  describe(".kiloliters", () => {
    it('should have "kL" as its symbol.', () => {
      expect(VolumeDimension.kiloliters.symbol).toEqual("kL");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.kiloliters.converter).toEqual(
        new LinearUnitConverter(1000)
      );
    });
  });
  describe(".liters", () => {
    it('should have "L" as its symbol.', () => {
      expect(VolumeDimension.liters.symbol).toEqual("L");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.liters.converter).toEqual(
        new LinearUnitConverter(1)
      );
    });
  });
  describe(".deciliters", () => {
    it('should have "dL" as its symbol.', () => {
      expect(VolumeDimension.deciliters.symbol).toEqual("dL");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.deciliters.converter).toEqual(
        new LinearUnitConverter(0.1)
      );
    });
  });
  describe(".centiliters", () => {
    it('should have "cL" as its symbol.', () => {
      expect(VolumeDimension.centiliters.symbol).toEqual("cL");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.centiliters.converter).toEqual(
        new LinearUnitConverter(0.01)
      );
    });
  });
  describe(".milliliters", () => {
    it('should have "mL" as its symbol.', () => {
      expect(VolumeDimension.milliliters.symbol).toEqual("mL");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.milliliters.converter).toEqual(
        new LinearUnitConverter(0.001)
      );
    });
  });
  describe(".cubicKilometers", () => {
    it('should have "km³" as its symbol.', () => {
      expect(VolumeDimension.cubicKilometers.symbol).toEqual("km³");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.cubicKilometers.converter).toEqual(
        new LinearUnitConverter(1000000000000)
      );
    });
  });
  describe(".cubicMeters", () => {
    it('should have "m³" as its symbol.', () => {
      expect(VolumeDimension.cubicMeters.symbol).toEqual("m³");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.cubicMeters.converter).toEqual(
        new LinearUnitConverter(1000)
      );
    });
  });
  describe(".cubicDecimeters", () => {
    it('should have "dm³" as its symbol.', () => {
      expect(VolumeDimension.cubicDecimeters.symbol).toEqual("dm³");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.cubicDecimeters.converter).toEqual(
        new LinearUnitConverter(1)
      );
    });
  });
  describe(".cubicMillimeters", () => {
    it('should have "mm³" as its symbol.', () => {
      expect(VolumeDimension.cubicMillimeters.symbol).toEqual("mm³");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.cubicMillimeters.converter).toEqual(
        new LinearUnitConverter(0.000001)
      );
    });
  });
  describe(".cubicInches", () => {
    it('should have "in³" as its symbol.', () => {
      expect(VolumeDimension.cubicInches.symbol).toEqual("in³");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.cubicInches.converter).toEqual(
        new LinearUnitConverter(0.0163871)
      );
    });
  });
  describe(".cubicFeet", () => {
    it('should have "ft³" as its symbol.', () => {
      expect(VolumeDimension.cubicFeet.symbol).toEqual("ft³");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.cubicFeet.converter).toEqual(
        new LinearUnitConverter(28.3168)
      );
    });
  });
  describe(".cubicYards", () => {
    it('should have "yd³" as its symbol.', () => {
      expect(VolumeDimension.cubicYards.symbol).toEqual("yd³");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.cubicYards.converter).toEqual(
        new LinearUnitConverter(764.555)
      );
    });
  });
  describe(".cubicMiles", () => {
    it('should have "mi³" as its symbol.', () => {
      expect(VolumeDimension.cubicMiles.symbol).toEqual("mi³");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.cubicMiles.converter).toEqual(
        new LinearUnitConverter(4168000000000)
      );
    });
  });
  describe(".acreFeet", () => {
    it('should have "af" as its symbol.', () => {
      expect(VolumeDimension.acreFeet.symbol).toEqual("af");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.acreFeet.converter).toEqual(
        new LinearUnitConverter(1233000)
      );
    });
  });
  describe(".bushels", () => {
    it('should have "bsh" as its symbol.', () => {
      expect(VolumeDimension.bushels.symbol).toEqual("bsh");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.bushels.converter).toEqual(
        new LinearUnitConverter(35.2391)
      );
    });
  });
  describe(".teaspoons", () => {
    it('should have "tsp" as its symbol.', () => {
      expect(VolumeDimension.teaspoons.symbol).toEqual("tsp");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.teaspoons.converter).toEqual(
        new LinearUnitConverter(0.00492892)
      );
    });
  });
  describe(".tablespoons", () => {
    it('should have "tbsp" as its symbol.', () => {
      expect(VolumeDimension.tablespoons.symbol).toEqual("tbsp");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.tablespoons.converter).toEqual(
        new LinearUnitConverter(0.0147868)
      );
    });
  });
  describe(".fluidOunces", () => {
    it('should have "fl oz" as its symbol.', () => {
      expect(VolumeDimension.fluidOunces.symbol).toEqual("fl oz");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.fluidOunces.converter).toEqual(
        new LinearUnitConverter(0.0295735)
      );
    });
  });
  describe(".cups", () => {
    it('should have "cup" as its symbol.', () => {
      expect(VolumeDimension.cups.symbol).toEqual("cup");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.cups.converter).toEqual(
        new LinearUnitConverter(0.24)
      );
    });
  });
  describe(".pints", () => {
    it('should have "pt" as its symbol.', () => {
      expect(VolumeDimension.pints.symbol).toEqual("pt");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.pints.converter).toEqual(
        new LinearUnitConverter(0.473176)
      );
    });
  });
  describe(".quarts", () => {
    it('should have "qt" as its symbol.', () => {
      expect(VolumeDimension.quarts.symbol).toEqual("qt");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.quarts.converter).toEqual(
        new LinearUnitConverter(0.946353)
      );
    });
  });
  describe(".gallons", () => {
    it('should have "gal" as its symbol.', () => {
      expect(VolumeDimension.gallons.symbol).toEqual("gal");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.gallons.converter).toEqual(
        new LinearUnitConverter(3.78541)
      );
    });
  });
  describe(".imperialTeaspoons", () => {
    it('should have "tsp" as its symbol.', () => {
      expect(VolumeDimension.imperialTeaspoons.symbol).toEqual("tsp");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.imperialTeaspoons.converter).toEqual(
        new LinearUnitConverter(0.00591939)
      );
    });
  });
  describe(".imperialTablespoons", () => {
    it('should have "tbsp" as its symbol.', () => {
      expect(VolumeDimension.imperialTablespoons.symbol).toEqual("tbsp");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.imperialTablespoons.converter).toEqual(
        new LinearUnitConverter(0.0177582)
      );
    });
  });
  describe(".imperialFluidOunces", () => {
    it('should have "fl oz" as its symbol.', () => {
      expect(VolumeDimension.imperialFluidOunces.symbol).toEqual("fl oz");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.imperialFluidOunces.converter).toEqual(
        new LinearUnitConverter(0.0284131)
      );
    });
  });
  describe(".imperialPints", () => {
    it('should have "pt" as its symbol.', () => {
      expect(VolumeDimension.imperialPints.symbol).toEqual("pt");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.imperialPints.converter).toEqual(
        new LinearUnitConverter(0.568261)
      );
    });
  });
  describe(".imperialQuarts", () => {
    it('should have "qt" as its symbol.', () => {
      expect(VolumeDimension.imperialQuarts.symbol).toEqual("qt");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.imperialQuarts.converter).toEqual(
        new LinearUnitConverter(1.13652)
      );
    });
  });
  describe(".imperialGallons", () => {
    it('should have "gal" as its symbol.', () => {
      expect(VolumeDimension.imperialGallons.symbol).toEqual("gal");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.imperialGallons.converter).toEqual(
        new LinearUnitConverter(4.54609)
      );
    });
  });
  describe(".metricCups", () => {
    it('should have "metric cup" as its symbol.', () => {
      expect(VolumeDimension.metricCups.symbol).toEqual("metric cup");
    });

    it("should have its unit conversion set properly.", () => {
      expect(VolumeDimension.metricCups.converter).toEqual(
        new LinearUnitConverter(0.25)
      );
    });
  });
});
