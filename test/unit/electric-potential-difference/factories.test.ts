import {electricPotentialDifference} from "!src/electric-potential-difference/factories";
import {megavolts, kilovolts, volts, millivolts, microvolts} from "!src/electric-potential-difference/factories";
import {linearConversion} from "!src/conversion";

describe("!src/electric-potential-difference/factories aliasing", () => {
  describe('electricPotentialDifference["MV"]', () => {
    it('should be aliased by "megavolts".', () => {
      expect(megavolts).toBe(electricPotentialDifference["MV"]);
    });
  });


  describe('electricPotentialDifference["kV"]', () => {
    it('should be aliased by "kilovolts".', () => {
      expect(kilovolts).toBe(electricPotentialDifference["kV"]);
    });
  });


  describe('electricPotentialDifference["V"]', () => {
    it('should be aliased by "volts".', () => {
      expect(volts).toBe(electricPotentialDifference["V"]);
    });
  });


  describe('electricPotentialDifference["mV"]', () => {
    it('should be aliased by "millivolts".', () => {
      expect(millivolts).toBe(electricPotentialDifference["mV"]);
    });
  });


  describe('electricPotentialDifference["µV"]', () => {
    it('should be aliased by "microvolts".', () => {
      expect(microvolts).toBe(electricPotentialDifference["µV"]);
    });
  });

});

describe("electricPotentialDifference", () => {
  describe('MV', () => {
    it.each([1, 10, 100])('should yield a MV measurement when given a number.', v => {
      expect(electricPotentialDifference["MV"](v)).toEqual([v, "MV"]);
      expect(megavolts(v)).toEqual([v, "MV"]);
    });



    it.each([1, 10, 100])('should convert kV to MV.', v => {
      const megavoltsConversion = linearConversion(1000000);
      const kilovoltsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilovoltsConversion[0],
        megavoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "MV"] as const;
      const conversionCandidate = [v, "kV"] as const;

      expect(electricPotentialDifference["MV"](conversionCandidate)).toEqual(expected);
      expect(megavolts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert V to MV.', v => {
      const megavoltsConversion = linearConversion(1000000);
      const voltsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        voltsConversion[0],
        megavoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "MV"] as const;
      const conversionCandidate = [v, "V"] as const;

      expect(electricPotentialDifference["MV"](conversionCandidate)).toEqual(expected);
      expect(megavolts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mV to MV.', v => {
      const megavoltsConversion = linearConversion(1000000);
      const millivoltsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millivoltsConversion[0],
        megavoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "MV"] as const;
      const conversionCandidate = [v, "mV"] as const;

      expect(electricPotentialDifference["MV"](conversionCandidate)).toEqual(expected);
      expect(megavolts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µV to MV.', v => {
      const megavoltsConversion = linearConversion(1000000);
      const microvoltsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microvoltsConversion[0],
        megavoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "MV"] as const;
      const conversionCandidate = [v, "µV"] as const;

      expect(electricPotentialDifference["MV"](conversionCandidate)).toEqual(expected);
      expect(megavolts(conversionCandidate)).toEqual(expected);
    });
  });


  describe('kV', () => {
    it.each([1, 10, 100])('should yield a kV measurement when given a number.', v => {
      expect(electricPotentialDifference["kV"](v)).toEqual([v, "kV"]);
      expect(kilovolts(v)).toEqual([v, "kV"]);
    });

    it.each([1, 10, 100])('should convert MV to kV.', v => {
      const kilovoltsConversion = linearConversion(1000);
      const megavoltsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megavoltsConversion[0],
        kilovoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kV"] as const;
      const conversionCandidate = [v, "MV"] as const;

      expect(electricPotentialDifference["kV"](conversionCandidate)).toEqual(expected);
      expect(kilovolts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert V to kV.', v => {
      const kilovoltsConversion = linearConversion(1000);
      const voltsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        voltsConversion[0],
        kilovoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kV"] as const;
      const conversionCandidate = [v, "V"] as const;

      expect(electricPotentialDifference["kV"](conversionCandidate)).toEqual(expected);
      expect(kilovolts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mV to kV.', v => {
      const kilovoltsConversion = linearConversion(1000);
      const millivoltsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millivoltsConversion[0],
        kilovoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kV"] as const;
      const conversionCandidate = [v, "mV"] as const;

      expect(electricPotentialDifference["kV"](conversionCandidate)).toEqual(expected);
      expect(kilovolts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µV to kV.', v => {
      const kilovoltsConversion = linearConversion(1000);
      const microvoltsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microvoltsConversion[0],
        kilovoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "kV"] as const;
      const conversionCandidate = [v, "µV"] as const;

      expect(electricPotentialDifference["kV"](conversionCandidate)).toEqual(expected);
      expect(kilovolts(conversionCandidate)).toEqual(expected);
    });
  });


  describe('V', () => {
    it.each([1, 10, 100])('should yield a V measurement when given a number.', v => {
      expect(electricPotentialDifference["V"](v)).toEqual([v, "V"]);
      expect(volts(v)).toEqual([v, "V"]);
    });

    it.each([1, 10, 100])('should convert MV to V.', v => {
      const voltsConversion = linearConversion(1);
      const megavoltsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megavoltsConversion[0],
        voltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "V"] as const;
      const conversionCandidate = [v, "MV"] as const;

      expect(electricPotentialDifference["V"](conversionCandidate)).toEqual(expected);
      expect(volts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kV to V.', v => {
      const voltsConversion = linearConversion(1);
      const kilovoltsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilovoltsConversion[0],
        voltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "V"] as const;
      const conversionCandidate = [v, "kV"] as const;

      expect(electricPotentialDifference["V"](conversionCandidate)).toEqual(expected);
      expect(volts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert mV to V.', v => {
      const voltsConversion = linearConversion(1);
      const millivoltsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millivoltsConversion[0],
        voltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "V"] as const;
      const conversionCandidate = [v, "mV"] as const;

      expect(electricPotentialDifference["V"](conversionCandidate)).toEqual(expected);
      expect(volts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µV to V.', v => {
      const voltsConversion = linearConversion(1);
      const microvoltsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microvoltsConversion[0],
        voltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "V"] as const;
      const conversionCandidate = [v, "µV"] as const;

      expect(electricPotentialDifference["V"](conversionCandidate)).toEqual(expected);
      expect(volts(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mV', () => {
    it.each([1, 10, 100])('should yield a mV measurement when given a number.', v => {
      expect(electricPotentialDifference["mV"](v)).toEqual([v, "mV"]);
      expect(millivolts(v)).toEqual([v, "mV"]);
    });

    it.each([1, 10, 100])('should convert MV to mV.', v => {
      const millivoltsConversion = linearConversion(0.001);
      const megavoltsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megavoltsConversion[0],
        millivoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mV"] as const;
      const conversionCandidate = [v, "MV"] as const;

      expect(electricPotentialDifference["mV"](conversionCandidate)).toEqual(expected);
      expect(millivolts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kV to mV.', v => {
      const millivoltsConversion = linearConversion(0.001);
      const kilovoltsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilovoltsConversion[0],
        millivoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mV"] as const;
      const conversionCandidate = [v, "kV"] as const;

      expect(electricPotentialDifference["mV"](conversionCandidate)).toEqual(expected);
      expect(millivolts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert V to mV.', v => {
      const millivoltsConversion = linearConversion(0.001);
      const voltsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        voltsConversion[0],
        millivoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mV"] as const;
      const conversionCandidate = [v, "V"] as const;

      expect(electricPotentialDifference["mV"](conversionCandidate)).toEqual(expected);
      expect(millivolts(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert µV to mV.', v => {
      const millivoltsConversion = linearConversion(0.001);
      const microvoltsConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microvoltsConversion[0],
        millivoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "mV"] as const;
      const conversionCandidate = [v, "µV"] as const;

      expect(electricPotentialDifference["mV"](conversionCandidate)).toEqual(expected);
      expect(millivolts(conversionCandidate)).toEqual(expected);
    });
  });


  describe('µV', () => {
    it.each([1, 10, 100])('should yield a µV measurement when given a number.', v => {
      expect(electricPotentialDifference["µV"](v)).toEqual([v, "µV"]);
      expect(microvolts(v)).toEqual([v, "µV"]);
    });

    it.each([1, 10, 100])('should convert MV to µV.', v => {
      const microvoltsConversion = linearConversion(0.000001);
      const megavoltsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megavoltsConversion[0],
        microvoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µV"] as const;
      const conversionCandidate = [v, "MV"] as const;

      expect(electricPotentialDifference["µV"](conversionCandidate)).toEqual(expected);
      expect(microvolts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kV to µV.', v => {
      const microvoltsConversion = linearConversion(0.000001);
      const kilovoltsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilovoltsConversion[0],
        microvoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µV"] as const;
      const conversionCandidate = [v, "kV"] as const;

      expect(electricPotentialDifference["µV"](conversionCandidate)).toEqual(expected);
      expect(microvolts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert V to µV.', v => {
      const microvoltsConversion = linearConversion(0.000001);
      const voltsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        voltsConversion[0],
        microvoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µV"] as const;
      const conversionCandidate = [v, "V"] as const;

      expect(electricPotentialDifference["µV"](conversionCandidate)).toEqual(expected);
      expect(microvolts(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mV to µV.', v => {
      const microvoltsConversion = linearConversion(0.000001);
      const millivoltsConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millivoltsConversion[0],
        microvoltsConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "µV"] as const;
      const conversionCandidate = [v, "mV"] as const;

      expect(electricPotentialDifference["µV"](conversionCandidate)).toEqual(expected);
      expect(microvolts(conversionCandidate)).toEqual(expected);
    });


  });

});
