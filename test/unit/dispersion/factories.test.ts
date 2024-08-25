import {dispersion} from "!src/dispersion/factories";
import {partsPerMillion, partsPerBillion, partsPerTrillion} from "!src/dispersion/factories";
import {linearConversion} from "!src/dimension/conversion";

describe("!src/dispersion/factories aliasing", () => {
  describe('dispersion["ppm"]', () => {
    it('should be aliased by "partsPerMillion".', () => {
      expect(partsPerMillion).toBe(dispersion["ppm"]);
    });
  });


  describe('dispersion["ppb"]', () => {
    it('should be aliased by "partsPerBillion".', () => {
      expect(partsPerBillion).toBe(dispersion["ppb"]);
    });
  });


  describe('dispersion["ppt"]', () => {
    it('should be aliased by "partsPerTrillion".', () => {
      expect(partsPerTrillion).toBe(dispersion["ppt"]);
    });
  });

});

describe("dispersion", () => {
  describe('ppm', () => {
    it.each([1, 10, 100])('should yield a ppm measurement when given a number.', v => {
      expect(dispersion["ppm"](v)).toEqual([v, "ppm"]);
      expect(partsPerMillion(v)).toEqual([v, "ppm"]);
    });



    it.each([1, 10, 100])('should convert %dppb to ppm.', v => {
      const partsPerMillionConversion = linearConversion(1);
      const partsPerBillionConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        partsPerBillionConversion[0],
        partsPerMillionConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ppm"] as const;
      const conversionCandidate = [v, "ppb"] as const;

      expect(dispersion["ppm"](conversionCandidate)).toEqual(expected);
      expect(partsPerMillion(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dppt to ppm.', v => {
      const partsPerMillionConversion = linearConversion(1);
      const partsPerTrillionConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        partsPerTrillionConversion[0],
        partsPerMillionConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ppm"] as const;
      const conversionCandidate = [v, "ppt"] as const;

      expect(dispersion["ppm"](conversionCandidate)).toEqual(expected);
      expect(partsPerMillion(conversionCandidate)).toEqual(expected);
    });
  });


  describe('ppb', () => {
    it.each([1, 10, 100])('should yield a ppb measurement when given a number.', v => {
      expect(dispersion["ppb"](v)).toEqual([v, "ppb"]);
      expect(partsPerBillion(v)).toEqual([v, "ppb"]);
    });

    it.each([1, 10, 100])('should convert %dppm to ppb.', v => {
      const partsPerBillionConversion = linearConversion(0.001);
      const partsPerMillionConversion = linearConversion(1);

      const [toBase, fromBase] = [
        partsPerMillionConversion[0],
        partsPerBillionConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ppb"] as const;
      const conversionCandidate = [v, "ppm"] as const;

      expect(dispersion["ppb"](conversionCandidate)).toEqual(expected);
      expect(partsPerBillion(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dppt to ppb.', v => {
      const partsPerBillionConversion = linearConversion(0.001);
      const partsPerTrillionConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        partsPerTrillionConversion[0],
        partsPerBillionConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ppb"] as const;
      const conversionCandidate = [v, "ppt"] as const;

      expect(dispersion["ppb"](conversionCandidate)).toEqual(expected);
      expect(partsPerBillion(conversionCandidate)).toEqual(expected);
    });
  });


  describe('ppt', () => {
    it.each([1, 10, 100])('should yield a ppt measurement when given a number.', v => {
      expect(dispersion["ppt"](v)).toEqual([v, "ppt"]);
      expect(partsPerTrillion(v)).toEqual([v, "ppt"]);
    });

    it.each([1, 10, 100])('should convert %dppm to ppt.', v => {
      const partsPerTrillionConversion = linearConversion(0.000001);
      const partsPerMillionConversion = linearConversion(1);

      const [toBase, fromBase] = [
        partsPerMillionConversion[0],
        partsPerTrillionConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ppt"] as const;
      const conversionCandidate = [v, "ppm"] as const;

      expect(dispersion["ppt"](conversionCandidate)).toEqual(expected);
      expect(partsPerTrillion(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dppb to ppt.', v => {
      const partsPerTrillionConversion = linearConversion(0.000001);
      const partsPerBillionConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        partsPerBillionConversion[0],
        partsPerTrillionConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "ppt"] as const;
      const conversionCandidate = [v, "ppb"] as const;

      expect(dispersion["ppt"](conversionCandidate)).toEqual(expected);
      expect(partsPerTrillion(conversionCandidate)).toEqual(expected);
    });


  });

});
