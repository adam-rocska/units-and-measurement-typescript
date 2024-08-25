import {volume} from "!src/volume/factories";
import {megaliters, kiloliters, liters, deciliters, centiliters, milliliters, cubicKilometers, cubicMeters, cubicDecimeters, cubicMillimeters, cubicInches, cubicFeet, cubicYards, cubicMiles, acreFeet, bushels, teaspoons, tablespoons, fluidOunces, cups, pints, quarts, gallons, imperialTeaspoons, imperialTablespoons, imperialFluidOunces, imperialPints, imperialQuarts, imperialGallons, metricCups} from "!src/volume/factories";
import {linearConversion} from "!src/dimension/conversion";

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



    it.each([1, 10, 100])('should convert %dkL to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["ML"](conversionCandidate)).toEqual(expected);
      expect(megaliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to ML.', v => {
      const megalitersConversion = linearConversion(1000000);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        megalitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ML"] as const;
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

    it.each([1, 10, 100])('should convert %dML to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dL to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["kL"](conversionCandidate)).toEqual(expected);
      expect(kiloliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to kL.', v => {
      const kilolitersConversion = linearConversion(1000);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        kilolitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kL"] as const;
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

    it.each([1, 10, 100])('should convert %dML to L.', v => {
      const litersConversion = linearConversion(1);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to L.', v => {
      const litersConversion = linearConversion(1);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %ddL to L.', v => {
      const litersConversion = linearConversion(1);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to L.', v => {
      const litersConversion = linearConversion(1);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to L.', v => {
      const litersConversion = linearConversion(1);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to L.', v => {
      const litersConversion = linearConversion(1);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to L.', v => {
      const litersConversion = linearConversion(1);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to L.', v => {
      const litersConversion = linearConversion(1);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to L.', v => {
      const litersConversion = linearConversion(1);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to L.', v => {
      const litersConversion = linearConversion(1);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to L.', v => {
      const litersConversion = linearConversion(1);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to L.', v => {
      const litersConversion = linearConversion(1);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to L.', v => {
      const litersConversion = linearConversion(1);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to L.', v => {
      const litersConversion = linearConversion(1);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to L.', v => {
      const litersConversion = linearConversion(1);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to L.', v => {
      const litersConversion = linearConversion(1);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to L.', v => {
      const litersConversion = linearConversion(1);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to L.', v => {
      const litersConversion = linearConversion(1);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to L.', v => {
      const litersConversion = linearConversion(1);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to L.', v => {
      const litersConversion = linearConversion(1);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to L.', v => {
      const litersConversion = linearConversion(1);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to L.', v => {
      const litersConversion = linearConversion(1);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to L.', v => {
      const litersConversion = linearConversion(1);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to L.', v => {
      const litersConversion = linearConversion(1);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to L.', v => {
      const litersConversion = linearConversion(1);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to L.', v => {
      const litersConversion = linearConversion(1);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to L.', v => {
      const litersConversion = linearConversion(1);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to L.', v => {
      const litersConversion = linearConversion(1);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["L"](conversionCandidate)).toEqual(expected);
      expect(liters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to L.', v => {
      const litersConversion = linearConversion(1);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        litersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "L"] as const;
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

    it.each([1, 10, 100])('should convert %dML to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dcL to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["dL"](conversionCandidate)).toEqual(expected);
      expect(deciliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to dL.', v => {
      const decilitersConversion = linearConversion(0.1);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        decilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dL"] as const;
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

    it.each([1, 10, 100])('should convert %dML to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dmL to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["cL"](conversionCandidate)).toEqual(expected);
      expect(centiliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to cL.', v => {
      const centilitersConversion = linearConversion(0.01);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        centilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cL"] as const;
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

    it.each([1, 10, 100])('should convert %dML to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dkm³ to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["mL"](conversionCandidate)).toEqual(expected);
      expect(milliliters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to mL.', v => {
      const millilitersConversion = linearConversion(0.001);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        millilitersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mL"] as const;
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

    it.each([1, 10, 100])('should convert %dML to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dm³ to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["km³"](conversionCandidate)).toEqual(expected);
      expect(cubicKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to km³.', v => {
      const cubicKilometersConversion = linearConversion(1000000000000);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cubicKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km³"] as const;
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

    it.each([1, 10, 100])('should convert %dML to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %ddm³ to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["m³"](conversionCandidate)).toEqual(expected);
      expect(cubicMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to m³.', v => {
      const cubicMetersConversion = linearConversion(1000);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cubicMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m³"] as const;
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

    it.each([1, 10, 100])('should convert %dML to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dmm³ to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["dm³"](conversionCandidate)).toEqual(expected);
      expect(cubicDecimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to dm³.', v => {
      const cubicDecimetersConversion = linearConversion(1);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cubicDecimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm³"] as const;
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

    it.each([1, 10, 100])('should convert %dML to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %din³ to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["mm³"](conversionCandidate)).toEqual(expected);
      expect(cubicMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to mm³.', v => {
      const cubicMillimetersConversion = linearConversion(0.000001);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cubicMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm³"] as const;
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

    it.each([1, 10, 100])('should convert %dML to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dft³ to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["in³"](conversionCandidate)).toEqual(expected);
      expect(cubicInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to in³.', v => {
      const cubicInchesConversion = linearConversion(0.0163871);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cubicInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in³"] as const;
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

    it.each([1, 10, 100])('should convert %dML to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dyd³ to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["ft³"](conversionCandidate)).toEqual(expected);
      expect(cubicFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to ft³.', v => {
      const cubicFeetConversion = linearConversion(28.3168);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cubicFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft³"] as const;
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

    it.each([1, 10, 100])('should convert %dML to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dmi³ to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["yd³"](conversionCandidate)).toEqual(expected);
      expect(cubicYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to yd³.', v => {
      const cubicYardsConversion = linearConversion(764.555);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cubicYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd³"] as const;
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

    it.each([1, 10, 100])('should convert %dML to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %daf to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["mi³"](conversionCandidate)).toEqual(expected);
      expect(cubicMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to mi³.', v => {
      const cubicMilesConversion = linearConversion(4168000000000);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cubicMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi³"] as const;
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

    it.each([1, 10, 100])('should convert %dML to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dbsh to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["af"](conversionCandidate)).toEqual(expected);
      expect(acreFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to af.', v => {
      const acreFeetConversion = linearConversion(1233000);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        acreFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "af"] as const;
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

    it.each([1, 10, 100])('should convert %dML to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dtsp to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["bsh"](conversionCandidate)).toEqual(expected);
      expect(bushels(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to bsh.', v => {
      const bushelsConversion = linearConversion(35.2391);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        bushelsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bsh"] as const;
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

    it.each([1, 10, 100])('should convert %dML to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dtbsp to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["tsp"](conversionCandidate)).toEqual(expected);
      expect(teaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to tsp.', v => {
      const teaspoonsConversion = linearConversion(0.00492892);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        teaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tsp"] as const;
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

    it.each([1, 10, 100])('should convert %dML to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dfl oz to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["tbsp"](conversionCandidate)).toEqual(expected);
      expect(tablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to tbsp.', v => {
      const tablespoonsConversion = linearConversion(0.0147868);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        tablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tbsp"] as const;
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

    it.each([1, 10, 100])('should convert %dML to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dcup to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["fl oz"](conversionCandidate)).toEqual(expected);
      expect(fluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to fl oz.', v => {
      const fluidOuncesConversion = linearConversion(0.0295735);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        fluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fl oz"] as const;
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

    it.each([1, 10, 100])('should convert %dML to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dpt to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["cup"](conversionCandidate)).toEqual(expected);
      expect(cups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to cup.', v => {
      const cupsConversion = linearConversion(0.24);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        cupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cup"] as const;
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

    it.each([1, 10, 100])('should convert %dML to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dqt to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["pt"](conversionCandidate)).toEqual(expected);
      expect(pints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to pt.', v => {
      const pintsConversion = linearConversion(0.473176);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        pintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
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

    it.each([1, 10, 100])('should convert %dML to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dgal to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["qt"](conversionCandidate)).toEqual(expected);
      expect(quarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to qt.', v => {
      const quartsConversion = linearConversion(0.946353);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        quartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "qt"] as const;
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

    it.each([1, 10, 100])('should convert %dML to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dimperial tsp to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["gal"](conversionCandidate)).toEqual(expected);
      expect(gallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to gal.', v => {
      const gallonsConversion = linearConversion(3.78541);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        gallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "gal"] as const;
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

    it.each([1, 10, 100])('should convert %dML to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dimperial tbsp to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["imperial tsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTeaspoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to imperial tsp.', v => {
      const imperialTeaspoonsConversion = linearConversion(0.00591939);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        imperialTeaspoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tsp"] as const;
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

    it.each([1, 10, 100])('should convert %dML to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dimperial fl oz to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["imperial tbsp"](conversionCandidate)).toEqual(expected);
      expect(imperialTablespoons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to imperial tbsp.', v => {
      const imperialTablespoonsConversion = linearConversion(0.0177582);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        imperialTablespoonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial tbsp"] as const;
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

    it.each([1, 10, 100])('should convert %dML to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dimperial pt to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["imperial fl oz"](conversionCandidate)).toEqual(expected);
      expect(imperialFluidOunces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to imperial fl oz.', v => {
      const imperialFluidOuncesConversion = linearConversion(0.0284131);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        imperialFluidOuncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial fl oz"] as const;
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

    it.each([1, 10, 100])('should convert %dML to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dimperial qt to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["imperial pt"](conversionCandidate)).toEqual(expected);
      expect(imperialPints(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to imperial pt.', v => {
      const imperialPintsConversion = linearConversion(0.568261);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        imperialPintsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial pt"] as const;
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

    it.each([1, 10, 100])('should convert %dML to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dimperial gal to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["imperial qt"](conversionCandidate)).toEqual(expected);
      expect(imperialQuarts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmetric cup to imperial qt.', v => {
      const imperialQuartsConversion = linearConversion(1.13652);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        imperialQuartsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial qt"] as const;
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

    it.each([1, 10, 100])('should convert %dML to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["imperial gal"](conversionCandidate)).toEqual(expected);
      expect(imperialGallons(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dmetric cup to imperial gal.', v => {
      const imperialGallonsConversion = linearConversion(4.54609);
      const metricCupsConversion = linearConversion(0.25);

      const [toBase, fromBase] = [
        metricCupsConversion[0],
        imperialGallonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "imperial gal"] as const;
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

    it.each([1, 10, 100])('should convert %dML to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const megalitersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megalitersConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "ML"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkL to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const kilolitersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilolitersConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "kL"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dL to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const litersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        litersConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "L"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddL to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const decilitersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decilitersConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "dL"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcL to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const centilitersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centilitersConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "cL"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmL to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const millilitersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millilitersConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "mL"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm³ to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cubicKilometersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        cubicKilometersConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "km³"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm³ to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cubicMetersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        cubicMetersConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "m³"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm³ to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cubicDecimetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        cubicDecimetersConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "dm³"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm³ to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cubicMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        cubicMillimetersConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "mm³"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din³ to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cubicInchesConversion = linearConversion(0.0163871);

      const [toBase, fromBase] = [
        cubicInchesConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "in³"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft³ to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cubicFeetConversion = linearConversion(28.3168);

      const [toBase, fromBase] = [
        cubicFeetConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "ft³"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd³ to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cubicYardsConversion = linearConversion(764.555);

      const [toBase, fromBase] = [
        cubicYardsConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "yd³"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi³ to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cubicMilesConversion = linearConversion(4168000000000);

      const [toBase, fromBase] = [
        cubicMilesConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "mi³"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %daf to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const acreFeetConversion = linearConversion(1233000);

      const [toBase, fromBase] = [
        acreFeetConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "af"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbsh to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const bushelsConversion = linearConversion(35.2391);

      const [toBase, fromBase] = [
        bushelsConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "bsh"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtsp to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const teaspoonsConversion = linearConversion(0.00492892);

      const [toBase, fromBase] = [
        teaspoonsConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "tsp"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtbsp to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const tablespoonsConversion = linearConversion(0.0147868);

      const [toBase, fromBase] = [
        tablespoonsConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "tbsp"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfl oz to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const fluidOuncesConversion = linearConversion(0.0295735);

      const [toBase, fromBase] = [
        fluidOuncesConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "fl oz"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcup to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const cupsConversion = linearConversion(0.24);

      const [toBase, fromBase] = [
        cupsConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "cup"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const pintsConversion = linearConversion(0.473176);

      const [toBase, fromBase] = [
        pintsConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dqt to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const quartsConversion = linearConversion(0.946353);

      const [toBase, fromBase] = [
        quartsConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "qt"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dgal to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const gallonsConversion = linearConversion(3.78541);

      const [toBase, fromBase] = [
        gallonsConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "gal"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tsp to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const imperialTeaspoonsConversion = linearConversion(0.00591939);

      const [toBase, fromBase] = [
        imperialTeaspoonsConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "imperial tsp"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial tbsp to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const imperialTablespoonsConversion = linearConversion(0.0177582);

      const [toBase, fromBase] = [
        imperialTablespoonsConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "imperial tbsp"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial fl oz to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const imperialFluidOuncesConversion = linearConversion(0.0284131);

      const [toBase, fromBase] = [
        imperialFluidOuncesConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "imperial fl oz"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial pt to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const imperialPintsConversion = linearConversion(0.568261);

      const [toBase, fromBase] = [
        imperialPintsConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "imperial pt"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial qt to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const imperialQuartsConversion = linearConversion(1.13652);

      const [toBase, fromBase] = [
        imperialQuartsConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "imperial qt"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dimperial gal to metric cup.', v => {
      const metricCupsConversion = linearConversion(0.25);
      const imperialGallonsConversion = linearConversion(4.54609);

      const [toBase, fromBase] = [
        imperialGallonsConversion[0],
        metricCupsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "metric cup"] as const;
      const conversionCandidate = [v, "imperial gal"] as const;

      expect(volume["metric cup"](conversionCandidate)).toEqual(expected);
      expect(metricCups(conversionCandidate)).toEqual(expected);
    });


  });

});
