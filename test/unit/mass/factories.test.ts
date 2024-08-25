import {mass} from "!src/mass/factories";
import {kilograms, grams, decigrams, centigrams, milligrams, micrograms, nanograms, picograms, ounces, pounds, stones, metricTons, shortTons, carats, ouncesTroy, slugs} from "!src/mass/factories";
import {linearConversion} from "!src/dimension/conversion";

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



    it.each([1, 10, 100])('should convert %dg to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        kilogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kg"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddg to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        kilogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kg"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcg to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        kilogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kg"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmg to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        kilogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kg"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµg to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        kilogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kg"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dng to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        kilogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kg"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpg to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        kilogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kg"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        kilogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kg"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dlb to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        kilogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kg"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dst to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        kilogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kg"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dt to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        kilogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kg"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dton to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        kilogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kg"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dct to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        kilogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kg"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz t to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        kilogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kg"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["kg"](conversionCandidate)).toEqual(expected);
      expect(kilograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dslug to kg.', v => {
      const kilogramsConversion = linearConversion(1);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        kilogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kg"] as const;
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

    it.each([1, 10, 100])('should convert %dkg to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        gramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "g"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %ddg to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        gramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "g"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcg to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        gramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "g"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmg to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        gramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "g"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµg to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        gramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "g"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dng to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        gramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "g"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpg to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        gramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "g"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        gramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "g"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dlb to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        gramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "g"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dst to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        gramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "g"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dt to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        gramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "g"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dton to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        gramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "g"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dct to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        gramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "g"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz t to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        gramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "g"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["g"](conversionCandidate)).toEqual(expected);
      expect(grams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dslug to g.', v => {
      const gramsConversion = linearConversion(0.001);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        gramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "g"] as const;
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

    it.each([1, 10, 100])('should convert %dkg to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        decigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dg"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dg to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        decigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dg"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dcg to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        decigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dg"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmg to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        decigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dg"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµg to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        decigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dg"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dng to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        decigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dg"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpg to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        decigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dg"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        decigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dg"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dlb to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        decigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dg"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dst to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        decigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dg"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dt to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        decigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dg"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dton to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        decigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dg"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dct to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        decigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dg"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz t to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        decigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dg"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["dg"](conversionCandidate)).toEqual(expected);
      expect(decigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dslug to dg.', v => {
      const decigramsConversion = linearConversion(0.0001);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        decigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "dg"] as const;
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

    it.each([1, 10, 100])('should convert %dkg to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        centigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cg"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dg to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        centigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cg"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddg to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        centigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cg"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dmg to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        centigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cg"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµg to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        centigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cg"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dng to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        centigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cg"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpg to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        centigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cg"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        centigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cg"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dlb to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        centigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cg"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dst to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        centigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cg"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dt to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        centigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cg"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dton to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        centigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cg"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dct to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        centigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cg"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz t to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        centigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cg"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["cg"](conversionCandidate)).toEqual(expected);
      expect(centigrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dslug to cg.', v => {
      const centigramsConversion = linearConversion(0.00001);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        centigramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "cg"] as const;
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

    it.each([1, 10, 100])('should convert %dkg to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        milligramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mg"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dg to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        milligramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mg"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddg to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        milligramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mg"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcg to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        milligramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mg"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dµg to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        milligramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mg"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dng to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        milligramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mg"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpg to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        milligramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mg"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        milligramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mg"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dlb to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        milligramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mg"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dst to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        milligramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mg"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dt to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        milligramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mg"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dton to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        milligramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mg"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dct to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        milligramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mg"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz t to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        milligramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mg"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["mg"](conversionCandidate)).toEqual(expected);
      expect(milligrams(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dslug to mg.', v => {
      const milligramsConversion = linearConversion(0.000001);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        milligramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mg"] as const;
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

    it.each([1, 10, 100])('should convert %dkg to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        microgramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µg"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dg to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        microgramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µg"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddg to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        microgramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µg"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcg to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        microgramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µg"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmg to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        microgramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µg"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dng to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        microgramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µg"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpg to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        microgramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µg"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        microgramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µg"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dlb to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        microgramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µg"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dst to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        microgramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µg"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dt to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        microgramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µg"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dton to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        microgramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µg"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dct to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        microgramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µg"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz t to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        microgramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µg"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["µg"](conversionCandidate)).toEqual(expected);
      expect(micrograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dslug to µg.', v => {
      const microgramsConversion = linearConversion(1e-9);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        microgramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µg"] as const;
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

    it.each([1, 10, 100])('should convert %dkg to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        nanogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ng"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dg to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        nanogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ng"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddg to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        nanogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ng"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcg to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        nanogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ng"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmg to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        nanogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ng"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµg to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        nanogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ng"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dpg to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        nanogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ng"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        nanogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ng"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dlb to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        nanogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ng"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dst to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        nanogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ng"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dt to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        nanogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ng"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dton to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        nanogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ng"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dct to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        nanogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ng"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz t to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        nanogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ng"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["ng"](conversionCandidate)).toEqual(expected);
      expect(nanograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dslug to ng.', v => {
      const nanogramsConversion = linearConversion(1e-12);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        nanogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ng"] as const;
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

    it.each([1, 10, 100])('should convert %dkg to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        picogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pg"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dg to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        picogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pg"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddg to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        picogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pg"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcg to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        picogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pg"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmg to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        picogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pg"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµg to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        picogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pg"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dng to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        picogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pg"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %doz to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        picogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pg"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dlb to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        picogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pg"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dst to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        picogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pg"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dt to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        picogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pg"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dton to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        picogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pg"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dct to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        picogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pg"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz t to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        picogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pg"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["pg"](conversionCandidate)).toEqual(expected);
      expect(picograms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dslug to pg.', v => {
      const picogramsConversion = linearConversion(1e-15);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        picogramsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "pg"] as const;
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

    it.each([1, 10, 100])('should convert %dkg to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        ouncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dg to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        ouncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddg to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        ouncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcg to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        ouncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmg to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        ouncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµg to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        ouncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dng to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        ouncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpg to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        ouncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dlb to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        ouncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dst to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        ouncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dt to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        ouncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dton to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        ouncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dct to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        ouncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz t to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        ouncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["oz"](conversionCandidate)).toEqual(expected);
      expect(ounces(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dslug to oz.', v => {
      const ouncesConversion = linearConversion(0.0283495);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        ouncesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz"] as const;
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

    it.each([1, 10, 100])('should convert %dkg to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        poundsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "lb"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dg to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        poundsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "lb"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddg to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        poundsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "lb"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcg to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        poundsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "lb"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmg to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        poundsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "lb"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµg to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        poundsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "lb"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dng to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        poundsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "lb"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpg to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        poundsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "lb"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        poundsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "lb"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dst to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        poundsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "lb"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dt to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        poundsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "lb"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dton to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        poundsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "lb"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dct to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        poundsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "lb"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz t to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        poundsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "lb"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["lb"](conversionCandidate)).toEqual(expected);
      expect(pounds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dslug to lb.', v => {
      const poundsConversion = linearConversion(0.453592);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        poundsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "lb"] as const;
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

    it.each([1, 10, 100])('should convert %dkg to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        stonesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "st"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dg to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        stonesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "st"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddg to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        stonesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "st"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcg to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        stonesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "st"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmg to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        stonesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "st"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµg to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        stonesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "st"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dng to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        stonesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "st"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpg to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        stonesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "st"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        stonesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "st"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dlb to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        stonesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "st"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dt to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        stonesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "st"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dton to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        stonesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "st"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dct to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        stonesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "st"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz t to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        stonesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "st"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["st"](conversionCandidate)).toEqual(expected);
      expect(stones(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dslug to st.', v => {
      const stonesConversion = linearConversion(0.157473);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        stonesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "st"] as const;
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

    it.each([1, 10, 100])('should convert %dkg to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        metricTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "t"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dg to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        metricTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "t"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddg to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        metricTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "t"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcg to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        metricTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "t"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmg to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        metricTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "t"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµg to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        metricTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "t"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dng to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        metricTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "t"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpg to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        metricTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "t"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        metricTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "t"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dlb to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        metricTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "t"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dst to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        metricTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "t"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dton to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        metricTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "t"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dct to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        metricTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "t"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz t to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        metricTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "t"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["t"](conversionCandidate)).toEqual(expected);
      expect(metricTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dslug to t.', v => {
      const metricTonsConversion = linearConversion(1000);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        metricTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "t"] as const;
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

    it.each([1, 10, 100])('should convert %dkg to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        shortTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ton"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dg to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        shortTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ton"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddg to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        shortTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ton"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcg to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        shortTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ton"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmg to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        shortTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ton"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµg to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        shortTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ton"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dng to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        shortTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ton"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpg to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        shortTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ton"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        shortTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ton"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dlb to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        shortTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ton"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dst to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        shortTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ton"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dt to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        shortTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ton"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dct to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        shortTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ton"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz t to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        shortTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ton"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["ton"](conversionCandidate)).toEqual(expected);
      expect(shortTons(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dslug to ton.', v => {
      const shortTonsConversion = linearConversion(907.185);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        shortTonsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ton"] as const;
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

    it.each([1, 10, 100])('should convert %dkg to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        caratsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ct"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dg to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        caratsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ct"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddg to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        caratsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ct"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcg to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        caratsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ct"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmg to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        caratsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ct"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµg to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        caratsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ct"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dng to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        caratsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ct"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpg to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        caratsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ct"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        caratsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ct"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dlb to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        caratsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ct"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dst to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        caratsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ct"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dt to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        caratsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ct"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dton to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        caratsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ct"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %doz t to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        caratsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ct"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["ct"](conversionCandidate)).toEqual(expected);
      expect(carats(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dslug to ct.', v => {
      const caratsConversion = linearConversion(0.0002);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        caratsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ct"] as const;
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

    it.each([1, 10, 100])('should convert %dkg to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        ouncesTroyConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dg to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        ouncesTroyConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddg to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        ouncesTroyConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcg to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        ouncesTroyConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmg to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        ouncesTroyConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµg to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        ouncesTroyConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dng to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        ouncesTroyConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpg to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        ouncesTroyConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        ouncesTroyConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dlb to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        ouncesTroyConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dst to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        ouncesTroyConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dt to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        ouncesTroyConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dton to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        ouncesTroyConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dct to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        ouncesTroyConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz t"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["oz t"](conversionCandidate)).toEqual(expected);
      expect(ouncesTroy(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dslug to oz t.', v => {
      const ouncesTroyConversion = linearConversion(0.03110348);
      const slugsConversion = linearConversion(14.5939);

      const [toBase, fromBase] = [
        slugsConversion[0],
        ouncesTroyConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "oz t"] as const;
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

    it.each([1, 10, 100])('should convert %dkg to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const kilogramsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilogramsConversion[0],
        slugsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "slug"] as const;
      const conversionCandidate = [v, "kg"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dg to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const gramsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gramsConversion[0],
        slugsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "slug"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %ddg to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const decigramsConversion = linearConversion(0.0001);

      const [toBase, fromBase] = [
        decigramsConversion[0],
        slugsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "slug"] as const;
      const conversionCandidate = [v, "dg"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dcg to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const centigramsConversion = linearConversion(0.00001);

      const [toBase, fromBase] = [
        centigramsConversion[0],
        slugsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "slug"] as const;
      const conversionCandidate = [v, "cg"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmg to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const milligramsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milligramsConversion[0],
        slugsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "slug"] as const;
      const conversionCandidate = [v, "mg"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµg to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const microgramsConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microgramsConversion[0],
        slugsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "slug"] as const;
      const conversionCandidate = [v, "µg"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dng to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const nanogramsConversion = linearConversion(1e-12);

      const [toBase, fromBase] = [
        nanogramsConversion[0],
        slugsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "slug"] as const;
      const conversionCandidate = [v, "ng"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpg to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const picogramsConversion = linearConversion(1e-15);

      const [toBase, fromBase] = [
        picogramsConversion[0],
        slugsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "slug"] as const;
      const conversionCandidate = [v, "pg"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const ouncesConversion = linearConversion(0.0283495);

      const [toBase, fromBase] = [
        ouncesConversion[0],
        slugsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "slug"] as const;
      const conversionCandidate = [v, "oz"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dlb to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const poundsConversion = linearConversion(0.453592);

      const [toBase, fromBase] = [
        poundsConversion[0],
        slugsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "slug"] as const;
      const conversionCandidate = [v, "lb"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dst to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const stonesConversion = linearConversion(0.157473);

      const [toBase, fromBase] = [
        stonesConversion[0],
        slugsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "slug"] as const;
      const conversionCandidate = [v, "st"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dt to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const metricTonsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        metricTonsConversion[0],
        slugsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "slug"] as const;
      const conversionCandidate = [v, "t"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dton to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const shortTonsConversion = linearConversion(907.185);

      const [toBase, fromBase] = [
        shortTonsConversion[0],
        slugsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "slug"] as const;
      const conversionCandidate = [v, "ton"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dct to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const caratsConversion = linearConversion(0.0002);

      const [toBase, fromBase] = [
        caratsConversion[0],
        slugsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "slug"] as const;
      const conversionCandidate = [v, "ct"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %doz t to slug.', v => {
      const slugsConversion = linearConversion(14.5939);
      const ouncesTroyConversion = linearConversion(0.03110348);

      const [toBase, fromBase] = [
        ouncesTroyConversion[0],
        slugsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "slug"] as const;
      const conversionCandidate = [v, "oz t"] as const;

      expect(mass["slug"](conversionCandidate)).toEqual(expected);
      expect(slugs(conversionCandidate)).toEqual(expected);
    });


  });

});
