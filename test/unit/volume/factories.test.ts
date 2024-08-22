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
  describe('ML', () => {
    it.each([1, 10, 100])('should yield a ML measurement when given a number.', v => {
      expect(volume["ML"](v)).toEqual([v, "ML"]);
      expect(megaliters(v)).toEqual([v, "ML"]);
    });



    it.each([1, 10, 100])('should convert kL to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        megalitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ML"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('kL', () => {
    it.each([1, 10, 100])('should yield a kL measurement when given a number.', v => {
      expect(volume["kL"](v)).toEqual([v, "kL"]);
      expect(kiloliters(v)).toEqual([v, "kL"]);
    });

    it.each([1, 10, 100])('should convert ML to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert L to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        kilolitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kL"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('L', () => {
    it.each([1, 10, 100])('should yield a L measurement when given a number.', v => {
      expect(volume["L"](v)).toEqual([v, "L"]);
      expect(liters(v)).toEqual([v, "L"]);
    });

    it.each([1, 10, 100])('should convert ML to L.', v => {
      const litersConversion = linearConversion(1);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to L.', v => {
      const litersConversion = linearConversion(1);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert dL to L.', v => {
      const litersConversion = linearConversion(1);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to L.', v => {
      const litersConversion = linearConversion(1);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to L.', v => {
      const litersConversion = linearConversion(1);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to L.', v => {
      const litersConversion = linearConversion(1);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to L.', v => {
      const litersConversion = linearConversion(1);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to L.', v => {
      const litersConversion = linearConversion(1);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to L.', v => {
      const litersConversion = linearConversion(1);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to L.', v => {
      const litersConversion = linearConversion(1);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to L.', v => {
      const litersConversion = linearConversion(1);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to L.', v => {
      const litersConversion = linearConversion(1);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to L.', v => {
      const litersConversion = linearConversion(1);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to L.', v => {
      const litersConversion = linearConversion(1);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to L.', v => {
      const litersConversion = linearConversion(1);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to L.', v => {
      const litersConversion = linearConversion(1);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to L.', v => {
      const litersConversion = linearConversion(1);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to L.', v => {
      const litersConversion = linearConversion(1);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to L.', v => {
      const litersConversion = linearConversion(1);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to L.', v => {
      const litersConversion = linearConversion(1);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to L.', v => {
      const litersConversion = linearConversion(1);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to L.', v => {
      const litersConversion = linearConversion(1);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to L.', v => {
      const litersConversion = linearConversion(1);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to L.', v => {
      const litersConversion = linearConversion(1);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to L.', v => {
      const litersConversion = linearConversion(1);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to L.', v => {
      const litersConversion = linearConversion(1);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to L.', v => {
      const litersConversion = linearConversion(1);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to L.', v => {
      const litersConversion = linearConversion(1);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to L.', v => {
      const litersConversion = linearConversion(1);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        litersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "L"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('dL', () => {
    it.each([1, 10, 100])('should yield a dL measurement when given a number.', v => {
      expect(volume["dL"](v)).toEqual([v, "dL"]);
      expect(deciliters(v)).toEqual([v, "dL"]);
    });

    it.each([1, 10, 100])('should convert ML to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert cL to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        decilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dL"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('cL', () => {
    it.each([1, 10, 100])('should yield a cL measurement when given a number.', v => {
      expect(volume["cL"](v)).toEqual([v, "cL"]);
      expect(centiliters(v)).toEqual([v, "cL"]);
    });

    it.each([1, 10, 100])('should convert ML to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert mL to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        centilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cL"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mL', () => {
    it.each([1, 10, 100])('should yield a mL measurement when given a number.', v => {
      expect(volume["mL"](v)).toEqual([v, "mL"]);
      expect(milliliters(v)).toEqual([v, "mL"]);
    });

    it.each([1, 10, 100])('should convert ML to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert km³ to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        millilitersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mL"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('km³', () => {
    it.each([1, 10, 100])('should yield a km³ measurement when given a number.', v => {
      expect(volume["km³"](v)).toEqual([v, "km³"]);
      expect(cubicKilometers(v)).toEqual([v, "km³"]);
    });

    it.each([1, 10, 100])('should convert ML to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert m³ to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cubicKilometersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "km³"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });
  });


  describe('m³', () => {
    it.each([1, 10, 100])('should yield a m³ measurement when given a number.', v => {
      expect(volume["m³"](v)).toEqual([v, "m³"]);
      expect(cubicMeters(v)).toEqual([v, "m³"]);
    });

    it.each([1, 10, 100])('should convert ML to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert dm³ to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cubicMetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m³"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('dm³', () => {
    it.each([1, 10, 100])('should yield a dm³ measurement when given a number.', v => {
      expect(volume["dm³"](v)).toEqual([v, "dm³"]);
      expect(cubicDecimeters(v)).toEqual([v, "dm³"]);
    });

    it.each([1, 10, 100])('should convert ML to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert mm³ to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cubicDecimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mm³', () => {
    it.each([1, 10, 100])('should yield a mm³ measurement when given a number.', v => {
      expect(volume["mm³"](v)).toEqual([v, "mm³"]);
      expect(cubicMillimeters(v)).toEqual([v, "mm³"]);
    });

    it.each([1, 10, 100])('should convert ML to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert in³ to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cubicMillimetersConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('in³', () => {
    it.each([1, 10, 100])('should yield a in³ measurement when given a number.', v => {
      expect(volume["in³"](v)).toEqual([v, "in³"]);
      expect(cubicInches(v)).toEqual([v, "in³"]);
    });

    it.each([1, 10, 100])('should convert ML to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert ft³ to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cubicInchesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "in³"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });
  });


  describe('ft³', () => {
    it.each([1, 10, 100])('should yield a ft³ measurement when given a number.', v => {
      expect(volume["ft³"](v)).toEqual([v, "ft³"]);
      expect(cubicFeet(v)).toEqual([v, "ft³"]);
    });

    it.each([1, 10, 100])('should convert ML to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert yd³ to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cubicFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });
  });


  describe('yd³', () => {
    it.each([1, 10, 100])('should yield a yd³ measurement when given a number.', v => {
      expect(volume["yd³"](v)).toEqual([v, "yd³"]);
      expect(cubicYards(v)).toEqual([v, "yd³"]);
    });

    it.each([1, 10, 100])('should convert ML to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert mi³ to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cubicYardsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mi³', () => {
    it.each([1, 10, 100])('should yield a mi³ measurement when given a number.', v => {
      expect(volume["mi³"](v)).toEqual([v, "mi³"]);
      expect(cubicMiles(v)).toEqual([v, "mi³"]);
    });

    it.each([1, 10, 100])('should convert ML to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert af to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cubicMilesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });
  });


  describe('af', () => {
    it.each([1, 10, 100])('should yield a af measurement when given a number.', v => {
      expect(volume["af"](v)).toEqual([v, "af"]);
      expect(acreFeet(v)).toEqual([v, "af"]);
    });

    it.each([1, 10, 100])('should convert ML to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert bsh to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        acreFeetConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "af"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });
  });


  describe('bsh', () => {
    it.each([1, 10, 100])('should yield a bsh measurement when given a number.', v => {
      expect(volume["bsh"](v)).toEqual([v, "bsh"]);
      expect(bushels(v)).toEqual([v, "bsh"]);
    });

    it.each([1, 10, 100])('should convert ML to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert tsp to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        bushelsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });
  });


  describe('tsp', () => {
    it.each([1, 10, 100])('should yield a tsp measurement when given a number.', v => {
      expect(volume["tsp"](v)).toEqual([v, "tsp"]);
      expect(teaspoons(v)).toEqual([v, "tsp"]);
    });

    it.each([1, 10, 100])('should convert ML to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert tbsp to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        teaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });
  });


  describe('tbsp', () => {
    it.each([1, 10, 100])('should yield a tbsp measurement when given a number.', v => {
      expect(volume["tbsp"](v)).toEqual([v, "tbsp"]);
      expect(tablespoons(v)).toEqual([v, "tbsp"]);
    });

    it.each([1, 10, 100])('should convert ML to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert fl oz to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        tablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });
  });


  describe('fl oz', () => {
    it.each([1, 10, 100])('should yield a fl oz measurement when given a number.', v => {
      expect(volume["fl oz"](v)).toEqual([v, "fl oz"]);
      expect(fluidOunces(v)).toEqual([v, "fl oz"]);
    });

    it.each([1, 10, 100])('should convert ML to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert cup to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        fluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });
  });


  describe('cup', () => {
    it.each([1, 10, 100])('should yield a cup measurement when given a number.', v => {
      expect(volume["cup"](v)).toEqual([v, "cup"]);
      expect(cups(v)).toEqual([v, "cup"]);
    });

    it.each([1, 10, 100])('should convert ML to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert pt to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cup"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });
  });


  describe('pt', () => {
    it.each([1, 10, 100])('should yield a pt measurement when given a number.', v => {
      expect(volume["pt"](v)).toEqual([v, "pt"]);
      expect(pints(v)).toEqual([v, "pt"]);
    });

    it.each([1, 10, 100])('should convert ML to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert qt to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        pintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pt"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });
  });


  describe('qt', () => {
    it.each([1, 10, 100])('should yield a qt measurement when given a number.', v => {
      expect(volume["qt"](v)).toEqual([v, "qt"]);
      expect(quarts(v)).toEqual([v, "qt"]);
    });

    it.each([1, 10, 100])('should convert ML to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert gal to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        quartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "qt"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });
  });


  describe('gal', () => {
    it.each([1, 10, 100])('should yield a gal measurement when given a number.', v => {
      expect(volume["gal"](v)).toEqual([v, "gal"]);
      expect(gallons(v)).toEqual([v, "gal"]);
    });

    it.each([1, 10, 100])('should convert ML to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert imperial tsp to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        gallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "gal"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });
  });


  describe('imperial tsp', () => {
    it.each([1, 10, 100])('should yield a imperial tsp measurement when given a number.', v => {
      expect(volume["imperial tsp"](v)).toEqual([v, "imperial tsp"]);
      expect(imperialTeaspoons(v)).toEqual([v, "imperial tsp"]);
    });

    it.each([1, 10, 100])('should convert ML to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert imperial tbsp to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        imperialTeaspoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });
  });


  describe('imperial tbsp', () => {
    it.each([1, 10, 100])('should yield a imperial tbsp measurement when given a number.', v => {
      expect(volume["imperial tbsp"](v)).toEqual([v, "imperial tbsp"]);
      expect(imperialTablespoons(v)).toEqual([v, "imperial tbsp"]);
    });

    it.each([1, 10, 100])('should convert ML to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert imperial fl oz to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        imperialTablespoonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });
  });


  describe('imperial fl oz', () => {
    it.each([1, 10, 100])('should yield a imperial fl oz measurement when given a number.', v => {
      expect(volume["imperial fl oz"](v)).toEqual([v, "imperial fl oz"]);
      expect(imperialFluidOunces(v)).toEqual([v, "imperial fl oz"]);
    });

    it.each([1, 10, 100])('should convert ML to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert imperial pt to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        imperialFluidOuncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });
  });


  describe('imperial pt', () => {
    it.each([1, 10, 100])('should yield a imperial pt measurement when given a number.', v => {
      expect(volume["imperial pt"](v)).toEqual([v, "imperial pt"]);
      expect(imperialPints(v)).toEqual([v, "imperial pt"]);
    });

    it.each([1, 10, 100])('should convert ML to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert imperial qt to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        imperialPintsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });
  });


  describe('imperial qt', () => {
    it.each([1, 10, 100])('should yield a imperial qt measurement when given a number.', v => {
      expect(volume["imperial qt"](v)).toEqual([v, "imperial qt"]);
      expect(imperialQuarts(v)).toEqual([v, "imperial qt"]);
    });

    it.each([1, 10, 100])('should convert ML to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert imperial gal to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert metric cup to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        imperialQuartsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });
  });


  describe('imperial gal', () => {
    it.each([1, 10, 100])('should yield a imperial gal measurement when given a number.', v => {
      expect(volume["imperial gal"](v)).toEqual([v, "imperial gal"]);
      expect(imperialGallons(v)).toEqual([v, "imperial gal"]);
    });

    it.each([1, 10, 100])('should convert ML to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert metric cup to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        imperialGallonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "metric cup"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });
  });


  describe('metric cup', () => {
    it.each([1, 10, 100])('should yield a metric cup measurement when given a number.', v => {
      expect(volume["metric cup"](v)).toEqual([v, "metric cup"]);
      expect(metricCups(v)).toEqual([v, "metric cup"]);
    });

    it.each([1, 10, 100])('should convert ML to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kL to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert L to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dL to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cL to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mL to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km³ to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m³ to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm³ to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm³ to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in³ to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft³ to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd³ to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi³ to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert af to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert bsh to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tsp to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tbsp to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fl oz to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cup to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert qt to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert gal to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tsp to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial tbsp to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial fl oz to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial pt to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial qt to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert imperial gal to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        metricCupsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });


  });

});
