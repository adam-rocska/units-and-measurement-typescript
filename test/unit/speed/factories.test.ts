import {speed} from "!src/speed/factories";
import {metersPerSecond, kilometersPerHour, milesPerHour, knots} from "!src/speed/factories";
import {linearConversion} from "!src/conversion";

describe("!src/speed/factories aliasing", () => {
  describe('speed["m/s"]', () => {
    it('should be aliased by "metersPerSecond".', () => {
      expect(metersPerSecond).toBe(speed["m/s"]);
    });
  });


  describe('speed["km/h"]', () => {
    it('should be aliased by "kilometersPerHour".', () => {
      expect(kilometersPerHour).toBe(speed["km/h"]);
    });
  });


  describe('speed["mph"]', () => {
    it('should be aliased by "milesPerHour".', () => {
      expect(milesPerHour).toBe(speed["mph"]);
    });
  });


  describe('speed["kn"]', () => {
    it('should be aliased by "knots".', () => {
      expect(knots).toBe(speed["kn"]);
    });
  });

});

describe("speed", () => {
  describe('m/s', () => {
    it.each([1, 10, 100])('should yield a m/s measurement when given a number.', v => {
      expect(speed["m/s"](v)).toEqual([v, "m/s"]);
      expect(metersPerSecond(v)).toEqual([v, "m/s"]);
    });



    it.each([1, 10, 100])('should convert km/h to m/s.', v => {
      const metersPerSecondConversion = linearConversion(1);
      const kilometersPerHourConversion = linearConversion(0.277778);

      const [toBase, fromBase] = [
        metersPerSecondConversion[1],
        kilometersPerHourConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m/s"] as const;
      const conversionCandidate = [v, "km/h"] as const;

      expect(speed["m/s"](conversionCandidate)).toEqual(expected);
      expect(metersPerSecond(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mph to m/s.', v => {
      const metersPerSecondConversion = linearConversion(1);
      const milesPerHourConversion = linearConversion(0.44704);

      const [toBase, fromBase] = [
        metersPerSecondConversion[1],
        milesPerHourConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m/s"] as const;
      const conversionCandidate = [v, "mph"] as const;

      expect(speed["m/s"](conversionCandidate)).toEqual(expected);
      expect(metersPerSecond(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kn to m/s.', v => {
      const metersPerSecondConversion = linearConversion(1);
      const knotsConversion = linearConversion(0.514444);

      const [toBase, fromBase] = [
        metersPerSecondConversion[1],
        knotsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "m/s"] as const;
      const conversionCandidate = [v, "kn"] as const;

      expect(speed["m/s"](conversionCandidate)).toEqual(expected);
      expect(metersPerSecond(conversionCandidate)).toEqual(expected);
    });
  });


  describe('km/h', () => {
    it.each([1, 10, 100])('should yield a km/h measurement when given a number.', v => {
      expect(speed["km/h"](v)).toEqual([v, "km/h"]);
      expect(kilometersPerHour(v)).toEqual([v, "km/h"]);
    });

    it.each([1, 10, 100])('should convert m/s to km/h.', v => {
      const kilometersPerHourConversion = linearConversion(0.277778);
      const metersPerSecondConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilometersPerHourConversion[1],
        metersPerSecondConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "km/h"] as const;
      const conversionCandidate = [v, "m/s"] as const;

      expect(speed["km/h"](conversionCandidate)).toEqual(expected);
      expect(kilometersPerHour(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert mph to km/h.', v => {
      const kilometersPerHourConversion = linearConversion(0.277778);
      const milesPerHourConversion = linearConversion(0.44704);

      const [toBase, fromBase] = [
        kilometersPerHourConversion[1],
        milesPerHourConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "km/h"] as const;
      const conversionCandidate = [v, "mph"] as const;

      expect(speed["km/h"](conversionCandidate)).toEqual(expected);
      expect(kilometersPerHour(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kn to km/h.', v => {
      const kilometersPerHourConversion = linearConversion(0.277778);
      const knotsConversion = linearConversion(0.514444);

      const [toBase, fromBase] = [
        kilometersPerHourConversion[1],
        knotsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "km/h"] as const;
      const conversionCandidate = [v, "kn"] as const;

      expect(speed["km/h"](conversionCandidate)).toEqual(expected);
      expect(kilometersPerHour(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mph', () => {
    it.each([1, 10, 100])('should yield a mph measurement when given a number.', v => {
      expect(speed["mph"](v)).toEqual([v, "mph"]);
      expect(milesPerHour(v)).toEqual([v, "mph"]);
    });

    it.each([1, 10, 100])('should convert m/s to mph.', v => {
      const milesPerHourConversion = linearConversion(0.44704);
      const metersPerSecondConversion = linearConversion(1);

      const [toBase, fromBase] = [
        milesPerHourConversion[1],
        metersPerSecondConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mph"] as const;
      const conversionCandidate = [v, "m/s"] as const;

      expect(speed["mph"](conversionCandidate)).toEqual(expected);
      expect(milesPerHour(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km/h to mph.', v => {
      const milesPerHourConversion = linearConversion(0.44704);
      const kilometersPerHourConversion = linearConversion(0.277778);

      const [toBase, fromBase] = [
        milesPerHourConversion[1],
        kilometersPerHourConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mph"] as const;
      const conversionCandidate = [v, "km/h"] as const;

      expect(speed["mph"](conversionCandidate)).toEqual(expected);
      expect(milesPerHour(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert kn to mph.', v => {
      const milesPerHourConversion = linearConversion(0.44704);
      const knotsConversion = linearConversion(0.514444);

      const [toBase, fromBase] = [
        milesPerHourConversion[1],
        knotsConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mph"] as const;
      const conversionCandidate = [v, "kn"] as const;

      expect(speed["mph"](conversionCandidate)).toEqual(expected);
      expect(milesPerHour(conversionCandidate)).toEqual(expected);
    });
  });


  describe('kn', () => {
    it.each([1, 10, 100])('should yield a kn measurement when given a number.', v => {
      expect(speed["kn"](v)).toEqual([v, "kn"]);
      expect(knots(v)).toEqual([v, "kn"]);
    });

    it.each([1, 10, 100])('should convert m/s to kn.', v => {
      const knotsConversion = linearConversion(0.514444);
      const metersPerSecondConversion = linearConversion(1);

      const [toBase, fromBase] = [
        knotsConversion[1],
        metersPerSecondConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kn"] as const;
      const conversionCandidate = [v, "m/s"] as const;

      expect(speed["kn"](conversionCandidate)).toEqual(expected);
      expect(knots(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert km/h to kn.', v => {
      const knotsConversion = linearConversion(0.514444);
      const kilometersPerHourConversion = linearConversion(0.277778);

      const [toBase, fromBase] = [
        knotsConversion[1],
        kilometersPerHourConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kn"] as const;
      const conversionCandidate = [v, "km/h"] as const;

      expect(speed["kn"](conversionCandidate)).toEqual(expected);
      expect(knots(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mph to kn.', v => {
      const knotsConversion = linearConversion(0.514444);
      const milesPerHourConversion = linearConversion(0.44704);

      const [toBase, fromBase] = [
        knotsConversion[1],
        milesPerHourConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kn"] as const;
      const conversionCandidate = [v, "mph"] as const;

      expect(speed["kn"](conversionCandidate)).toEqual(expected);
      expect(knots(conversionCandidate)).toEqual(expected);
    });


  });

});
