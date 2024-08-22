import {length} from "!src/length/factories";
import {megameters, kilometers, hectometers, decameters, meters, decimeters, centimeters, millimeters, micrometers, nanometers, picometers, twips, points, picas, inches, feet, yards, miles, scandinavianMiles, lightyears, nauticalMiles, fathoms, furlongs, astronomicalUnits, parsecs} from "!src/length/factories";
import {linearConversion} from "!src/conversion";

describe("!src/length/factories aliasing", () => {
  describe('length["Mm"]', () => {
    it('should be aliased by "megameters".', () => {
      expect(megameters).toBe(length["Mm"]);
    });
  });


  describe('length["kM"]', () => {
    it('should be aliased by "kilometers".', () => {
      expect(kilometers).toBe(length["kM"]);
    });
  });


  describe('length["hm"]', () => {
    it('should be aliased by "hectometers".', () => {
      expect(hectometers).toBe(length["hm"]);
    });
  });


  describe('length["dam"]', () => {
    it('should be aliased by "decameters".', () => {
      expect(decameters).toBe(length["dam"]);
    });
  });


  describe('length["m"]', () => {
    it('should be aliased by "meters".', () => {
      expect(meters).toBe(length["m"]);
    });
  });


  describe('length["dm"]', () => {
    it('should be aliased by "decimeters".', () => {
      expect(decimeters).toBe(length["dm"]);
    });
  });


  describe('length["cm"]', () => {
    it('should be aliased by "centimeters".', () => {
      expect(centimeters).toBe(length["cm"]);
    });
  });


  describe('length["mm"]', () => {
    it('should be aliased by "millimeters".', () => {
      expect(millimeters).toBe(length["mm"]);
    });
  });


  describe('length["µm"]', () => {
    it('should be aliased by "micrometers".', () => {
      expect(micrometers).toBe(length["µm"]);
    });
  });


  describe('length["nm"]', () => {
    it('should be aliased by "nanometers".', () => {
      expect(nanometers).toBe(length["nm"]);
    });
  });


  describe('length["pm"]', () => {
    it('should be aliased by "picometers".', () => {
      expect(picometers).toBe(length["pm"]);
    });
  });


  describe('length["tw"]', () => {
    it('should be aliased by "twips".', () => {
      expect(twips).toBe(length["tw"]);
    });
  });


  describe('length["pt"]', () => {
    it('should be aliased by "points".', () => {
      expect(points).toBe(length["pt"]);
    });
  });


  describe('length["P"]', () => {
    it('should be aliased by "picas".', () => {
      expect(picas).toBe(length["P"]);
    });
  });


  describe('length["in"]', () => {
    it('should be aliased by "inches".', () => {
      expect(inches).toBe(length["in"]);
    });
  });


  describe('length["ft"]', () => {
    it('should be aliased by "feet".', () => {
      expect(feet).toBe(length["ft"]);
    });
  });


  describe('length["yd"]', () => {
    it('should be aliased by "yards".', () => {
      expect(yards).toBe(length["yd"]);
    });
  });


  describe('length["mi"]', () => {
    it('should be aliased by "miles".', () => {
      expect(miles).toBe(length["mi"]);
    });
  });


  describe('length["smi"]', () => {
    it('should be aliased by "scandinavianMiles".', () => {
      expect(scandinavianMiles).toBe(length["smi"]);
    });
  });


  describe('length["ly"]', () => {
    it('should be aliased by "lightyears".', () => {
      expect(lightyears).toBe(length["ly"]);
    });
  });


  describe('length["NM"]', () => {
    it('should be aliased by "nauticalMiles".', () => {
      expect(nauticalMiles).toBe(length["NM"]);
    });
  });


  describe('length["ftm"]', () => {
    it('should be aliased by "fathoms".', () => {
      expect(fathoms).toBe(length["ftm"]);
    });
  });


  describe('length["fur"]', () => {
    it('should be aliased by "furlongs".', () => {
      expect(furlongs).toBe(length["fur"]);
    });
  });


  describe('length["ua"]', () => {
    it('should be aliased by "astronomicalUnits".', () => {
      expect(astronomicalUnits).toBe(length["ua"]);
    });
  });


  describe('length["pc"]', () => {
    it('should be aliased by "parsecs".', () => {
      expect(parsecs).toBe(length["pc"]);
    });
  });

});

describe("length", () => {
  describe('Mm', () => {
    it.each([1, 10, 100])('should yield a Mm measurement when given a number.', v => {
      expect(length["Mm"](v)).toEqual([v, "Mm"]);
      expect(megameters(v)).toEqual([v, "Mm"]);
    });



    it.each([1, 10, 100])('should convert kM to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        megametersConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        megametersConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        megametersConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        megametersConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        megametersConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        megametersConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        megametersConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        megametersConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        megametersConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        megametersConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        megametersConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        megametersConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        megametersConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        megametersConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        megametersConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        megametersConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        megametersConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        megametersConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        megametersConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        megametersConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        megametersConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        megametersConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        megametersConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        megametersConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('kM', () => {
    it.each([1, 10, 100])('should yield a kM measurement when given a number.', v => {
      expect(length["kM"](v)).toEqual([v, "kM"]);
      expect(kilometers(v)).toEqual([v, "kM"]);
    });

    it.each([1, 10, 100])('should convert Mm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert hm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        kilometersConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });
  });


  describe('hm', () => {
    it.each([1, 10, 100])('should yield a hm measurement when given a number.', v => {
      expect(length["hm"](v)).toEqual([v, "hm"]);
      expect(hectometers(v)).toEqual([v, "hm"]);
    });

    it.each([1, 10, 100])('should convert Mm to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert dam to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        hectometersConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });
  });


  describe('dam', () => {
    it.each([1, 10, 100])('should yield a dam measurement when given a number.', v => {
      expect(length["dam"](v)).toEqual([v, "dam"]);
      expect(decameters(v)).toEqual([v, "dam"]);
    });

    it.each([1, 10, 100])('should convert Mm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        decametersConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to dam.', v => {
      const decametersConversion = linearConversion(10);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        decametersConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        decametersConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert m to dam.', v => {
      const decametersConversion = linearConversion(10);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        decametersConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decametersConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        decametersConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        decametersConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        decametersConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        decametersConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        decametersConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to dam.', v => {
      const decametersConversion = linearConversion(10);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        decametersConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to dam.', v => {
      const decametersConversion = linearConversion(10);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        decametersConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to dam.', v => {
      const decametersConversion = linearConversion(10);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        decametersConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to dam.', v => {
      const decametersConversion = linearConversion(10);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        decametersConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to dam.', v => {
      const decametersConversion = linearConversion(10);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        decametersConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to dam.', v => {
      const decametersConversion = linearConversion(10);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        decametersConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to dam.', v => {
      const decametersConversion = linearConversion(10);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        decametersConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to dam.', v => {
      const decametersConversion = linearConversion(10);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        decametersConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to dam.', v => {
      const decametersConversion = linearConversion(10);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        decametersConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to dam.', v => {
      const decametersConversion = linearConversion(10);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        decametersConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        decametersConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to dam.', v => {
      const decametersConversion = linearConversion(10);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        decametersConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to dam.', v => {
      const decametersConversion = linearConversion(10);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        decametersConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to dam.', v => {
      const decametersConversion = linearConversion(10);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        decametersConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('m', () => {
    it.each([1, 10, 100])('should yield a m measurement when given a number.', v => {
      expect(length["m"](v)).toEqual([v, "m"]);
      expect(meters(v)).toEqual([v, "m"]);
    });

    it.each([1, 10, 100])('should convert Mm to m.', v => {
      const metersConversion = linearConversion(1);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        metersConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to m.', v => {
      const metersConversion = linearConversion(1);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metersConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to m.', v => {
      const metersConversion = linearConversion(1);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        metersConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to m.', v => {
      const metersConversion = linearConversion(1);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        metersConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert dm to m.', v => {
      const metersConversion = linearConversion(1);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        metersConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to m.', v => {
      const metersConversion = linearConversion(1);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        metersConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to m.', v => {
      const metersConversion = linearConversion(1);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        metersConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to m.', v => {
      const metersConversion = linearConversion(1);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        metersConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to m.', v => {
      const metersConversion = linearConversion(1);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        metersConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to m.', v => {
      const metersConversion = linearConversion(1);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        metersConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to m.', v => {
      const metersConversion = linearConversion(1);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        metersConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to m.', v => {
      const metersConversion = linearConversion(1);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        metersConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to m.', v => {
      const metersConversion = linearConversion(1);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        metersConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to m.', v => {
      const metersConversion = linearConversion(1);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        metersConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to m.', v => {
      const metersConversion = linearConversion(1);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        metersConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to m.', v => {
      const metersConversion = linearConversion(1);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        metersConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to m.', v => {
      const metersConversion = linearConversion(1);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        metersConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to m.', v => {
      const metersConversion = linearConversion(1);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        metersConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to m.', v => {
      const metersConversion = linearConversion(1);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        metersConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to m.', v => {
      const metersConversion = linearConversion(1);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        metersConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to m.', v => {
      const metersConversion = linearConversion(1);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        metersConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to m.', v => {
      const metersConversion = linearConversion(1);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        metersConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to m.', v => {
      const metersConversion = linearConversion(1);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        metersConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to m.', v => {
      const metersConversion = linearConversion(1);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        metersConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('dm', () => {
    it.each([1, 10, 100])('should yield a dm measurement when given a number.', v => {
      expect(length["dm"](v)).toEqual([v, "dm"]);
      expect(decimeters(v)).toEqual([v, "dm"]);
    });

    it.each([1, 10, 100])('should convert Mm to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert cm to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        decimetersConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('cm', () => {
    it.each([1, 10, 100])('should yield a cm measurement when given a number.', v => {
      expect(length["cm"](v)).toEqual([v, "cm"]);
      expect(centimeters(v)).toEqual([v, "cm"]);
    });

    it.each([1, 10, 100])('should convert Mm to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert mm to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        centimetersConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mm', () => {
    it.each([1, 10, 100])('should yield a mm measurement when given a number.', v => {
      expect(length["mm"](v)).toEqual([v, "mm"]);
      expect(millimeters(v)).toEqual([v, "mm"]);
    });

    it.each([1, 10, 100])('should convert Mm to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert µm to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        millimetersConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });
  });


  describe('µm', () => {
    it.each([1, 10, 100])('should yield a µm measurement when given a number.', v => {
      expect(length["µm"](v)).toEqual([v, "µm"]);
      expect(micrometers(v)).toEqual([v, "µm"]);
    });

    it.each([1, 10, 100])('should convert Mm to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert nm to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        micrometersConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });
  });


  describe('nm', () => {
    it.each([1, 10, 100])('should yield a nm measurement when given a number.', v => {
      expect(length["nm"](v)).toEqual([v, "nm"]);
      expect(nanometers(v)).toEqual([v, "nm"]);
    });

    it.each([1, 10, 100])('should convert Mm to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert pm to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        nanometersConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });
  });


  describe('pm', () => {
    it.each([1, 10, 100])('should yield a pm measurement when given a number.', v => {
      expect(length["pm"](v)).toEqual([v, "pm"]);
      expect(picometers(v)).toEqual([v, "pm"]);
    });

    it.each([1, 10, 100])('should convert Mm to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        picometersConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        picometersConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        picometersConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        picometersConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        picometersConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        picometersConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        picometersConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        picometersConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        picometersConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        picometersConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert tw to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        picometersConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        picometersConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picometersConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        picometersConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        picometersConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        picometersConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        picometersConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        picometersConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        picometersConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        picometersConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        picometersConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        picometersConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        picometersConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        picometersConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });
  });


  describe('tw', () => {
    it.each([1, 10, 100])('should yield a tw measurement when given a number.', v => {
      expect(length["tw"](v)).toEqual([v, "tw"]);
      expect(twips(v)).toEqual([v, "tw"]);
    });

    it.each([1, 10, 100])('should convert Mm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        twipsConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        twipsConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        twipsConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        twipsConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        twipsConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        twipsConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        twipsConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        twipsConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        twipsConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        twipsConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        twipsConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert pt to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        twipsConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        twipsConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        twipsConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        twipsConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        twipsConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        twipsConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        twipsConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        twipsConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        twipsConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        twipsConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        twipsConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        twipsConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        twipsConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });
  });


  describe('pt', () => {
    it.each([1, 10, 100])('should yield a pt measurement when given a number.', v => {
      expect(length["pt"](v)).toEqual([v, "pt"]);
      expect(points(v)).toEqual([v, "pt"]);
    });

    it.each([1, 10, 100])('should convert Mm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        pointsConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        pointsConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        pointsConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        pointsConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        pointsConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        pointsConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        pointsConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        pointsConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        pointsConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        pointsConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        pointsConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        pointsConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert P to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        pointsConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        pointsConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        pointsConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        pointsConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        pointsConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        pointsConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        pointsConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        pointsConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        pointsConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        pointsConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        pointsConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        pointsConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });
  });


  describe('P', () => {
    it.each([1, 10, 100])('should yield a P measurement when given a number.', v => {
      expect(length["P"](v)).toEqual([v, "P"]);
      expect(picas(v)).toEqual([v, "P"]);
    });

    it.each([1, 10, 100])('should convert Mm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        picasConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        picasConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        picasConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        picasConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        picasConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        picasConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        picasConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        picasConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        picasConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        picasConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picasConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        picasConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        picasConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert in to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        picasConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        picasConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        picasConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        picasConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        picasConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        picasConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        picasConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        picasConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        picasConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        picasConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        picasConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });
  });


  describe('in', () => {
    it.each([1, 10, 100])('should yield a in measurement when given a number.', v => {
      expect(length["in"](v)).toEqual([v, "in"]);
      expect(inches(v)).toEqual([v, "in"]);
    });

    it.each([1, 10, 100])('should convert Mm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        inchesConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        inchesConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        inchesConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        inchesConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        inchesConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        inchesConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        inchesConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        inchesConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        inchesConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        inchesConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        inchesConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        inchesConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        inchesConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        inchesConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert ft to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        inchesConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        inchesConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        inchesConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        inchesConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        inchesConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        inchesConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        inchesConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        inchesConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        inchesConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        inchesConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });
  });


  describe('ft', () => {
    it.each([1, 10, 100])('should yield a ft measurement when given a number.', v => {
      expect(length["ft"](v)).toEqual([v, "ft"]);
      expect(feet(v)).toEqual([v, "ft"]);
    });

    it.each([1, 10, 100])('should convert Mm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        feetConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        feetConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        feetConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        feetConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        feetConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        feetConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        feetConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        feetConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        feetConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        feetConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        feetConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        feetConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        feetConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        feetConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        feetConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert yd to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        feetConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        feetConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        feetConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        feetConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        feetConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        feetConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        feetConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        feetConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        feetConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });
  });


  describe('yd', () => {
    it.each([1, 10, 100])('should yield a yd measurement when given a number.', v => {
      expect(length["yd"](v)).toEqual([v, "yd"]);
      expect(yards(v)).toEqual([v, "yd"]);
    });

    it.each([1, 10, 100])('should convert Mm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        yardsConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        yardsConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        yardsConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        yardsConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        yardsConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        yardsConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        yardsConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        yardsConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        yardsConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        yardsConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        yardsConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        yardsConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        yardsConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        yardsConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        yardsConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        yardsConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert mi to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        yardsConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        yardsConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        yardsConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        yardsConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        yardsConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        yardsConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        yardsConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        yardsConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mi', () => {
    it.each([1, 10, 100])('should yield a mi measurement when given a number.', v => {
      expect(length["mi"](v)).toEqual([v, "mi"]);
      expect(miles(v)).toEqual([v, "mi"]);
    });

    it.each([1, 10, 100])('should convert Mm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        milesConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        milesConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        milesConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        milesConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        milesConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        milesConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        milesConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milesConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milesConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        milesConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        milesConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        milesConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        milesConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        milesConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        milesConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        milesConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        milesConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert smi to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        milesConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        milesConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        milesConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        milesConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        milesConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        milesConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        milesConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });
  });


  describe('smi', () => {
    it.each([1, 10, 100])('should yield a smi measurement when given a number.', v => {
      expect(length["smi"](v)).toEqual([v, "smi"]);
      expect(scandinavianMiles(v)).toEqual([v, "smi"]);
    });

    it.each([1, 10, 100])('should convert Mm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert ly to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });
  });


  describe('ly', () => {
    it.each([1, 10, 100])('should yield a ly measurement when given a number.', v => {
      expect(length["ly"](v)).toEqual([v, "ly"]);
      expect(lightyears(v)).toEqual([v, "ly"]);
    });

    it.each([1, 10, 100])('should convert Mm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert NM to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });
  });


  describe('NM', () => {
    it.each([1, 10, 100])('should yield a NM measurement when given a number.', v => {
      expect(length["NM"](v)).toEqual([v, "NM"]);
      expect(nauticalMiles(v)).toEqual([v, "NM"]);
    });

    it.each([1, 10, 100])('should convert Mm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert ftm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        nauticalMilesConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });
  });


  describe('ftm', () => {
    it.each([1, 10, 100])('should yield a ftm measurement when given a number.', v => {
      expect(length["ftm"](v)).toEqual([v, "ftm"]);
      expect(fathoms(v)).toEqual([v, "ftm"]);
    });

    it.each([1, 10, 100])('should convert Mm to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert fur to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        fathomsConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });
  });


  describe('fur', () => {
    it.each([1, 10, 100])('should yield a fur measurement when given a number.', v => {
      expect(length["fur"](v)).toEqual([v, "fur"]);
      expect(furlongs(v)).toEqual([v, "fur"]);
    });

    it.each([1, 10, 100])('should convert Mm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert ua to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pc to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        furlongsConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });
  });


  describe('ua', () => {
    it.each([1, 10, 100])('should yield a ua measurement when given a number.', v => {
      expect(length["ua"](v)).toEqual([v, "ua"]);
      expect(astronomicalUnits(v)).toEqual([v, "ua"]);
    });

    it.each([1, 10, 100])('should convert Mm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert pc to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[1],
        parsecsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "pc"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });
  });


  describe('pc', () => {
    it.each([1, 10, 100])('should yield a pc measurement when given a number.', v => {
      expect(length["pc"](v)).toEqual([v, "pc"]);
      expect(parsecs(v)).toEqual([v, "pc"]);
    });

    it.each([1, 10, 100])('should convert Mm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        megametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kM to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        kilometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert hm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        hectometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dam to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        decametersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert m to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        metersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        decimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        centimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        millimetersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        micrometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        nanometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        picometersConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert tw to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        twipsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pt to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        pointsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert P to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        picasConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert in to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        inchesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ft to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        feetConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert yd to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        yardsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mi to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        milesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert smi to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        scandinavianMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ly to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        lightyearsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert NM to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        nauticalMilesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ftm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        fathomsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert fur to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        furlongsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ua to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        parsecsConversion[1],
        astronomicalUnitsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });


  });

});
