import {acceleration} from "!src/acceleration/factories";
import {metersPerSecondSquared, gravity} from "!src/acceleration/factories";
import {linearConversion} from "!src/conversion";

describe("!src/acceleration/factories aliasing", () => {
  describe('acceleration["m/s²"]', () => {
    it('should be aliased by "metersPerSecondSquared".', () => {
      expect(metersPerSecondSquared).toBe(acceleration["m/s²"]);
    });
  });


  describe('acceleration["g"]', () => {
    it('should be aliased by "gravity".', () => {
      expect(gravity).toBe(acceleration["g"]);
    });
  });

});

describe("acceleration", () => {
  describe('m/s²', () => {
    it.each([1, 10, 100])('should yield a m/s² measurement when given a number.', v => {
      expect(acceleration["m/s²"](v)).toEqual([v, "m/s²"]);
      expect(metersPerSecondSquared(v)).toEqual([v, "m/s²"]);
    });



    it.each([1, 10, 100])('should convert g to m/s².', v => {
      const metersPerSecondSquaredConversion = linearConversion(1);
      const gravityConversion = linearConversion(9.81);

      const [toBase, fromBase] = [
        gravityConversion[0],
        metersPerSecondSquaredConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "m/s²"] as const;
      const conversionCandidate = [v, "g"] as const;

      expect(acceleration["m/s²"](conversionCandidate)).toEqual(expected);
      expect(metersPerSecondSquared(conversionCandidate)).toEqual(expected);
    });
  });


  describe('g', () => {
    it.each([1, 10, 100])('should yield a g measurement when given a number.', v => {
      expect(acceleration["g"](v)).toEqual([v, "g"]);
      expect(gravity(v)).toEqual([v, "g"]);
    });

    it.each([1, 10, 100])('should convert m/s² to g.', v => {
      const gravityConversion = linearConversion(9.81);
      const metersPerSecondSquaredConversion = linearConversion(1);

      const [toBase, fromBase] = [
        metersPerSecondSquaredConversion[0],
        gravityConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "g"] as const;
      const conversionCandidate = [v, "m/s²"] as const;

      expect(acceleration["g"](conversionCandidate)).toEqual(expected);
      expect(gravity(conversionCandidate)).toEqual(expected);
    });


  });

});
