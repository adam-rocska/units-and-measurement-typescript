import {electricResistance} from "!src/electric-resistance/factories";
import {megaohms, kiloohms, ohms, milliohms, microohms} from "!src/electric-resistance/factories";
import {linearConversion} from "!src/conversion";

describe("!src/electric-resistance/factories aliasing", () => {
  describe('electricResistance["MΩ"]', () => {
    it('should be aliased by "megaohms".', () => {
      expect(megaohms).toBe(electricResistance["MΩ"]);
    });
  });


  describe('electricResistance["kΩ"]', () => {
    it('should be aliased by "kiloohms".', () => {
      expect(kiloohms).toBe(electricResistance["kΩ"]);
    });
  });


  describe('electricResistance["Ω"]', () => {
    it('should be aliased by "ohms".', () => {
      expect(ohms).toBe(electricResistance["Ω"]);
    });
  });


  describe('electricResistance["mΩ"]', () => {
    it('should be aliased by "milliohms".', () => {
      expect(milliohms).toBe(electricResistance["mΩ"]);
    });
  });


  describe('electricResistance["µΩ"]', () => {
    it('should be aliased by "microohms".', () => {
      expect(microohms).toBe(electricResistance["µΩ"]);
    });
  });

});

describe("electricResistance", () => {
  describe('MΩ', () => {
    it.each([1, 10, 100])('should yield a MΩ measurement when given a number.', v => {
      expect(electricResistance["MΩ"](v)).toEqual([v, "MΩ"]);
      expect(megaohms(v)).toEqual([v, "MΩ"]);
    });



    it.each([1, 10, 100])('should convert %dkΩ to MΩ.', v => {
      const megaohmsConversion = linearConversion(1000000);
      const kiloohmsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kiloohmsConversion[0],
        megaohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MΩ"] as const;
      const conversionCandidate = [v, "kΩ"] as const;

      expect(electricResistance["MΩ"](conversionCandidate)).toEqual(expected);
      expect(megaohms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dΩ to MΩ.', v => {
      const megaohmsConversion = linearConversion(1000000);
      const ohmsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        ohmsConversion[0],
        megaohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MΩ"] as const;
      const conversionCandidate = [v, "Ω"] as const;

      expect(electricResistance["MΩ"](conversionCandidate)).toEqual(expected);
      expect(megaohms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmΩ to MΩ.', v => {
      const megaohmsConversion = linearConversion(1000000);
      const milliohmsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliohmsConversion[0],
        megaohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MΩ"] as const;
      const conversionCandidate = [v, "mΩ"] as const;

      expect(electricResistance["MΩ"](conversionCandidate)).toEqual(expected);
      expect(megaohms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµΩ to MΩ.', v => {
      const megaohmsConversion = linearConversion(1000000);
      const microohmsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microohmsConversion[0],
        megaohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MΩ"] as const;
      const conversionCandidate = [v, "µΩ"] as const;

      expect(electricResistance["MΩ"](conversionCandidate)).toEqual(expected);
      expect(megaohms(conversionCandidate)).toEqual(expected);
    });
  });


  describe('kΩ', () => {
    it.each([1, 10, 100])('should yield a kΩ measurement when given a number.', v => {
      expect(electricResistance["kΩ"](v)).toEqual([v, "kΩ"]);
      expect(kiloohms(v)).toEqual([v, "kΩ"]);
    });

    it.each([1, 10, 100])('should convert %dMΩ to kΩ.', v => {
      const kiloohmsConversion = linearConversion(1000);
      const megaohmsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megaohmsConversion[0],
        kiloohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kΩ"] as const;
      const conversionCandidate = [v, "MΩ"] as const;

      expect(electricResistance["kΩ"](conversionCandidate)).toEqual(expected);
      expect(kiloohms(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dΩ to kΩ.', v => {
      const kiloohmsConversion = linearConversion(1000);
      const ohmsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        ohmsConversion[0],
        kiloohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kΩ"] as const;
      const conversionCandidate = [v, "Ω"] as const;

      expect(electricResistance["kΩ"](conversionCandidate)).toEqual(expected);
      expect(kiloohms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmΩ to kΩ.', v => {
      const kiloohmsConversion = linearConversion(1000);
      const milliohmsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliohmsConversion[0],
        kiloohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kΩ"] as const;
      const conversionCandidate = [v, "mΩ"] as const;

      expect(electricResistance["kΩ"](conversionCandidate)).toEqual(expected);
      expect(kiloohms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµΩ to kΩ.', v => {
      const kiloohmsConversion = linearConversion(1000);
      const microohmsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microohmsConversion[0],
        kiloohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kΩ"] as const;
      const conversionCandidate = [v, "µΩ"] as const;

      expect(electricResistance["kΩ"](conversionCandidate)).toEqual(expected);
      expect(kiloohms(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Ω', () => {
    it.each([1, 10, 100])('should yield a Ω measurement when given a number.', v => {
      expect(electricResistance["Ω"](v)).toEqual([v, "Ω"]);
      expect(ohms(v)).toEqual([v, "Ω"]);
    });

    it.each([1, 10, 100])('should convert %dMΩ to Ω.', v => {
      const ohmsConversion = linearConversion(1);
      const megaohmsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megaohmsConversion[0],
        ohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Ω"] as const;
      const conversionCandidate = [v, "MΩ"] as const;

      expect(electricResistance["Ω"](conversionCandidate)).toEqual(expected);
      expect(ohms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkΩ to Ω.', v => {
      const ohmsConversion = linearConversion(1);
      const kiloohmsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kiloohmsConversion[0],
        ohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Ω"] as const;
      const conversionCandidate = [v, "kΩ"] as const;

      expect(electricResistance["Ω"](conversionCandidate)).toEqual(expected);
      expect(ohms(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dmΩ to Ω.', v => {
      const ohmsConversion = linearConversion(1);
      const milliohmsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliohmsConversion[0],
        ohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Ω"] as const;
      const conversionCandidate = [v, "mΩ"] as const;

      expect(electricResistance["Ω"](conversionCandidate)).toEqual(expected);
      expect(ohms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµΩ to Ω.', v => {
      const ohmsConversion = linearConversion(1);
      const microohmsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microohmsConversion[0],
        ohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Ω"] as const;
      const conversionCandidate = [v, "µΩ"] as const;

      expect(electricResistance["Ω"](conversionCandidate)).toEqual(expected);
      expect(ohms(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mΩ', () => {
    it.each([1, 10, 100])('should yield a mΩ measurement when given a number.', v => {
      expect(electricResistance["mΩ"](v)).toEqual([v, "mΩ"]);
      expect(milliohms(v)).toEqual([v, "mΩ"]);
    });

    it.each([1, 10, 100])('should convert %dMΩ to mΩ.', v => {
      const milliohmsConversion = linearConversion(0.001);
      const megaohmsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megaohmsConversion[0],
        milliohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mΩ"] as const;
      const conversionCandidate = [v, "MΩ"] as const;

      expect(electricResistance["mΩ"](conversionCandidate)).toEqual(expected);
      expect(milliohms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkΩ to mΩ.', v => {
      const milliohmsConversion = linearConversion(0.001);
      const kiloohmsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kiloohmsConversion[0],
        milliohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mΩ"] as const;
      const conversionCandidate = [v, "kΩ"] as const;

      expect(electricResistance["mΩ"](conversionCandidate)).toEqual(expected);
      expect(milliohms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dΩ to mΩ.', v => {
      const milliohmsConversion = linearConversion(0.001);
      const ohmsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        ohmsConversion[0],
        milliohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mΩ"] as const;
      const conversionCandidate = [v, "Ω"] as const;

      expect(electricResistance["mΩ"](conversionCandidate)).toEqual(expected);
      expect(milliohms(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dµΩ to mΩ.', v => {
      const milliohmsConversion = linearConversion(0.001);
      const microohmsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microohmsConversion[0],
        milliohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mΩ"] as const;
      const conversionCandidate = [v, "µΩ"] as const;

      expect(electricResistance["mΩ"](conversionCandidate)).toEqual(expected);
      expect(milliohms(conversionCandidate)).toEqual(expected);
    });
  });


  describe('µΩ', () => {
    it.each([1, 10, 100])('should yield a µΩ measurement when given a number.', v => {
      expect(electricResistance["µΩ"](v)).toEqual([v, "µΩ"]);
      expect(microohms(v)).toEqual([v, "µΩ"]);
    });

    it.each([1, 10, 100])('should convert %dMΩ to µΩ.', v => {
      const microohmsConversion = linearConversion(0.000001);
      const megaohmsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megaohmsConversion[0],
        microohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µΩ"] as const;
      const conversionCandidate = [v, "MΩ"] as const;

      expect(electricResistance["µΩ"](conversionCandidate)).toEqual(expected);
      expect(microohms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkΩ to µΩ.', v => {
      const microohmsConversion = linearConversion(0.000001);
      const kiloohmsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kiloohmsConversion[0],
        microohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µΩ"] as const;
      const conversionCandidate = [v, "kΩ"] as const;

      expect(electricResistance["µΩ"](conversionCandidate)).toEqual(expected);
      expect(microohms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dΩ to µΩ.', v => {
      const microohmsConversion = linearConversion(0.000001);
      const ohmsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        ohmsConversion[0],
        microohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µΩ"] as const;
      const conversionCandidate = [v, "Ω"] as const;

      expect(electricResistance["µΩ"](conversionCandidate)).toEqual(expected);
      expect(microohms(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmΩ to µΩ.', v => {
      const microohmsConversion = linearConversion(0.000001);
      const milliohmsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        milliohmsConversion[0],
        microohmsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µΩ"] as const;
      const conversionCandidate = [v, "mΩ"] as const;

      expect(electricResistance["µΩ"](conversionCandidate)).toEqual(expected);
      expect(microohms(conversionCandidate)).toEqual(expected);
    });


  });

});
