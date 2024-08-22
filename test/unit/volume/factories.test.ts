import {volume} from "!src/volume/factories";
import {megaliters, kiloliters, liters, deciliters, centiliters, milliliters, cubicKilometers, cubicMeters, cubicDecimeters, cubicMillimeters, cubicInches, cubicFeet, cubicYards, cubicMiles, acreFeet, bushels, teaspoons, tablespoons, fluidOunces, cups, pints, quarts, gallons, imperialTeaspoons, imperialTablespoons, imperialFluidOunces, imperialPints, imperialQuarts, imperialGallons, metricCups} from "!src/volume/factories";
import {linearConversion} from "!src/conversion";

describe("!src/volume/factories aliasing", () => {
  describe('volume["ML"]', () => {
    it('should be aliased by "megaliters".', () => {
      expect(megaliters).toBe(volume["ML"]);
    });
  });


  describe('volume["kL"]', () => {
    it('should be aliased by "kiloliters".', () => {
      expect(kiloliters).toBe(volume["kL"]);
    });
  });


  describe('volume["L"]', () => {
    it('should be aliased by "liters".', () => {
      expect(liters).toBe(volume["L"]);
    });
  });


  describe('volume["dL"]', () => {
    it('should be aliased by "deciliters".', () => {
      expect(deciliters).toBe(volume["dL"]);
    });
  });


  describe('volume["cL"]', () => {
    it('should be aliased by "centiliters".', () => {
      expect(centiliters).toBe(volume["cL"]);
    });
  });


  describe('volume["mL"]', () => {
    it('should be aliased by "milliliters".', () => {
      expect(milliliters).toBe(volume["mL"]);
    });
  });


  describe('volume["km³"]', () => {
    it('should be aliased by "cubicKilometers".', () => {
      expect(cubicKilometers).toBe(volume["km³"]);
    });
  });


  describe('volume["m³"]', () => {
    it('should be aliased by "cubicMeters".', () => {
      expect(cubicMeters).toBe(volume["m³"]);
    });
  });


  describe('volume["dm³"]', () => {
    it('should be aliased by "cubicDecimeters".', () => {
      expect(cubicDecimeters).toBe(volume["dm³"]);
    });
  });


  describe('volume["mm³"]', () => {
    it('should be aliased by "cubicMillimeters".', () => {
      expect(cubicMillimeters).toBe(volume["mm³"]);
    });
  });


  describe('volume["in³"]', () => {
    it('should be aliased by "cubicInches".', () => {
      expect(cubicInches).toBe(volume["in³"]);
    });
  });


  describe('volume["ft³"]', () => {
    it('should be aliased by "cubicFeet".', () => {
      expect(cubicFeet).toBe(volume["ft³"]);
    });
  });


  describe('volume["yd³"]', () => {
    it('should be aliased by "cubicYards".', () => {
      expect(cubicYards).toBe(volume["yd³"]);
    });
  });


  describe('volume["mi³"]', () => {
    it('should be aliased by "cubicMiles".', () => {
      expect(cubicMiles).toBe(volume["mi³"]);
    });
  });


  describe('volume["af"]', () => {
    it('should be aliased by "acreFeet".', () => {
      expect(acreFeet).toBe(volume["af"]);
    });
  });


  describe('volume["bsh"]', () => {
    it('should be aliased by "bushels".', () => {
      expect(bushels).toBe(volume["bsh"]);
    });
  });


  describe('volume["tsp"]', () => {
    it('should be aliased by "teaspoons".', () => {
      expect(teaspoons).toBe(volume["tsp"]);
    });
  });


  describe('volume["tbsp"]', () => {
    it('should be aliased by "tablespoons".', () => {
      expect(tablespoons).toBe(volume["tbsp"]);
    });
  });


  describe('volume["fl oz"]', () => {
    it('should be aliased by "fluidOunces".', () => {
      expect(fluidOunces).toBe(volume["fl oz"]);
    });
  });


  describe('volume["cup"]', () => {
    it('should be aliased by "cups".', () => {
      expect(cups).toBe(volume["cup"]);
    });
  });


  describe('volume["pt"]', () => {
    it('should be aliased by "pints".', () => {
      expect(pints).toBe(volume["pt"]);
    });
  });


  describe('volume["qt"]', () => {
    it('should be aliased by "quarts".', () => {
      expect(quarts).toBe(volume["qt"]);
    });
  });


  describe('volume["gal"]', () => {
    it('should be aliased by "gallons".', () => {
      expect(gallons).toBe(volume["gal"]);
    });
  });


  describe('volume["imperial tsp"]', () => {
    it('should be aliased by "imperialTeaspoons".', () => {
      expect(imperialTeaspoons).toBe(volume["imperial tsp"]);
    });
  });


  describe('volume["imperial tbsp"]', () => {
    it('should be aliased by "imperialTablespoons".', () => {
      expect(imperialTablespoons).toBe(volume["imperial tbsp"]);
    });
  });


  describe('volume["imperial fl oz"]', () => {
    it('should be aliased by "imperialFluidOunces".', () => {
      expect(imperialFluidOunces).toBe(volume["imperial fl oz"]);
    });
  });


  describe('volume["imperial pt"]', () => {
    it('should be aliased by "imperialPints".', () => {
      expect(imperialPints).toBe(volume["imperial pt"]);
    });
  });


  describe('volume["imperial qt"]', () => {
    it('should be aliased by "imperialQuarts".', () => {
      expect(imperialQuarts).toBe(volume["imperial qt"]);
    });
  });


  describe('volume["imperial gal"]', () => {
    it('should be aliased by "imperialGallons".', () => {
      expect(imperialGallons).toBe(volume["imperial gal"]);
    });
  });


  describe('volume["metric cup"]', () => {
    it('should be aliased by "metricCups".', () => {
      expect(metricCups).toBe(volume["metric cup"]);
    });
  });

});

describe("volume", () => {
});
