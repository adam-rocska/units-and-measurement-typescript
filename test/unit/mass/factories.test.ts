import {mass} from "!src/mass/factories";
import {kilograms, grams, decigrams, centigrams, milligrams, micrograms, nanograms, picograms, ounces, pounds, stones, metricTons, shortTons, carats, ouncesTroy, slugs} from "!src/mass/factories";
import {linearConversion} from "!src/conversion";

describe("!src/mass/factories aliasing", () => {
  describe('mass["kg"]', () => {
    it('should be aliased by "kilograms".', () => {
      expect(kilograms).toBe(mass["kg"]);
    });
  });


  describe('mass["g"]', () => {
    it('should be aliased by "grams".', () => {
      expect(grams).toBe(mass["g"]);
    });
  });


  describe('mass["dg"]', () => {
    it('should be aliased by "decigrams".', () => {
      expect(decigrams).toBe(mass["dg"]);
    });
  });


  describe('mass["cg"]', () => {
    it('should be aliased by "centigrams".', () => {
      expect(centigrams).toBe(mass["cg"]);
    });
  });


  describe('mass["mg"]', () => {
    it('should be aliased by "milligrams".', () => {
      expect(milligrams).toBe(mass["mg"]);
    });
  });


  describe('mass["µg"]', () => {
    it('should be aliased by "micrograms".', () => {
      expect(micrograms).toBe(mass["µg"]);
    });
  });


  describe('mass["ng"]', () => {
    it('should be aliased by "nanograms".', () => {
      expect(nanograms).toBe(mass["ng"]);
    });
  });


  describe('mass["pg"]', () => {
    it('should be aliased by "picograms".', () => {
      expect(picograms).toBe(mass["pg"]);
    });
  });


  describe('mass["oz"]', () => {
    it('should be aliased by "ounces".', () => {
      expect(ounces).toBe(mass["oz"]);
    });
  });


  describe('mass["lb"]', () => {
    it('should be aliased by "pounds".', () => {
      expect(pounds).toBe(mass["lb"]);
    });
  });


  describe('mass["st"]', () => {
    it('should be aliased by "stones".', () => {
      expect(stones).toBe(mass["st"]);
    });
  });


  describe('mass["t"]', () => {
    it('should be aliased by "metricTons".', () => {
      expect(metricTons).toBe(mass["t"]);
    });
  });


  describe('mass["ton"]', () => {
    it('should be aliased by "shortTons".', () => {
      expect(shortTons).toBe(mass["ton"]);
    });
  });


  describe('mass["ct"]', () => {
    it('should be aliased by "carats".', () => {
      expect(carats).toBe(mass["ct"]);
    });
  });


  describe('mass["oz t"]', () => {
    it('should be aliased by "ouncesTroy".', () => {
      expect(ouncesTroy).toBe(mass["oz t"]);
    });
  });


  describe('mass["slug"]', () => {
    it('should be aliased by "slugs".', () => {
      expect(slugs).toBe(mass["slug"]);
    });
  });

});

describe("mass", () => {
  describe('kg', () => {
    it.each([1, 10, 100])('should yield a kg measurement when given a number.', v => {
      expect(mass["kg"](v)).toEqual([v, "kg"]);
      expect(kilograms(v)).toEqual([v, "kg"]);
    });



    it.each([1, 10, 100])('should convert g to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        kilogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kg"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dg to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        kilogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kg"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cg to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        kilogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kg"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mg to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        kilogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kg"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µg to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        kilogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kg"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ng to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        kilogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kg"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pg to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        kilogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kg"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        kilogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kg"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert lb to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        kilogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kg"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert st to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        kilogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kg"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert t to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        kilogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kg"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ton to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        kilogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kg"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ct to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        kilogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kg"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz t to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        kilogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kg"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert slug to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        kilogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kg"] as const;
      const conversionCandidate = [v, "slug"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });
  });


  describe('g', () => {
    it.each([1, 10, 100])('should yield a g measurement when given a number.', v => {
      expect(mass["g"](v)).toEqual([v, "g"]);
      expect(grams(v)).toEqual([v, "g"]);
    });

    it.each([1, 10, 100])('should convert kg to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        gramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "g"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert dg to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        gramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "g"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cg to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        gramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "g"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mg to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        gramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "g"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µg to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        gramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "g"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ng to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        gramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "g"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pg to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        gramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "g"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        gramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "g"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert lb to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        gramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "g"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert st to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        gramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "g"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert t to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        gramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "g"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ton to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        gramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "g"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ct to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        gramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "g"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz t to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        gramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "g"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert slug to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        gramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "g"] as const;
      const conversionCandidate = [v, "slug"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });
  });


  describe('dg', () => {
    it.each([1, 10, 100])('should yield a dg measurement when given a number.', v => {
      expect(mass["dg"](v)).toEqual([v, "dg"]);
      expect(decigrams(v)).toEqual([v, "dg"]);
    });

    it.each([1, 10, 100])('should convert kg to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        decigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dg"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert g to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        decigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dg"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert cg to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        decigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dg"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mg to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        decigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dg"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µg to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        decigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dg"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ng to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        decigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dg"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pg to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        decigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dg"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        decigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dg"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert lb to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        decigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dg"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert st to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        decigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dg"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert t to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        decigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dg"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ton to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        decigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dg"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ct to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        decigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dg"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz t to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        decigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dg"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert slug to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        decigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "dg"] as const;
      const conversionCandidate = [v, "slug"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });
  });


  describe('cg', () => {
    it.each([1, 10, 100])('should yield a cg measurement when given a number.', v => {
      expect(mass["cg"](v)).toEqual([v, "cg"]);
      expect(centigrams(v)).toEqual([v, "cg"]);
    });

    it.each([1, 10, 100])('should convert kg to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        centigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cg"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert g to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        centigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cg"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dg to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        centigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cg"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert mg to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        centigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cg"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µg to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        centigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cg"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ng to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        centigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cg"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pg to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        centigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cg"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        centigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cg"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert lb to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        centigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cg"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert st to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        centigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cg"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert t to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        centigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cg"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ton to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        centigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cg"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ct to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        centigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cg"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz t to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        centigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cg"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert slug to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        centigramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "cg"] as const;
      const conversionCandidate = [v, "slug"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mg', () => {
    it.each([1, 10, 100])('should yield a mg measurement when given a number.', v => {
      expect(mass["mg"](v)).toEqual([v, "mg"]);
      expect(milligrams(v)).toEqual([v, "mg"]);
    });

    it.each([1, 10, 100])('should convert kg to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        milligramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mg"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert g to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        milligramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mg"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dg to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        milligramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mg"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cg to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        milligramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mg"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert µg to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        milligramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mg"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ng to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        milligramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mg"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pg to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        milligramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mg"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        milligramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mg"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert lb to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        milligramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mg"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert st to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        milligramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mg"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert t to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        milligramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mg"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ton to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        milligramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mg"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ct to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        milligramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mg"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz t to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        milligramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mg"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert slug to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        milligramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mg"] as const;
      const conversionCandidate = [v, "slug"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });
  });


  describe('µg', () => {
    it.each([1, 10, 100])('should yield a µg measurement when given a number.', v => {
      expect(mass["µg"](v)).toEqual([v, "µg"]);
      expect(micrograms(v)).toEqual([v, "µg"]);
    });

    it.each([1, 10, 100])('should convert kg to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        microgramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µg"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert g to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        microgramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µg"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dg to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        microgramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µg"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cg to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        microgramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µg"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mg to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        microgramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µg"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert ng to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        microgramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µg"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pg to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        microgramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µg"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        microgramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µg"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert lb to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        microgramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µg"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert st to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        microgramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µg"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert t to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        microgramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µg"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ton to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        microgramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µg"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ct to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        microgramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µg"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz t to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        microgramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µg"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert slug to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        microgramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µg"] as const;
      const conversionCandidate = [v, "slug"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });
  });


  describe('ng', () => {
    it.each([1, 10, 100])('should yield a ng measurement when given a number.', v => {
      expect(mass["ng"](v)).toEqual([v, "ng"]);
      expect(nanograms(v)).toEqual([v, "ng"]);
    });

    it.each([1, 10, 100])('should convert kg to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        nanogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ng"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert g to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        nanogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ng"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dg to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        nanogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ng"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cg to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        nanogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ng"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mg to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        nanogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ng"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µg to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        nanogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ng"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert pg to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        nanogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ng"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        nanogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ng"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert lb to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        nanogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ng"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert st to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        nanogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ng"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert t to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        nanogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ng"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ton to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        nanogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ng"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ct to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        nanogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ng"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz t to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        nanogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ng"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert slug to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        nanogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ng"] as const;
      const conversionCandidate = [v, "slug"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });
  });


  describe('pg', () => {
    it.each([1, 10, 100])('should yield a pg measurement when given a number.', v => {
      expect(mass["pg"](v)).toEqual([v, "pg"]);
      expect(picograms(v)).toEqual([v, "pg"]);
    });

    it.each([1, 10, 100])('should convert kg to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        picogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pg"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert g to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        picogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pg"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dg to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        picogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pg"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cg to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        picogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pg"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mg to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        picogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pg"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µg to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        picogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pg"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ng to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        picogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pg"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert oz to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        picogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pg"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert lb to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        picogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pg"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert st to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        picogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pg"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert t to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        picogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pg"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ton to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        picogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pg"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ct to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        picogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pg"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz t to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        picogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pg"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert slug to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        picogramsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "pg"] as const;
      const conversionCandidate = [v, "slug"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });
  });


  describe('oz', () => {
    it.each([1, 10, 100])('should yield a oz measurement when given a number.', v => {
      expect(mass["oz"](v)).toEqual([v, "oz"]);
      expect(ounces(v)).toEqual([v, "oz"]);
    });

    it.each([1, 10, 100])('should convert kg to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        ouncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert g to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        ouncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dg to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        ouncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cg to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        ouncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mg to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        ouncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µg to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        ouncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ng to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        ouncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pg to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        ouncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert lb to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        ouncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert st to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        ouncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert t to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        ouncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ton to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        ouncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ct to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        ouncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz t to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        ouncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert slug to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        ouncesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz"] as const;
      const conversionCandidate = [v, "slug"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });
  });


  describe('lb', () => {
    it.each([1, 10, 100])('should yield a lb measurement when given a number.', v => {
      expect(mass["lb"](v)).toEqual([v, "lb"]);
      expect(pounds(v)).toEqual([v, "lb"]);
    });

    it.each([1, 10, 100])('should convert kg to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        poundsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "lb"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert g to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        poundsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "lb"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dg to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        poundsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "lb"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cg to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        poundsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "lb"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mg to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        poundsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "lb"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µg to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        poundsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "lb"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ng to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        poundsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "lb"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pg to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        poundsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "lb"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        poundsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "lb"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert st to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        poundsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "lb"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert t to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        poundsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "lb"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ton to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        poundsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "lb"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ct to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        poundsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "lb"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz t to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        poundsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "lb"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert slug to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        poundsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "lb"] as const;
      const conversionCandidate = [v, "slug"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });
  });


  describe('st', () => {
    it.each([1, 10, 100])('should yield a st measurement when given a number.', v => {
      expect(mass["st"](v)).toEqual([v, "st"]);
      expect(stones(v)).toEqual([v, "st"]);
    });

    it.each([1, 10, 100])('should convert kg to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        stonesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "st"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert g to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        stonesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "st"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dg to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        stonesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "st"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cg to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        stonesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "st"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mg to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        stonesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "st"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µg to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        stonesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "st"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ng to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        stonesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "st"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pg to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        stonesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "st"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        stonesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "st"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert lb to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        stonesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "st"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert t to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        stonesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "st"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ton to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        stonesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "st"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ct to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        stonesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "st"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz t to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        stonesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "st"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert slug to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        stonesConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "st"] as const;
      const conversionCandidate = [v, "slug"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });
  });


  describe('t', () => {
    it.each([1, 10, 100])('should yield a t measurement when given a number.', v => {
      expect(mass["t"](v)).toEqual([v, "t"]);
      expect(metricTons(v)).toEqual([v, "t"]);
    });

    it.each([1, 10, 100])('should convert kg to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        metricTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "t"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert g to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        metricTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "t"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dg to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        metricTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "t"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cg to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        metricTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "t"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mg to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        metricTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "t"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µg to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        metricTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "t"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ng to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        metricTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "t"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pg to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        metricTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "t"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        metricTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "t"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert lb to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        metricTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "t"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert st to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        metricTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "t"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert ton to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        metricTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "t"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ct to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        metricTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "t"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz t to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        metricTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "t"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert slug to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        metricTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "t"] as const;
      const conversionCandidate = [v, "slug"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });
  });


  describe('ton', () => {
    it.each([1, 10, 100])('should yield a ton measurement when given a number.', v => {
      expect(mass["ton"](v)).toEqual([v, "ton"]);
      expect(shortTons(v)).toEqual([v, "ton"]);
    });

    it.each([1, 10, 100])('should convert kg to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        shortTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ton"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert g to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        shortTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ton"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dg to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        shortTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ton"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cg to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        shortTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ton"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mg to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        shortTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ton"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µg to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        shortTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ton"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ng to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        shortTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ton"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pg to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        shortTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ton"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        shortTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ton"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert lb to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        shortTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ton"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert st to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        shortTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ton"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert t to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        shortTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ton"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert ct to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        shortTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ton"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz t to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        shortTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ton"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert slug to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        shortTonsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ton"] as const;
      const conversionCandidate = [v, "slug"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });
  });


  describe('ct', () => {
    it.each([1, 10, 100])('should yield a ct measurement when given a number.', v => {
      expect(mass["ct"](v)).toEqual([v, "ct"]);
      expect(carats(v)).toEqual([v, "ct"]);
    });

    it.each([1, 10, 100])('should convert kg to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        caratsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ct"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert g to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        caratsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ct"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dg to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        caratsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ct"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cg to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        caratsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ct"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mg to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        caratsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ct"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µg to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        caratsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ct"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ng to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        caratsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ct"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pg to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        caratsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ct"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        caratsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ct"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert lb to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        caratsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ct"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert st to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        caratsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ct"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert t to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        caratsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ct"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ton to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        caratsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ct"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert oz t to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        caratsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ct"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert slug to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        caratsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "ct"] as const;
      const conversionCandidate = [v, "slug"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });
  });


  describe('oz t', () => {
    it.each([1, 10, 100])('should yield a oz t measurement when given a number.', v => {
      expect(mass["oz t"](v)).toEqual([v, "oz t"]);
      expect(ouncesTroy(v)).toEqual([v, "oz t"]);
    });

    it.each([1, 10, 100])('should convert kg to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        ouncesTroyConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert g to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        ouncesTroyConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dg to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        ouncesTroyConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cg to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        ouncesTroyConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mg to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        ouncesTroyConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µg to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        ouncesTroyConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ng to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        ouncesTroyConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pg to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        ouncesTroyConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        ouncesTroyConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert lb to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        ouncesTroyConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert st to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        ouncesTroyConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert t to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        ouncesTroyConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ton to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        ouncesTroyConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ct to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        ouncesTroyConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert slug to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        ouncesTroyConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "slug"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });
  });


  describe('slug', () => {
    it.each([1, 10, 100])('should yield a slug measurement when given a number.', v => {
      expect(mass["slug"](v)).toEqual([v, "slug"]);
      expect(slugs(v)).toEqual([v, "slug"]);
    });

    it.each([1, 10, 100])('should convert kg to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        slugsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "slug"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert g to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        slugsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "slug"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert dg to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        slugsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "slug"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert cg to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        slugsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "slug"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mg to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        slugsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "slug"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µg to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        slugsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "slug"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ng to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        slugsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "slug"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert pg to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        slugsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "slug"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        slugsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "slug"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert lb to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        slugsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "slug"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert st to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        slugsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "slug"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert t to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        slugsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "slug"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ton to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        slugsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "slug"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert ct to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        slugsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "slug"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert oz t to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        slugsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "slug"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });


  });

});
