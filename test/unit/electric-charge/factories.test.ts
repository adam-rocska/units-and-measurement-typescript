import {electricCharge} from "!src/electric-charge/factories";
import {coulombs, megaampereHours, kiloampereHours, ampereHours, milliampereHours, microampereHours} from "!src/electric-charge/factories";
import {linearConversion} from "!src/dimension/conversion";

describe("!src/electric-charge/factories aliasing", () => {
  describe('electricCharge["C"]', () => {
    it('should be aliased by "coulombs".', () => {
      expect(coulombs).toBe(electricCharge["C"]);
    });
  });


  describe('electricCharge["MAh"]', () => {
    it('should be aliased by "megaampereHours".', () => {
      expect(megaampereHours).toBe(electricCharge["MAh"]);
    });
  });


  describe('electricCharge["kAh"]', () => {
    it('should be aliased by "kiloampereHours".', () => {
      expect(kiloampereHours).toBe(electricCharge["kAh"]);
    });
  });


  describe('electricCharge["Ah"]', () => {
    it('should be aliased by "ampereHours".', () => {
      expect(ampereHours).toBe(electricCharge["Ah"]);
    });
  });


  describe('electricCharge["mAh"]', () => {
    it('should be aliased by "milliampereHours".', () => {
      expect(milliampereHours).toBe(electricCharge["mAh"]);
    });
  });


  describe('electricCharge["µAh"]', () => {
    it('should be aliased by "microampereHours".', () => {
      expect(microampereHours).toBe(electricCharge["µAh"]);
    });
  });

});

describe("electricCharge", () => {
  describe('C', () => {
    it.each([1, 10, 100])('should yield a C measurement when given a number.', v => {
      expect(electricCharge["C"](v)).toEqual([v, "C"]);
      expect(coulombs(v)).toEqual([v, "C"]);
    });



    it.each([1, 10, 100])('should convert %dMAh to C.', v => {
      const coulombsConversion = linearConversion(1);
      const megaampereHoursConversion = linearConversion(3600000000);

      const [toBase, fromBase] = [
        megaampereHoursConversion[0],
        coulombsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "C"] as const;
      const conversionCandidate = [v, "MAh"] as const;

      expect(electricCharge["C"](conversionCandidate)).toEqual(expected);
      expect(coulombs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkAh to C.', v => {
      const coulombsConversion = linearConversion(1);
      const kiloampereHoursConversion = linearConversion(3600000);

      const [toBase, fromBase] = [
        kiloampereHoursConversion[0],
        coulombsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "C"] as const;
      const conversionCandidate = [v, "kAh"] as const;

      expect(electricCharge["C"](conversionCandidate)).toEqual(expected);
      expect(coulombs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dAh to C.', v => {
      const coulombsConversion = linearConversion(1);
      const ampereHoursConversion = linearConversion(3600);

      const [toBase, fromBase] = [
        ampereHoursConversion[0],
        coulombsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "C"] as const;
      const conversionCandidate = [v, "Ah"] as const;

      expect(electricCharge["C"](conversionCandidate)).toEqual(expected);
      expect(coulombs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmAh to C.', v => {
      const coulombsConversion = linearConversion(1);
      const milliampereHoursConversion = linearConversion(3.6);

      const [toBase, fromBase] = [
        milliampereHoursConversion[0],
        coulombsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "C"] as const;
      const conversionCandidate = [v, "mAh"] as const;

      expect(electricCharge["C"](conversionCandidate)).toEqual(expected);
      expect(coulombs(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµAh to C.', v => {
      const coulombsConversion = linearConversion(1);
      const microampereHoursConversion = linearConversion(0.0036);

      const [toBase, fromBase] = [
        microampereHoursConversion[0],
        coulombsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "C"] as const;
      const conversionCandidate = [v, "µAh"] as const;

      expect(electricCharge["C"](conversionCandidate)).toEqual(expected);
      expect(coulombs(conversionCandidate)).toEqual(expected);
    });
  });


  describe('MAh', () => {
    it.each([1, 10, 100])('should yield a MAh measurement when given a number.', v => {
      expect(electricCharge["MAh"](v)).toEqual([v, "MAh"]);
      expect(megaampereHours(v)).toEqual([v, "MAh"]);
    });

    it.each([1, 10, 100])('should convert %dC to MAh.', v => {
      const megaampereHoursConversion = linearConversion(3600000000);
      const coulombsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        coulombsConversion[0],
        megaampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MAh"] as const;
      const conversionCandidate = [v, "C"] as const;

      expect(electricCharge["MAh"](conversionCandidate)).toEqual(expected);
      expect(megaampereHours(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dkAh to MAh.', v => {
      const megaampereHoursConversion = linearConversion(3600000000);
      const kiloampereHoursConversion = linearConversion(3600000);

      const [toBase, fromBase] = [
        kiloampereHoursConversion[0],
        megaampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MAh"] as const;
      const conversionCandidate = [v, "kAh"] as const;

      expect(electricCharge["MAh"](conversionCandidate)).toEqual(expected);
      expect(megaampereHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dAh to MAh.', v => {
      const megaampereHoursConversion = linearConversion(3600000000);
      const ampereHoursConversion = linearConversion(3600);

      const [toBase, fromBase] = [
        ampereHoursConversion[0],
        megaampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MAh"] as const;
      const conversionCandidate = [v, "Ah"] as const;

      expect(electricCharge["MAh"](conversionCandidate)).toEqual(expected);
      expect(megaampereHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmAh to MAh.', v => {
      const megaampereHoursConversion = linearConversion(3600000000);
      const milliampereHoursConversion = linearConversion(3.6);

      const [toBase, fromBase] = [
        milliampereHoursConversion[0],
        megaampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MAh"] as const;
      const conversionCandidate = [v, "mAh"] as const;

      expect(electricCharge["MAh"](conversionCandidate)).toEqual(expected);
      expect(megaampereHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµAh to MAh.', v => {
      const megaampereHoursConversion = linearConversion(3600000000);
      const microampereHoursConversion = linearConversion(0.0036);

      const [toBase, fromBase] = [
        microampereHoursConversion[0],
        megaampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MAh"] as const;
      const conversionCandidate = [v, "µAh"] as const;

      expect(electricCharge["MAh"](conversionCandidate)).toEqual(expected);
      expect(megaampereHours(conversionCandidate)).toEqual(expected);
    });
  });


  describe('kAh', () => {
    it.each([1, 10, 100])('should yield a kAh measurement when given a number.', v => {
      expect(electricCharge["kAh"](v)).toEqual([v, "kAh"]);
      expect(kiloampereHours(v)).toEqual([v, "kAh"]);
    });

    it.each([1, 10, 100])('should convert %dC to kAh.', v => {
      const kiloampereHoursConversion = linearConversion(3600000);
      const coulombsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        coulombsConversion[0],
        kiloampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kAh"] as const;
      const conversionCandidate = [v, "C"] as const;

      expect(electricCharge["kAh"](conversionCandidate)).toEqual(expected);
      expect(kiloampereHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMAh to kAh.', v => {
      const kiloampereHoursConversion = linearConversion(3600000);
      const megaampereHoursConversion = linearConversion(3600000000);

      const [toBase, fromBase] = [
        megaampereHoursConversion[0],
        kiloampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kAh"] as const;
      const conversionCandidate = [v, "MAh"] as const;

      expect(electricCharge["kAh"](conversionCandidate)).toEqual(expected);
      expect(kiloampereHours(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dAh to kAh.', v => {
      const kiloampereHoursConversion = linearConversion(3600000);
      const ampereHoursConversion = linearConversion(3600);

      const [toBase, fromBase] = [
        ampereHoursConversion[0],
        kiloampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kAh"] as const;
      const conversionCandidate = [v, "Ah"] as const;

      expect(electricCharge["kAh"](conversionCandidate)).toEqual(expected);
      expect(kiloampereHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmAh to kAh.', v => {
      const kiloampereHoursConversion = linearConversion(3600000);
      const milliampereHoursConversion = linearConversion(3.6);

      const [toBase, fromBase] = [
        milliampereHoursConversion[0],
        kiloampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kAh"] as const;
      const conversionCandidate = [v, "mAh"] as const;

      expect(electricCharge["kAh"](conversionCandidate)).toEqual(expected);
      expect(kiloampereHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµAh to kAh.', v => {
      const kiloampereHoursConversion = linearConversion(3600000);
      const microampereHoursConversion = linearConversion(0.0036);

      const [toBase, fromBase] = [
        microampereHoursConversion[0],
        kiloampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kAh"] as const;
      const conversionCandidate = [v, "µAh"] as const;

      expect(electricCharge["kAh"](conversionCandidate)).toEqual(expected);
      expect(kiloampereHours(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Ah', () => {
    it.each([1, 10, 100])('should yield a Ah measurement when given a number.', v => {
      expect(electricCharge["Ah"](v)).toEqual([v, "Ah"]);
      expect(ampereHours(v)).toEqual([v, "Ah"]);
    });

    it.each([1, 10, 100])('should convert %dC to Ah.', v => {
      const ampereHoursConversion = linearConversion(3600);
      const coulombsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        coulombsConversion[0],
        ampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Ah"] as const;
      const conversionCandidate = [v, "C"] as const;

      expect(electricCharge["Ah"](conversionCandidate)).toEqual(expected);
      expect(ampereHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMAh to Ah.', v => {
      const ampereHoursConversion = linearConversion(3600);
      const megaampereHoursConversion = linearConversion(3600000000);

      const [toBase, fromBase] = [
        megaampereHoursConversion[0],
        ampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Ah"] as const;
      const conversionCandidate = [v, "MAh"] as const;

      expect(electricCharge["Ah"](conversionCandidate)).toEqual(expected);
      expect(ampereHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkAh to Ah.', v => {
      const ampereHoursConversion = linearConversion(3600);
      const kiloampereHoursConversion = linearConversion(3600000);

      const [toBase, fromBase] = [
        kiloampereHoursConversion[0],
        ampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Ah"] as const;
      const conversionCandidate = [v, "kAh"] as const;

      expect(electricCharge["Ah"](conversionCandidate)).toEqual(expected);
      expect(ampereHours(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dmAh to Ah.', v => {
      const ampereHoursConversion = linearConversion(3600);
      const milliampereHoursConversion = linearConversion(3.6);

      const [toBase, fromBase] = [
        milliampereHoursConversion[0],
        ampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Ah"] as const;
      const conversionCandidate = [v, "mAh"] as const;

      expect(electricCharge["Ah"](conversionCandidate)).toEqual(expected);
      expect(ampereHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµAh to Ah.', v => {
      const ampereHoursConversion = linearConversion(3600);
      const microampereHoursConversion = linearConversion(0.0036);

      const [toBase, fromBase] = [
        microampereHoursConversion[0],
        ampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Ah"] as const;
      const conversionCandidate = [v, "µAh"] as const;

      expect(electricCharge["Ah"](conversionCandidate)).toEqual(expected);
      expect(ampereHours(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mAh', () => {
    it.each([1, 10, 100])('should yield a mAh measurement when given a number.', v => {
      expect(electricCharge["mAh"](v)).toEqual([v, "mAh"]);
      expect(milliampereHours(v)).toEqual([v, "mAh"]);
    });

    it.each([1, 10, 100])('should convert %dC to mAh.', v => {
      const milliampereHoursConversion = linearConversion(3.6);
      const coulombsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        coulombsConversion[0],
        milliampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mAh"] as const;
      const conversionCandidate = [v, "C"] as const;

      expect(electricCharge["mAh"](conversionCandidate)).toEqual(expected);
      expect(milliampereHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMAh to mAh.', v => {
      const milliampereHoursConversion = linearConversion(3.6);
      const megaampereHoursConversion = linearConversion(3600000000);

      const [toBase, fromBase] = [
        megaampereHoursConversion[0],
        milliampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mAh"] as const;
      const conversionCandidate = [v, "MAh"] as const;

      expect(electricCharge["mAh"](conversionCandidate)).toEqual(expected);
      expect(milliampereHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkAh to mAh.', v => {
      const milliampereHoursConversion = linearConversion(3.6);
      const kiloampereHoursConversion = linearConversion(3600000);

      const [toBase, fromBase] = [
        kiloampereHoursConversion[0],
        milliampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mAh"] as const;
      const conversionCandidate = [v, "kAh"] as const;

      expect(electricCharge["mAh"](conversionCandidate)).toEqual(expected);
      expect(milliampereHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dAh to mAh.', v => {
      const milliampereHoursConversion = linearConversion(3.6);
      const ampereHoursConversion = linearConversion(3600);

      const [toBase, fromBase] = [
        ampereHoursConversion[0],
        milliampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mAh"] as const;
      const conversionCandidate = [v, "Ah"] as const;

      expect(electricCharge["mAh"](conversionCandidate)).toEqual(expected);
      expect(milliampereHours(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dµAh to mAh.', v => {
      const milliampereHoursConversion = linearConversion(3.6);
      const microampereHoursConversion = linearConversion(0.0036);

      const [toBase, fromBase] = [
        microampereHoursConversion[0],
        milliampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mAh"] as const;
      const conversionCandidate = [v, "µAh"] as const;

      expect(electricCharge["mAh"](conversionCandidate)).toEqual(expected);
      expect(milliampereHours(conversionCandidate)).toEqual(expected);
    });
  });


  describe('µAh', () => {
    it.each([1, 10, 100])('should yield a µAh measurement when given a number.', v => {
      expect(electricCharge["µAh"](v)).toEqual([v, "µAh"]);
      expect(microampereHours(v)).toEqual([v, "µAh"]);
    });

    it.each([1, 10, 100])('should convert %dC to µAh.', v => {
      const microampereHoursConversion = linearConversion(0.0036);
      const coulombsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        coulombsConversion[0],
        microampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µAh"] as const;
      const conversionCandidate = [v, "C"] as const;

      expect(electricCharge["µAh"](conversionCandidate)).toEqual(expected);
      expect(microampereHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMAh to µAh.', v => {
      const microampereHoursConversion = linearConversion(0.0036);
      const megaampereHoursConversion = linearConversion(3600000000);

      const [toBase, fromBase] = [
        megaampereHoursConversion[0],
        microampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µAh"] as const;
      const conversionCandidate = [v, "MAh"] as const;

      expect(electricCharge["µAh"](conversionCandidate)).toEqual(expected);
      expect(microampereHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkAh to µAh.', v => {
      const microampereHoursConversion = linearConversion(0.0036);
      const kiloampereHoursConversion = linearConversion(3600000);

      const [toBase, fromBase] = [
        kiloampereHoursConversion[0],
        microampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µAh"] as const;
      const conversionCandidate = [v, "kAh"] as const;

      expect(electricCharge["µAh"](conversionCandidate)).toEqual(expected);
      expect(microampereHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dAh to µAh.', v => {
      const microampereHoursConversion = linearConversion(0.0036);
      const ampereHoursConversion = linearConversion(3600);

      const [toBase, fromBase] = [
        ampereHoursConversion[0],
        microampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µAh"] as const;
      const conversionCandidate = [v, "Ah"] as const;

      expect(electricCharge["µAh"](conversionCandidate)).toEqual(expected);
      expect(microampereHours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmAh to µAh.', v => {
      const microampereHoursConversion = linearConversion(0.0036);
      const milliampereHoursConversion = linearConversion(3.6);

      const [toBase, fromBase] = [
        milliampereHoursConversion[0],
        microampereHoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µAh"] as const;
      const conversionCandidate = [v, "mAh"] as const;

      expect(electricCharge["µAh"](conversionCandidate)).toEqual(expected);
      expect(microampereHours(conversionCandidate)).toEqual(expected);
    });


  });

});
