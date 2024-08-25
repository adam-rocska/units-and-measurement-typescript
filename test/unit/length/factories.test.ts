import {length} from "!src/length/factories";
import {megameters, kilometers, hectometers, decameters, meters, decimeters, centimeters, millimeters, micrometers, nanometers, picometers, twips, points, picas, inches, feet, yards, miles, scandinavianMiles, lightyears, nauticalMiles, fathoms, furlongs, astronomicalUnits, parsecs} from "!src/length/factories";
import {linearConversion} from "!src/dimension/conversion";

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



    it.each([1, 10, 100])('should convert %dkM to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        megametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Mm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["Mm"](conversionCandidate)).toEqual(expected);
      expect(megameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to Mm.', v => {
      const megametersConversion = linearConversion(1000000);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        megametersConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dhm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        kilometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kM"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["kM"](conversionCandidate)).toEqual(expected);
      expect(kilometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to kM.', v => {
      const kilometersConversion = linearConversion(1000);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        kilometersConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %ddam to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        hectometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["hm"](conversionCandidate)).toEqual(expected);
      expect(hectometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to hm.', v => {
      const hectometersConversion = linearConversion(100);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        hectometersConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to dam.', v => {
      const decametersConversion = linearConversion(10);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to dam.', v => {
      const decametersConversion = linearConversion(10);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to dam.', v => {
      const decametersConversion = linearConversion(10);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to dam.', v => {
      const decametersConversion = linearConversion(10);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to dam.', v => {
      const decametersConversion = linearConversion(10);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to dam.', v => {
      const decametersConversion = linearConversion(10);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to dam.', v => {
      const decametersConversion = linearConversion(10);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to dam.', v => {
      const decametersConversion = linearConversion(10);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to dam.', v => {
      const decametersConversion = linearConversion(10);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to dam.', v => {
      const decametersConversion = linearConversion(10);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to dam.', v => {
      const decametersConversion = linearConversion(10);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to dam.', v => {
      const decametersConversion = linearConversion(10);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to dam.', v => {
      const decametersConversion = linearConversion(10);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to dam.', v => {
      const decametersConversion = linearConversion(10);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        decametersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dam"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["dam"](conversionCandidate)).toEqual(expected);
      expect(decameters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to dam.', v => {
      const decametersConversion = linearConversion(10);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        decametersConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to m.', v => {
      const metersConversion = linearConversion(1);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to m.', v => {
      const metersConversion = linearConversion(1);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to m.', v => {
      const metersConversion = linearConversion(1);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to m.', v => {
      const metersConversion = linearConversion(1);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %ddm to m.', v => {
      const metersConversion = linearConversion(1);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to m.', v => {
      const metersConversion = linearConversion(1);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to m.', v => {
      const metersConversion = linearConversion(1);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to m.', v => {
      const metersConversion = linearConversion(1);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to m.', v => {
      const metersConversion = linearConversion(1);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to m.', v => {
      const metersConversion = linearConversion(1);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to m.', v => {
      const metersConversion = linearConversion(1);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to m.', v => {
      const metersConversion = linearConversion(1);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to m.', v => {
      const metersConversion = linearConversion(1);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to m.', v => {
      const metersConversion = linearConversion(1);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to m.', v => {
      const metersConversion = linearConversion(1);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to m.', v => {
      const metersConversion = linearConversion(1);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to m.', v => {
      const metersConversion = linearConversion(1);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to m.', v => {
      const metersConversion = linearConversion(1);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to m.', v => {
      const metersConversion = linearConversion(1);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to m.', v => {
      const metersConversion = linearConversion(1);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to m.', v => {
      const metersConversion = linearConversion(1);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to m.', v => {
      const metersConversion = linearConversion(1);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to m.', v => {
      const metersConversion = linearConversion(1);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        metersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "m"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["m"](conversionCandidate)).toEqual(expected);
      expect(meters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to m.', v => {
      const metersConversion = linearConversion(1);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        metersConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dcm to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        decimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["dm"](conversionCandidate)).toEqual(expected);
      expect(decimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to dm.', v => {
      const decimetersConversion = linearConversion(0.1);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        decimetersConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dmm to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        centimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["cm"](conversionCandidate)).toEqual(expected);
      expect(centimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to cm.', v => {
      const centimetersConversion = linearConversion(0.01);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        centimetersConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dµm to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        millimetersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["mm"](conversionCandidate)).toEqual(expected);
      expect(millimeters(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to mm.', v => {
      const millimetersConversion = linearConversion(0.001);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        millimetersConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dnm to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        micrometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["µm"](conversionCandidate)).toEqual(expected);
      expect(micrometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to µm.', v => {
      const micrometersConversion = linearConversion(0.000001);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        micrometersConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dpm to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        nanometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["nm"](conversionCandidate)).toEqual(expected);
      expect(nanometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to nm.', v => {
      const nanometersConversion = linearConversion(1e-9);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        nanometersConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dtw to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        picometersConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["pm"](conversionCandidate)).toEqual(expected);
      expect(picometers(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to pm.', v => {
      const picometersConversion = linearConversion(1e-12);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        picometersConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dpt to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        twipsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "tw"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["tw"](conversionCandidate)).toEqual(expected);
      expect(twips(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to tw.', v => {
      const twipsConversion = linearConversion(0.00001763888888888889);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        twipsConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dP to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        pointsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pt"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["pt"](conversionCandidate)).toEqual(expected);
      expect(points(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to pt.', v => {
      const pointsConversion = linearConversion(0.0003527777777777778);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        pointsConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %din to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        picasConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "P"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["P"](conversionCandidate)).toEqual(expected);
      expect(picas(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to P.', v => {
      const picasConversion = linearConversion(0.004233333333333334);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        picasConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dft to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        inchesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "in"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["in"](conversionCandidate)).toEqual(expected);
      expect(inches(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to in.', v => {
      const inchesConversion = linearConversion(0.0254);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        inchesConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dyd to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        feetConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ft"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["ft"](conversionCandidate)).toEqual(expected);
      expect(feet(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to ft.', v => {
      const feetConversion = linearConversion(0.3048);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        feetConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dmi to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        yardsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "yd"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["yd"](conversionCandidate)).toEqual(expected);
      expect(yards(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to yd.', v => {
      const yardsConversion = linearConversion(0.9144);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        yardsConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dsmi to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        milesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mi"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["mi"](conversionCandidate)).toEqual(expected);
      expect(miles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to mi.', v => {
      const milesConversion = linearConversion(1609.34);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        milesConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dly to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        scandinavianMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "smi"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["smi"](conversionCandidate)).toEqual(expected);
      expect(scandinavianMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to smi.', v => {
      const scandinavianMilesConversion = linearConversion(10000);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        scandinavianMilesConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dNM to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        lightyearsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ly"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["ly"](conversionCandidate)).toEqual(expected);
      expect(lightyears(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to ly.', v => {
      const lightyearsConversion = linearConversion(9461000000000000);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        lightyearsConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dftm to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        nauticalMilesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "NM"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["NM"](conversionCandidate)).toEqual(expected);
      expect(nauticalMiles(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to NM.', v => {
      const nauticalMilesConversion = linearConversion(1852);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        nauticalMilesConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dfur to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        fathomsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ftm"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["ftm"](conversionCandidate)).toEqual(expected);
      expect(fathoms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to ftm.', v => {
      const fathomsConversion = linearConversion(1.8288);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        fathomsConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dua to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        furlongsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "fur"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["fur"](conversionCandidate)).toEqual(expected);
      expect(furlongs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpc to fur.', v => {
      const furlongsConversion = linearConversion(201.168);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        furlongsConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        astronomicalUnitsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ua"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["ua"](conversionCandidate)).toEqual(expected);
      expect(astronomicalUnits(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dpc to ua.', v => {
      const astronomicalUnitsConversion = linearConversion(149600000000);
      const parsecsConversion = linearConversion(30860000000000000);

      const [toBase, fromBase] = [
        parsecsConversion[0],
        astronomicalUnitsConversion[1],
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

    it.each([1, 10, 100])('should convert %dMm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const megametersConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megametersConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "Mm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkM to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const kilometersConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilometersConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "kM"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const hectometersConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectometersConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "hm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddam to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const decametersConversion = linearConversion(10);

      const [toBase, fromBase] = [
        decametersConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "dam"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const metersConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "m"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const decimetersConversion = linearConversion(0.1);

      const [toBase, fromBase] = [
        decimetersConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "dm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const centimetersConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        centimetersConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "cm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const millimetersConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millimetersConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "mm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const micrometersConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        micrometersConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "µm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const nanometersConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanometersConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "nm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const picometersConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        picometersConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "pm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dtw to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const twipsConversion = linearConversion(0.00001763888888888889);

      const [toBase, fromBase] = [
        twipsConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "tw"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpt to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const pointsConversion = linearConversion(0.0003527777777777778);

      const [toBase, fromBase] = [
        pointsConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "pt"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dP to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const picasConversion = linearConversion(0.004233333333333334);

      const [toBase, fromBase] = [
        picasConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "P"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %din to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const inchesConversion = linearConversion(0.0254);

      const [toBase, fromBase] = [
        inchesConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "in"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dft to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const feetConversion = linearConversion(0.3048);

      const [toBase, fromBase] = [
        feetConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "ft"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dyd to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const yardsConversion = linearConversion(0.9144);

      const [toBase, fromBase] = [
        yardsConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "yd"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmi to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const milesConversion = linearConversion(1609.34);

      const [toBase, fromBase] = [
        milesConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "mi"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dsmi to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const scandinavianMilesConversion = linearConversion(10000);

      const [toBase, fromBase] = [
        scandinavianMilesConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "smi"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dly to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const lightyearsConversion = linearConversion(9461000000000000);

      const [toBase, fromBase] = [
        lightyearsConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "ly"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dNM to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const nauticalMilesConversion = linearConversion(1852);

      const [toBase, fromBase] = [
        nauticalMilesConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "NM"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dftm to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const fathomsConversion = linearConversion(1.8288);

      const [toBase, fromBase] = [
        fathomsConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "ftm"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dfur to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const furlongsConversion = linearConversion(201.168);

      const [toBase, fromBase] = [
        furlongsConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "fur"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dua to pc.', v => {
      const parsecsConversion = linearConversion(30860000000000000);
      const astronomicalUnitsConversion = linearConversion(149600000000);

      const [toBase, fromBase] = [
        astronomicalUnitsConversion[0],
        parsecsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pc"] as const;
      const conversionCandidate = [v, "ua"] as const;

      expect(length["pc"](conversionCandidate)).toEqual(expected);
      expect(parsecs(conversionCandidate)).toEqual(expected);
    });


  });

});
