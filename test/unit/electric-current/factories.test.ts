import {electricCurrent} from "!src/electric-current/factories";
import {megaamperes, kiloamperes, amperes, milliamperes, microamperes} from "!src/electric-current/factories";
import {linearConversion} from "!src/dimension/conversion";

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



    it.each([1, 10, 100])('should convert %dkA to MA.', v => {
      const megaamperesConversion = linearConversion(1000000);
      const kiloamperesConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kiloamperesConversion[0],
        megaamperesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MA"] as const;
      const conversionCandidate = [v, "kA"] as const;

      expect(electricCurrent["MA"](conversionCandidate)).toEqual(expected);
      expect(megaamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dA to MA.', v => {
      const megaamperesConversion = linearConversion(1000000);
      const amperesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        amperesConversion[0],
        megaamperesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MA"] as const;
      const conversionCandidate = [v, "A"] as const;

      expect(electricCurrent["MA"](conversionCandidate)).toEqual(expected);
      expect(megaamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmA to MA.', v => {
      const megaamperesConversion = linearConversion(1000000);
      const milliamperesConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliamperesConversion[0],
        megaamperesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MA"] as const;
      const conversionCandidate = [v, "mA"] as const;

      expect(electricCurrent["MA"](conversionCandidate)).toEqual(expected);
      expect(megaamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµA to MA.', v => {
      const megaamperesConversion = linearConversion(1000000);
      const microamperesConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microamperesConversion[0],
        megaamperesConversion[1],
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

    it.each([1, 10, 100])('should convert %dMA to kA.', v => {
      const kiloamperesConversion = linearConversion(1000);
      const megaamperesConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megaamperesConversion[0],
        kiloamperesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kA"] as const;
      const conversionCandidate = [v, "MA"] as const;

      expect(electricCurrent["kA"](conversionCandidate)).toEqual(expected);
      expect(kiloamperes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dA to kA.', v => {
      const kiloamperesConversion = linearConversion(1000);
      const amperesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        amperesConversion[0],
        kiloamperesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kA"] as const;
      const conversionCandidate = [v, "A"] as const;

      expect(electricCurrent["kA"](conversionCandidate)).toEqual(expected);
      expect(kiloamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmA to kA.', v => {
      const kiloamperesConversion = linearConversion(1000);
      const milliamperesConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliamperesConversion[0],
        kiloamperesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kA"] as const;
      const conversionCandidate = [v, "mA"] as const;

      expect(electricCurrent["kA"](conversionCandidate)).toEqual(expected);
      expect(kiloamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµA to kA.', v => {
      const kiloamperesConversion = linearConversion(1000);
      const microamperesConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microamperesConversion[0],
        kiloamperesConversion[1],
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

    it.each([1, 10, 100])('should convert %dMA to A.', v => {
      const amperesConversion = linearConversion(1);
      const megaamperesConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megaamperesConversion[0],
        amperesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "A"] as const;
      const conversionCandidate = [v, "MA"] as const;

      expect(electricCurrent["A"](conversionCandidate)).toEqual(expected);
      expect(amperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkA to A.', v => {
      const amperesConversion = linearConversion(1);
      const kiloamperesConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kiloamperesConversion[0],
        amperesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "A"] as const;
      const conversionCandidate = [v, "kA"] as const;

      expect(electricCurrent["A"](conversionCandidate)).toEqual(expected);
      expect(amperes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dmA to A.', v => {
      const amperesConversion = linearConversion(1);
      const milliamperesConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliamperesConversion[0],
        amperesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "A"] as const;
      const conversionCandidate = [v, "mA"] as const;

      expect(electricCurrent["A"](conversionCandidate)).toEqual(expected);
      expect(amperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµA to A.', v => {
      const amperesConversion = linearConversion(1);
      const microamperesConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microamperesConversion[0],
        amperesConversion[1],
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

    it.each([1, 10, 100])('should convert %dMA to mA.', v => {
      const milliamperesConversion = linearConversion(0.001);
      const megaamperesConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megaamperesConversion[0],
        milliamperesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mA"] as const;
      const conversionCandidate = [v, "MA"] as const;

      expect(electricCurrent["mA"](conversionCandidate)).toEqual(expected);
      expect(milliamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkA to mA.', v => {
      const milliamperesConversion = linearConversion(0.001);
      const kiloamperesConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kiloamperesConversion[0],
        milliamperesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mA"] as const;
      const conversionCandidate = [v, "kA"] as const;

      expect(electricCurrent["mA"](conversionCandidate)).toEqual(expected);
      expect(milliamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dA to mA.', v => {
      const milliamperesConversion = linearConversion(0.001);
      const amperesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        amperesConversion[0],
        milliamperesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mA"] as const;
      const conversionCandidate = [v, "A"] as const;

      expect(electricCurrent["mA"](conversionCandidate)).toEqual(expected);
      expect(milliamperes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dµA to mA.', v => {
      const milliamperesConversion = linearConversion(0.001);
      const microamperesConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microamperesConversion[0],
        milliamperesConversion[1],
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

    it.each([1, 10, 100])('should convert %dMA to µA.', v => {
      const microamperesConversion = linearConversion(0.000001);
      const megaamperesConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megaamperesConversion[0],
        microamperesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µA"] as const;
      const conversionCandidate = [v, "MA"] as const;

      expect(electricCurrent["µA"](conversionCandidate)).toEqual(expected);
      expect(microamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkA to µA.', v => {
      const microamperesConversion = linearConversion(0.000001);
      const kiloamperesConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kiloamperesConversion[0],
        microamperesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µA"] as const;
      const conversionCandidate = [v, "kA"] as const;

      expect(electricCurrent["µA"](conversionCandidate)).toEqual(expected);
      expect(microamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dA to µA.', v => {
      const microamperesConversion = linearConversion(0.000001);
      const amperesConversion = linearConversion(1);

      const [toBase, fromBase] = [
        amperesConversion[0],
        microamperesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µA"] as const;
      const conversionCandidate = [v, "A"] as const;

      expect(electricCurrent["µA"](conversionCandidate)).toEqual(expected);
      expect(microamperes(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmA to µA.', v => {
      const microamperesConversion = linearConversion(0.000001);
      const milliamperesConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliamperesConversion[0],
        microamperesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µA"] as const;
      const conversionCandidate = [v, "mA"] as const;

      expect(electricCurrent["µA"](conversionCandidate)).toEqual(expected);
      expect(microamperes(conversionCandidate)).toEqual(expected);
    });


  });

});
