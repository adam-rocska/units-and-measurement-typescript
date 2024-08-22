import {electricCurrent} from "!src/electric-current/factories";
import {megaamperes, kiloamperes, amperes, milliamperes, microamperes} from "!src/electric-current/factories";
import {linearConversion} from "!src/conversion";

describe("!src/electric-current/factories aliasing", () => {
  describe('electricCurrent["MA"]', () => {
    it('should be aliased by "megaamperes".', () => {
      expect(megaamperes).toBe(electricCurrent["MA"]);
    });
  });


  describe('electricCurrent["kA"]', () => {
    it('should be aliased by "kiloamperes".', () => {
      expect(kiloamperes).toBe(electricCurrent["kA"]);
    });
  });


  describe('electricCurrent["A"]', () => {
    it('should be aliased by "amperes".', () => {
      expect(amperes).toBe(electricCurrent["A"]);
    });
  });


  describe('electricCurrent["mA"]', () => {
    it('should be aliased by "milliamperes".', () => {
      expect(milliamperes).toBe(electricCurrent["mA"]);
    });
  });


  describe('electricCurrent["µA"]', () => {
    it('should be aliased by "microamperes".', () => {
      expect(microamperes).toBe(electricCurrent["µA"]);
    });
  });

});

describe("electricCurrent", () => {
  describe('MA', () => {
    it.each([1, 10, 100])('should yield a MA measurement when given a number.', v => {
      expect(electricCurrent["MA"](v)).toEqual([v, "MA"]);
      expect(megaamperes(v)).toEqual([v, "MA"]);
    });



    it.each([1, 10, 100])('should convert kA to MA.', v => {
      const megaamperesConversion = linearConversion(1000000);
      const kiloamperesConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        megaamperesConversion[1],
        kiloamperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MA"] as const;
      const conversionCandidate = [v, "kA"] as const;

      expect(electricCurrent["MA"](conversionCandidate)).toEqual(expected);
      expect(megaamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert A to MA.', v => {
      const megaamperesConversion = linearConversion(1000000);
      const amperesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        megaamperesConversion[1],
        amperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MA"] as const;
      const conversionCandidate = [v, "A"] as const;

      expect(electricCurrent["MA"](conversionCandidate)).toEqual(expected);
      expect(megaamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mA to MA.', v => {
      const megaamperesConversion = linearConversion(1000000);
      const milliamperesConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        megaamperesConversion[1],
        milliamperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MA"] as const;
      const conversionCandidate = [v, "mA"] as const;

      expect(electricCurrent["MA"](conversionCandidate)).toEqual(expected);
      expect(megaamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µA to MA.', v => {
      const megaamperesConversion = linearConversion(1000000);
      const microamperesConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        megaamperesConversion[1],
        microamperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MA"] as const;
      const conversionCandidate = [v, "µA"] as const;

      expect(electricCurrent["MA"](conversionCandidate)).toEqual(expected);
      expect(megaamperes(conversionCandidate)).toEqual(expected);
    });
  });


  describe('kA', () => {
    it.each([1, 10, 100])('should yield a kA measurement when given a number.', v => {
      expect(electricCurrent["kA"](v)).toEqual([v, "kA"]);
      expect(kiloamperes(v)).toEqual([v, "kA"]);
    });

    it.each([1, 10, 100])('should convert MA to kA.', v => {
      const kiloamperesConversion = linearConversion(1000);
      const megaamperesConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        kiloamperesConversion[1],
        megaamperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kA"] as const;
      const conversionCandidate = [v, "MA"] as const;

      expect(electricCurrent["kA"](conversionCandidate)).toEqual(expected);
      expect(kiloamperes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert A to kA.', v => {
      const kiloamperesConversion = linearConversion(1000);
      const amperesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kiloamperesConversion[1],
        amperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kA"] as const;
      const conversionCandidate = [v, "A"] as const;

      expect(electricCurrent["kA"](conversionCandidate)).toEqual(expected);
      expect(kiloamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mA to kA.', v => {
      const kiloamperesConversion = linearConversion(1000);
      const milliamperesConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        kiloamperesConversion[1],
        milliamperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kA"] as const;
      const conversionCandidate = [v, "mA"] as const;

      expect(electricCurrent["kA"](conversionCandidate)).toEqual(expected);
      expect(kiloamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µA to kA.', v => {
      const kiloamperesConversion = linearConversion(1000);
      const microamperesConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        kiloamperesConversion[1],
        microamperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kA"] as const;
      const conversionCandidate = [v, "µA"] as const;

      expect(electricCurrent["kA"](conversionCandidate)).toEqual(expected);
      expect(kiloamperes(conversionCandidate)).toEqual(expected);
    });
  });


  describe('A', () => {
    it.each([1, 10, 100])('should yield a A measurement when given a number.', v => {
      expect(electricCurrent["A"](v)).toEqual([v, "A"]);
      expect(amperes(v)).toEqual([v, "A"]);
    });

    it.each([1, 10, 100])('should convert MA to A.', v => {
      const amperesConversion = linearConversion(1);
      const megaamperesConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        amperesConversion[1],
        megaamperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "A"] as const;
      const conversionCandidate = [v, "MA"] as const;

      expect(electricCurrent["A"](conversionCandidate)).toEqual(expected);
      expect(amperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kA to A.', v => {
      const amperesConversion = linearConversion(1);
      const kiloamperesConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        amperesConversion[1],
        kiloamperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "A"] as const;
      const conversionCandidate = [v, "kA"] as const;

      expect(electricCurrent["A"](conversionCandidate)).toEqual(expected);
      expect(amperes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert mA to A.', v => {
      const amperesConversion = linearConversion(1);
      const milliamperesConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        amperesConversion[1],
        milliamperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "A"] as const;
      const conversionCandidate = [v, "mA"] as const;

      expect(electricCurrent["A"](conversionCandidate)).toEqual(expected);
      expect(amperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µA to A.', v => {
      const amperesConversion = linearConversion(1);
      const microamperesConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        amperesConversion[1],
        microamperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "A"] as const;
      const conversionCandidate = [v, "µA"] as const;

      expect(electricCurrent["A"](conversionCandidate)).toEqual(expected);
      expect(amperes(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mA', () => {
    it.each([1, 10, 100])('should yield a mA measurement when given a number.', v => {
      expect(electricCurrent["mA"](v)).toEqual([v, "mA"]);
      expect(milliamperes(v)).toEqual([v, "mA"]);
    });

    it.each([1, 10, 100])('should convert MA to mA.', v => {
      const milliamperesConversion = linearConversion(0.001);
      const megaamperesConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        milliamperesConversion[1],
        megaamperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mA"] as const;
      const conversionCandidate = [v, "MA"] as const;

      expect(electricCurrent["mA"](conversionCandidate)).toEqual(expected);
      expect(milliamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kA to mA.', v => {
      const milliamperesConversion = linearConversion(0.001);
      const kiloamperesConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        milliamperesConversion[1],
        kiloamperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mA"] as const;
      const conversionCandidate = [v, "kA"] as const;

      expect(electricCurrent["mA"](conversionCandidate)).toEqual(expected);
      expect(milliamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert A to mA.', v => {
      const milliamperesConversion = linearConversion(0.001);
      const amperesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        milliamperesConversion[1],
        amperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mA"] as const;
      const conversionCandidate = [v, "A"] as const;

      expect(electricCurrent["mA"](conversionCandidate)).toEqual(expected);
      expect(milliamperes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert µA to mA.', v => {
      const milliamperesConversion = linearConversion(0.001);
      const microamperesConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        milliamperesConversion[1],
        microamperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mA"] as const;
      const conversionCandidate = [v, "µA"] as const;

      expect(electricCurrent["mA"](conversionCandidate)).toEqual(expected);
      expect(milliamperes(conversionCandidate)).toEqual(expected);
    });
  });


  describe('µA', () => {
    it.each([1, 10, 100])('should yield a µA measurement when given a number.', v => {
      expect(electricCurrent["µA"](v)).toEqual([v, "µA"]);
      expect(microamperes(v)).toEqual([v, "µA"]);
    });

    it.each([1, 10, 100])('should convert MA to µA.', v => {
      const microamperesConversion = linearConversion(0.000001);
      const megaamperesConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        microamperesConversion[1],
        megaamperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µA"] as const;
      const conversionCandidate = [v, "MA"] as const;

      expect(electricCurrent["µA"](conversionCandidate)).toEqual(expected);
      expect(microamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kA to µA.', v => {
      const microamperesConversion = linearConversion(0.000001);
      const kiloamperesConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        microamperesConversion[1],
        kiloamperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µA"] as const;
      const conversionCandidate = [v, "kA"] as const;

      expect(electricCurrent["µA"](conversionCandidate)).toEqual(expected);
      expect(microamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert A to µA.', v => {
      const microamperesConversion = linearConversion(0.000001);
      const amperesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        microamperesConversion[1],
        amperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µA"] as const;
      const conversionCandidate = [v, "A"] as const;

      expect(electricCurrent["µA"](conversionCandidate)).toEqual(expected);
      expect(microamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mA to µA.', v => {
      const microamperesConversion = linearConversion(0.000001);
      const milliamperesConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        microamperesConversion[1],
        milliamperesConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µA"] as const;
      const conversionCandidate = [v, "mA"] as const;

      expect(electricCurrent["µA"](conversionCandidate)).toEqual(expected);
      expect(microamperes(conversionCandidate)).toEqual(expected);
    });


  });

});
