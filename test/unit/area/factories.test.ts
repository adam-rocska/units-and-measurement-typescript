import {area} from "!src/area/factories";
import {squareMegameters, squareKilometers, squareMeters, squareCentimeters, squareMillimeters, squareMicrometers, squareNanometers, squareInches, squareFeet, squareYards, squareMiles, acres, ares, hectares} from "!src/area/factories";
import {linearConversion} from "!src/conversion";

describe("!src/area/factories aliasing", () => {
  describe('area["Mm²"]', () => {
    it('should be aliased by "squareMegameters".', () => {
      expect(squareMegameters).toBe(area["Mm²"]);
    });
  });


  describe('area["km²"]', () => {
    it('should be aliased by "squareKilometers".', () => {
      expect(squareKilometers).toBe(area["km²"]);
    });
  });


  describe('area["m²"]', () => {
    it('should be aliased by "squareMeters".', () => {
      expect(squareMeters).toBe(area["m²"]);
    });
  });


  describe('area["cm²"]', () => {
    it('should be aliased by "squareCentimeters".', () => {
      expect(squareCentimeters).toBe(area["cm²"]);
    });
  });


  describe('area["mm²"]', () => {
    it('should be aliased by "squareMillimeters".', () => {
      expect(squareMillimeters).toBe(area["mm²"]);
    });
  });


  describe('area["µm²"]', () => {
    it('should be aliased by "squareMicrometers".', () => {
      expect(squareMicrometers).toBe(area["µm²"]);
    });
  });


  describe('area["nm²"]', () => {
    it('should be aliased by "squareNanometers".', () => {
      expect(squareNanometers).toBe(area["nm²"]);
    });
  });


  describe('area["in²"]', () => {
    it('should be aliased by "squareInches".', () => {
      expect(squareInches).toBe(area["in²"]);
    });
  });


  describe('area["ft²"]', () => {
    it('should be aliased by "squareFeet".', () => {
      expect(squareFeet).toBe(area["ft²"]);
    });
  });


  describe('area["yd²"]', () => {
    it('should be aliased by "squareYards".', () => {
      expect(squareYards).toBe(area["yd²"]);
    });
  });


  describe('area["mi²"]', () => {
    it('should be aliased by "squareMiles".', () => {
      expect(squareMiles).toBe(area["mi²"]);
    });
  });


  describe('area["ac"]', () => {
    it('should be aliased by "acres".', () => {
      expect(acres).toBe(area["ac"]);
    });
  });


  describe('area["a"]', () => {
    it('should be aliased by "ares".', () => {
      expect(ares).toBe(area["a"]);
    });
  });


  describe('area["ha"]', () => {
    it('should be aliased by "hectares".', () => {
      expect(hectares).toBe(area["ha"]);
    });
  });

});

describe("area", () => {
  describe('Mm²', () => {
    it.each([1, 10, 100])('should yield a Mm² measurement when given a number.', v => {
      expect(area["Mm²"](v)).toEqual([v, "Mm²"]);
      expect(squareMegameters(v)).toEqual([v, "Mm²"]);
    });



    it.each([1, 10, 100])('should convert %dkm² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareKilometersConversion[0],
        squareMegametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareMetersConversion[0],
        squareMegametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareCentimetersConversion[0],
        squareMegametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareMillimetersConversion[0],
        squareMegametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareMicrometersConversion[0],
        squareMegametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareNanometersConversion[0],
        squareMegametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareInchesConversion[0],
        squareMegametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareFeetConversion[0],
        squareMegametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareYardsConversion[0],
        squareMegametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareMilesConversion[0],
        squareMegametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dac to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        acresConversion[0],
        squareMegametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %da to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        aresConversion[0],
        squareMegametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dha to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        hectaresConversion[0],
        squareMegametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "ha"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('km²', () => {
    it.each([1, 10, 100])('should yield a km² measurement when given a number.', v => {
      expect(area["km²"](v)).toEqual([v, "km²"]);
      expect(squareKilometers(v)).toEqual([v, "km²"]);
    });

    it.each([1, 10, 100])('should convert %dMm² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareMegametersConversion[0],
        squareKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dm² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareMetersConversion[0],
        squareKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareCentimetersConversion[0],
        squareKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareMillimetersConversion[0],
        squareKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareMicrometersConversion[0],
        squareKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareNanometersConversion[0],
        squareKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareInchesConversion[0],
        squareKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareFeetConversion[0],
        squareKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareYardsConversion[0],
        squareKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareMilesConversion[0],
        squareKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dac to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        acresConversion[0],
        squareKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %da to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        aresConversion[0],
        squareKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dha to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        hectaresConversion[0],
        squareKilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "ha"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });
  });


  describe('m²', () => {
    it.each([1, 10, 100])('should yield a m² measurement when given a number.', v => {
      expect(area["m²"](v)).toEqual([v, "m²"]);
      expect(squareMeters(v)).toEqual([v, "m²"]);
    });

    it.each([1, 10, 100])('should convert %dMm² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareMegametersConversion[0],
        squareMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareKilometersConversion[0],
        squareMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dcm² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareCentimetersConversion[0],
        squareMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareMillimetersConversion[0],
        squareMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareMicrometersConversion[0],
        squareMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareNanometersConversion[0],
        squareMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareInchesConversion[0],
        squareMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareFeetConversion[0],
        squareMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareYardsConversion[0],
        squareMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareMilesConversion[0],
        squareMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dac to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        acresConversion[0],
        squareMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %da to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        aresConversion[0],
        squareMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dha to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        hectaresConversion[0],
        squareMetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "ha"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('cm²', () => {
    it.each([1, 10, 100])('should yield a cm² measurement when given a number.', v => {
      expect(area["cm²"](v)).toEqual([v, "cm²"]);
      expect(squareCentimeters(v)).toEqual([v, "cm²"]);
    });

    it.each([1, 10, 100])('should convert %dMm² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareMegametersConversion[0],
        squareCentimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareKilometersConversion[0],
        squareCentimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareMetersConversion[0],
        squareCentimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dmm² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareMillimetersConversion[0],
        squareCentimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareMicrometersConversion[0],
        squareCentimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareNanometersConversion[0],
        squareCentimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareInchesConversion[0],
        squareCentimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareFeetConversion[0],
        squareCentimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareYardsConversion[0],
        squareCentimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareMilesConversion[0],
        squareCentimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dac to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        acresConversion[0],
        squareCentimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %da to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        aresConversion[0],
        squareCentimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dha to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        hectaresConversion[0],
        squareCentimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "ha"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mm²', () => {
    it.each([1, 10, 100])('should yield a mm² measurement when given a number.', v => {
      expect(area["mm²"](v)).toEqual([v, "mm²"]);
      expect(squareMillimeters(v)).toEqual([v, "mm²"]);
    });

    it.each([1, 10, 100])('should convert %dMm² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareMegametersConversion[0],
        squareMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareKilometersConversion[0],
        squareMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareMetersConversion[0],
        squareMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareCentimetersConversion[0],
        squareMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dµm² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareMicrometersConversion[0],
        squareMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareNanometersConversion[0],
        squareMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareInchesConversion[0],
        squareMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareFeetConversion[0],
        squareMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareYardsConversion[0],
        squareMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareMilesConversion[0],
        squareMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dac to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        acresConversion[0],
        squareMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %da to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        aresConversion[0],
        squareMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dha to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        hectaresConversion[0],
        squareMillimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "ha"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('µm²', () => {
    it.each([1, 10, 100])('should yield a µm² measurement when given a number.', v => {
      expect(area["µm²"](v)).toEqual([v, "µm²"]);
      expect(squareMicrometers(v)).toEqual([v, "µm²"]);
    });

    it.each([1, 10, 100])('should convert %dMm² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareMegametersConversion[0],
        squareMicrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareKilometersConversion[0],
        squareMicrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareMetersConversion[0],
        squareMicrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareCentimetersConversion[0],
        squareMicrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareMillimetersConversion[0],
        squareMicrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dnm² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareNanometersConversion[0],
        squareMicrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareInchesConversion[0],
        squareMicrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareFeetConversion[0],
        squareMicrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareYardsConversion[0],
        squareMicrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareMilesConversion[0],
        squareMicrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dac to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        acresConversion[0],
        squareMicrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %da to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        aresConversion[0],
        squareMicrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dha to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        hectaresConversion[0],
        squareMicrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "ha"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });
  });


  describe('nm²', () => {
    it.each([1, 10, 100])('should yield a nm² measurement when given a number.', v => {
      expect(area["nm²"](v)).toEqual([v, "nm²"]);
      expect(squareNanometers(v)).toEqual([v, "nm²"]);
    });

    it.each([1, 10, 100])('should convert %dMm² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareMegametersConversion[0],
        squareNanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareKilometersConversion[0],
        squareNanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareMetersConversion[0],
        squareNanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareCentimetersConversion[0],
        squareNanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareMillimetersConversion[0],
        squareNanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareMicrometersConversion[0],
        squareNanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %din² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareInchesConversion[0],
        squareNanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareFeetConversion[0],
        squareNanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareYardsConversion[0],
        squareNanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareMilesConversion[0],
        squareNanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dac to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        acresConversion[0],
        squareNanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %da to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        aresConversion[0],
        squareNanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dha to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        hectaresConversion[0],
        squareNanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "ha"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });
  });


  describe('in²', () => {
    it.each([1, 10, 100])('should yield a in² measurement when given a number.', v => {
      expect(area["in²"](v)).toEqual([v, "in²"]);
      expect(squareInches(v)).toEqual([v, "in²"]);
    });

    it.each([1, 10, 100])('should convert %dMm² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareMegametersConversion[0],
        squareInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareKilometersConversion[0],
        squareInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareMetersConversion[0],
        squareInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareCentimetersConversion[0],
        squareInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareMillimetersConversion[0],
        squareInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareMicrometersConversion[0],
        squareInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareNanometersConversion[0],
        squareInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dft² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareFeetConversion[0],
        squareInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareYardsConversion[0],
        squareInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareMilesConversion[0],
        squareInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dac to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        acresConversion[0],
        squareInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %da to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        aresConversion[0],
        squareInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dha to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        hectaresConversion[0],
        squareInchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "ha"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });
  });


  describe('ft²', () => {
    it.each([1, 10, 100])('should yield a ft² measurement when given a number.', v => {
      expect(area["ft²"](v)).toEqual([v, "ft²"]);
      expect(squareFeet(v)).toEqual([v, "ft²"]);
    });

    it.each([1, 10, 100])('should convert %dMm² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareMegametersConversion[0],
        squareFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareKilometersConversion[0],
        squareFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareMetersConversion[0],
        squareFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareCentimetersConversion[0],
        squareFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareMillimetersConversion[0],
        squareFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareMicrometersConversion[0],
        squareFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareNanometersConversion[0],
        squareFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareInchesConversion[0],
        squareFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dyd² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareYardsConversion[0],
        squareFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareMilesConversion[0],
        squareFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dac to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        acresConversion[0],
        squareFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %da to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        aresConversion[0],
        squareFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dha to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        hectaresConversion[0],
        squareFeetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "ha"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });
  });


  describe('yd²', () => {
    it.each([1, 10, 100])('should yield a yd² measurement when given a number.', v => {
      expect(area["yd²"](v)).toEqual([v, "yd²"]);
      expect(squareYards(v)).toEqual([v, "yd²"]);
    });

    it.each([1, 10, 100])('should convert %dMm² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareMegametersConversion[0],
        squareYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareKilometersConversion[0],
        squareYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareMetersConversion[0],
        squareYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareCentimetersConversion[0],
        squareYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareMillimetersConversion[0],
        squareYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareMicrometersConversion[0],
        squareYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareNanometersConversion[0],
        squareYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareInchesConversion[0],
        squareYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareFeetConversion[0],
        squareYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dmi² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareMilesConversion[0],
        squareYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dac to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        acresConversion[0],
        squareYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %da to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        aresConversion[0],
        squareYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dha to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        hectaresConversion[0],
        squareYardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "ha"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mi²', () => {
    it.each([1, 10, 100])('should yield a mi² measurement when given a number.', v => {
      expect(area["mi²"](v)).toEqual([v, "mi²"]);
      expect(squareMiles(v)).toEqual([v, "mi²"]);
    });

    it.each([1, 10, 100])('should convert %dMm² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareMegametersConversion[0],
        squareMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareKilometersConversion[0],
        squareMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareMetersConversion[0],
        squareMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareCentimetersConversion[0],
        squareMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareMillimetersConversion[0],
        squareMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareMicrometersConversion[0],
        squareMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareNanometersConversion[0],
        squareMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareInchesConversion[0],
        squareMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareFeetConversion[0],
        squareMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareYardsConversion[0],
        squareMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dac to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        acresConversion[0],
        squareMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %da to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        aresConversion[0],
        squareMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dha to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        hectaresConversion[0],
        squareMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "ha"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });
  });


  describe('ac', () => {
    it.each([1, 10, 100])('should yield a ac measurement when given a number.', v => {
      expect(area["ac"](v)).toEqual([v, "ac"]);
      expect(acres(v)).toEqual([v, "ac"]);
    });

    it.each([1, 10, 100])('should convert %dMm² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareMegametersConversion[0],
        acresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareKilometersConversion[0],
        acresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareMetersConversion[0],
        acresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareCentimetersConversion[0],
        acresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareMillimetersConversion[0],
        acresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareMicrometersConversion[0],
        acresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareNanometersConversion[0],
        acresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareInchesConversion[0],
        acresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareFeetConversion[0],
        acresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareYardsConversion[0],
        acresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareMilesConversion[0],
        acresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %da to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        aresConversion[0],
        acresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dha to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        hectaresConversion[0],
        acresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "ha"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });
  });


  describe('a', () => {
    it.each([1, 10, 100])('should yield a a measurement when given a number.', v => {
      expect(area["a"](v)).toEqual([v, "a"]);
      expect(ares(v)).toEqual([v, "a"]);
    });

    it.each([1, 10, 100])('should convert %dMm² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareMegametersConversion[0],
        aresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareKilometersConversion[0],
        aresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareMetersConversion[0],
        aresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareCentimetersConversion[0],
        aresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareMillimetersConversion[0],
        aresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareMicrometersConversion[0],
        aresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareNanometersConversion[0],
        aresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareInchesConversion[0],
        aresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareFeetConversion[0],
        aresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareYardsConversion[0],
        aresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareMilesConversion[0],
        aresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dac to a.', v => {
      const aresConversion = linearConversion(100);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        acresConversion[0],
        aresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dha to a.', v => {
      const aresConversion = linearConversion(100);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        hectaresConversion[0],
        aresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "ha"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });
  });


  describe('ha', () => {
    it.each([1, 10, 100])('should yield a ha measurement when given a number.', v => {
      expect(area["ha"](v)).toEqual([v, "ha"]);
      expect(hectares(v)).toEqual([v, "ha"]);
    });

    it.each([1, 10, 100])('should convert %dMm² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareMegametersConversion[0],
        hectaresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkm² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareKilometersConversion[0],
        hectaresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareMetersConversion[0],
        hectaresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareCentimetersConversion[0],
        hectaresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareMillimetersConversion[0],
        hectaresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareMicrometersConversion[0],
        hectaresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareNanometersConversion[0],
        hectaresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareInchesConversion[0],
        hectaresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareFeetConversion[0],
        hectaresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareYardsConversion[0],
        hectaresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareMilesConversion[0],
        hectaresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dac to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        acresConversion[0],
        hectaresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %da to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        aresConversion[0],
        hectaresConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });


  });

});
