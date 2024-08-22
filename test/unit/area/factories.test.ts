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



    it.each([1, 10, 100])('should convert km² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareMegametersConversion[1],
        squareKilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareMegametersConversion[1],
        squareMetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareMegametersConversion[1],
        squareCentimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareMegametersConversion[1],
        squareMillimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareMegametersConversion[1],
        squareMicrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareMegametersConversion[1],
        squareNanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareMegametersConversion[1],
        squareInchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareMegametersConversion[1],
        squareFeetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareMegametersConversion[1],
        squareYardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi² to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareMegametersConversion[1],
        squareMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ac to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        squareMegametersConversion[1],
        acresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert a to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        squareMegametersConversion[1],
        aresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["Mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMegameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ha to Mm².', v => {
      const squareMegametersConversion = linearConversion(1000000000000);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        squareMegametersConversion[1],
        hectaresConversion[0],
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

    it.each([1, 10, 100])('should convert Mm² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareKilometersConversion[1],
        squareMegametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert m² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareKilometersConversion[1],
        squareMetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareKilometersConversion[1],
        squareCentimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareKilometersConversion[1],
        squareMillimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareKilometersConversion[1],
        squareMicrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareKilometersConversion[1],
        squareNanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareKilometersConversion[1],
        squareInchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareKilometersConversion[1],
        squareFeetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareKilometersConversion[1],
        squareYardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi² to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareKilometersConversion[1],
        squareMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ac to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        squareKilometersConversion[1],
        acresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert a to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        squareKilometersConversion[1],
        aresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "km²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["km²"](conversionCandidate)).toEqual(expected);
      expect(squareKilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ha to km².', v => {
      const squareKilometersConversion = linearConversion(1000000);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        squareKilometersConversion[1],
        hectaresConversion[0],
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

    it.each([1, 10, 100])('should convert Mm² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareMetersConversion[1],
        squareMegametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareMetersConversion[1],
        squareKilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert cm² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareMetersConversion[1],
        squareCentimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareMetersConversion[1],
        squareMillimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareMetersConversion[1],
        squareMicrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareMetersConversion[1],
        squareNanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareMetersConversion[1],
        squareInchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareMetersConversion[1],
        squareFeetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareMetersConversion[1],
        squareYardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi² to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareMetersConversion[1],
        squareMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ac to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        squareMetersConversion[1],
        acresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert a to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        squareMetersConversion[1],
        aresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["m²"](conversionCandidate)).toEqual(expected);
      expect(squareMeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ha to m².', v => {
      const squareMetersConversion = linearConversion(1);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        squareMetersConversion[1],
        hectaresConversion[0],
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

    it.each([1, 10, 100])('should convert Mm² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareCentimetersConversion[1],
        squareMegametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareCentimetersConversion[1],
        squareKilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareCentimetersConversion[1],
        squareMetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert mm² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareCentimetersConversion[1],
        squareMillimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareCentimetersConversion[1],
        squareMicrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareCentimetersConversion[1],
        squareNanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareCentimetersConversion[1],
        squareInchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareCentimetersConversion[1],
        squareFeetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareCentimetersConversion[1],
        squareYardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi² to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareCentimetersConversion[1],
        squareMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ac to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        squareCentimetersConversion[1],
        acresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert a to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        squareCentimetersConversion[1],
        aresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["cm²"](conversionCandidate)).toEqual(expected);
      expect(squareCentimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ha to cm².', v => {
      const squareCentimetersConversion = linearConversion(0.0001);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        squareCentimetersConversion[1],
        hectaresConversion[0],
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

    it.each([1, 10, 100])('should convert Mm² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareMillimetersConversion[1],
        squareMegametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareMillimetersConversion[1],
        squareKilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareMillimetersConversion[1],
        squareMetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareMillimetersConversion[1],
        squareCentimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert µm² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareMillimetersConversion[1],
        squareMicrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareMillimetersConversion[1],
        squareNanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareMillimetersConversion[1],
        squareInchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareMillimetersConversion[1],
        squareFeetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareMillimetersConversion[1],
        squareYardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi² to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareMillimetersConversion[1],
        squareMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ac to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        squareMillimetersConversion[1],
        acresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert a to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        squareMillimetersConversion[1],
        aresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["mm²"](conversionCandidate)).toEqual(expected);
      expect(squareMillimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ha to mm².', v => {
      const squareMillimetersConversion = linearConversion(0.000001);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        squareMillimetersConversion[1],
        hectaresConversion[0],
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

    it.each([1, 10, 100])('should convert Mm² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareMicrometersConversion[1],
        squareMegametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareMicrometersConversion[1],
        squareKilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareMicrometersConversion[1],
        squareMetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareMicrometersConversion[1],
        squareCentimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareMicrometersConversion[1],
        squareMillimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert nm² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareMicrometersConversion[1],
        squareNanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareMicrometersConversion[1],
        squareInchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareMicrometersConversion[1],
        squareFeetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareMicrometersConversion[1],
        squareYardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi² to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareMicrometersConversion[1],
        squareMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ac to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        squareMicrometersConversion[1],
        acresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert a to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        squareMicrometersConversion[1],
        aresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["µm²"](conversionCandidate)).toEqual(expected);
      expect(squareMicrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ha to µm².', v => {
      const squareMicrometersConversion = linearConversion(1e-12);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        squareMicrometersConversion[1],
        hectaresConversion[0],
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

    it.each([1, 10, 100])('should convert Mm² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareNanometersConversion[1],
        squareMegametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareNanometersConversion[1],
        squareKilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareNanometersConversion[1],
        squareMetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareNanometersConversion[1],
        squareCentimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareNanometersConversion[1],
        squareMillimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareNanometersConversion[1],
        squareMicrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert in² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareNanometersConversion[1],
        squareInchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareNanometersConversion[1],
        squareFeetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareNanometersConversion[1],
        squareYardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi² to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareNanometersConversion[1],
        squareMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ac to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        squareNanometersConversion[1],
        acresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert a to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        squareNanometersConversion[1],
        aresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["nm²"](conversionCandidate)).toEqual(expected);
      expect(squareNanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ha to nm².', v => {
      const squareNanometersConversion = linearConversion(1e-18);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        squareNanometersConversion[1],
        hectaresConversion[0],
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

    it.each([1, 10, 100])('should convert Mm² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareInchesConversion[1],
        squareMegametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareInchesConversion[1],
        squareKilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareInchesConversion[1],
        squareMetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareInchesConversion[1],
        squareCentimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareInchesConversion[1],
        squareMillimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareInchesConversion[1],
        squareMicrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareInchesConversion[1],
        squareNanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert ft² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareInchesConversion[1],
        squareFeetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareInchesConversion[1],
        squareYardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi² to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareInchesConversion[1],
        squareMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ac to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        squareInchesConversion[1],
        acresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert a to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        squareInchesConversion[1],
        aresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["in²"](conversionCandidate)).toEqual(expected);
      expect(squareInches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ha to in².', v => {
      const squareInchesConversion = linearConversion(0.00064516);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        squareInchesConversion[1],
        hectaresConversion[0],
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

    it.each([1, 10, 100])('should convert Mm² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareFeetConversion[1],
        squareMegametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareFeetConversion[1],
        squareKilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareFeetConversion[1],
        squareMetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareFeetConversion[1],
        squareCentimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareFeetConversion[1],
        squareMillimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareFeetConversion[1],
        squareMicrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareFeetConversion[1],
        squareNanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareFeetConversion[1],
        squareInchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert yd² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareFeetConversion[1],
        squareYardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi² to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareFeetConversion[1],
        squareMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ac to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        squareFeetConversion[1],
        acresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert a to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        squareFeetConversion[1],
        aresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["ft²"](conversionCandidate)).toEqual(expected);
      expect(squareFeet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ha to ft².', v => {
      const squareFeetConversion = linearConversion(0.092903);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        squareFeetConversion[1],
        hectaresConversion[0],
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

    it.each([1, 10, 100])('should convert Mm² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareYardsConversion[1],
        squareMegametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareYardsConversion[1],
        squareKilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareYardsConversion[1],
        squareMetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareYardsConversion[1],
        squareCentimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareYardsConversion[1],
        squareMillimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareYardsConversion[1],
        squareMicrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareYardsConversion[1],
        squareNanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareYardsConversion[1],
        squareInchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareYardsConversion[1],
        squareFeetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert mi² to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        squareYardsConversion[1],
        squareMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ac to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        squareYardsConversion[1],
        acresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert a to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        squareYardsConversion[1],
        aresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["yd²"](conversionCandidate)).toEqual(expected);
      expect(squareYards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ha to yd².', v => {
      const squareYardsConversion = linearConversion(0.836127);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        squareYardsConversion[1],
        hectaresConversion[0],
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

    it.each([1, 10, 100])('should convert Mm² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        squareMilesConversion[1],
        squareMegametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        squareMilesConversion[1],
        squareKilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        squareMilesConversion[1],
        squareMetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        squareMilesConversion[1],
        squareCentimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        squareMilesConversion[1],
        squareMillimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        squareMilesConversion[1],
        squareMicrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        squareMilesConversion[1],
        squareNanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        squareMilesConversion[1],
        squareInchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        squareMilesConversion[1],
        squareFeetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd² to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        squareMilesConversion[1],
        squareYardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert ac to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        squareMilesConversion[1],
        acresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert a to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        squareMilesConversion[1],
        aresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi²"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["mi²"](conversionCandidate)).toEqual(expected);
      expect(squareMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ha to mi².', v => {
      const squareMilesConversion = linearConversion(2590000);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        squareMilesConversion[1],
        hectaresConversion[0],
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

    it.each([1, 10, 100])('should convert Mm² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        acresConversion[1],
        squareMegametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        acresConversion[1],
        squareKilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        acresConversion[1],
        squareMetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        acresConversion[1],
        squareCentimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        acresConversion[1],
        squareMillimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        acresConversion[1],
        squareMicrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        acresConversion[1],
        squareNanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        acresConversion[1],
        squareInchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        acresConversion[1],
        squareFeetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        acresConversion[1],
        squareYardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi² to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        acresConversion[1],
        squareMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert a to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        acresConversion[1],
        aresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ac"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["ac"](conversionCandidate)).toEqual(expected);
      expect(acres(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ha to ac.', v => {
      const acresConversion = linearConversion(4046.86);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        acresConversion[1],
        hectaresConversion[0],
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

    it.each([1, 10, 100])('should convert Mm² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        aresConversion[1],
        squareMegametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        aresConversion[1],
        squareKilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        aresConversion[1],
        squareMetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        aresConversion[1],
        squareCentimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        aresConversion[1],
        squareMillimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        aresConversion[1],
        squareMicrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        aresConversion[1],
        squareNanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        aresConversion[1],
        squareInchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        aresConversion[1],
        squareFeetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        aresConversion[1],
        squareYardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi² to a.', v => {
      const aresConversion = linearConversion(100);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        aresConversion[1],
        squareMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ac to a.', v => {
      const aresConversion = linearConversion(100);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        aresConversion[1],
        acresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "a"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["a"](conversionCandidate)).toEqual(expected);
      expect(ares(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert ha to a.', v => {
      const aresConversion = linearConversion(100);
      const hectaresConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        aresConversion[1],
        hectaresConversion[0],
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

    it.each([1, 10, 100])('should convert Mm² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareMegametersConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        hectaresConversion[1],
        squareMegametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "Mm²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareKilometersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        hectaresConversion[1],
        squareKilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "km²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareMetersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        hectaresConversion[1],
        squareMetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "m²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareCentimetersConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        hectaresConversion[1],
        squareCentimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "cm²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareMillimetersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        hectaresConversion[1],
        squareMillimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "mm²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareMicrometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        hectaresConversion[1],
        squareMicrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "µm²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareNanometersConversion = linearConversion(1e-18);

      const [toBase, fromBase] = [
        hectaresConversion[1],
        squareNanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "nm²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareInchesConversion = linearConversion(0.00064516);

      const [toBase, fromBase] = [
        hectaresConversion[1],
        squareInchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "in²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareFeetConversion = linearConversion(0.092903);

      const [toBase, fromBase] = [
        hectaresConversion[1],
        squareFeetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "ft²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareYardsConversion = linearConversion(0.836127);

      const [toBase, fromBase] = [
        hectaresConversion[1],
        squareYardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "yd²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi² to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const squareMilesConversion = linearConversion(2590000);

      const [toBase, fromBase] = [
        hectaresConversion[1],
        squareMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "mi²"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ac to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const acresConversion = linearConversion(4046.86);

      const [toBase, fromBase] = [
        hectaresConversion[1],
        acresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "ac"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert a to ha.', v => {
      const hectaresConversion = linearConversion(10000);
      const aresConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectaresConversion[1],
        aresConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ha"] as const;
      const conversionCandidate = [v, "a"] as const;

      expect(area["ha"](conversionCandidate)).toEqual(expected);
      expect(hectares(conversionCandidate)).toEqual(expected);
    });


  });

});
