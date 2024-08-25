import {concentrationMass} from "!src/concentration-mass/factories";
import {gramsPerLiter, milligramsPerDeciliter} from "!src/concentration-mass/factories";
import {linearConversion} from "!src/dimension/conversion";

describe("!src/concentration-mass/factories aliasing", () => {
  describe('concentrationMass["g/L"]', () => {
    it('should be aliased by "gramsPerLiter".', () => {
      expect(gramsPerLiter).toBe(concentrationMass["g/L"]);
    });
  });


  describe('concentrationMass["mg/dL"]', () => {
    it('should be aliased by "milligramsPerDeciliter".', () => {
      expect(milligramsPerDeciliter).toBe(concentrationMass["mg/dL"]);
    });
  });

});

describe("concentrationMass", () => {
  describe('g/L', () => {
    it.each([1, 10, 100])('should yield a g/L measurement when given a number.', v => {
      expect(concentrationMass["g/L"](v)).toEqual([v, "g/L"]);
      expect(gramsPerLiter(v)).toEqual([v, "g/L"]);
    });



    it.each([1, 10, 100])('should convert %dmg/dL to g/L.', v => {
      const gramsPerLiterConversion = linearConversion(1);
      const milligramsPerDeciliterConversion = linearConversion(0.01);

      const [toBase, fromBase] = [
        milligramsPerDeciliterConversion[0],
        gramsPerLiterConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "g/L"] as const;
      const conversionCandidate = [v, "mg/dL"] as const;

      expect(concentrationMass["g/L"](conversionCandidate)).toEqual(expected);
      expect(gramsPerLiter(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mg/dL', () => {
    it.each([1, 10, 100])('should yield a mg/dL measurement when given a number.', v => {
      expect(concentrationMass["mg/dL"](v)).toEqual([v, "mg/dL"]);
      expect(milligramsPerDeciliter(v)).toEqual([v, "mg/dL"]);
    });

    it.each([1, 10, 100])('should convert %dg/L to mg/dL.', v => {
      const milligramsPerDeciliterConversion = linearConversion(0.01);
      const gramsPerLiterConversion = linearConversion(1);

      const [toBase, fromBase] = [
        gramsPerLiterConversion[0],
        milligramsPerDeciliterConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mg/dL"] as const;
      const conversionCandidate = [v, "g/L"] as const;

      expect(concentrationMass["mg/dL"](conversionCandidate)).toEqual(expected);
      expect(milligramsPerDeciliter(conversionCandidate)).toEqual(expected);
    });


  });

});
