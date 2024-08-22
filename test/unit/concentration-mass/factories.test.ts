import {concentrationMass} from "!src/concentration-mass/factories";
import {gramsPerLiter, milligramsPerDeciliter} from "!src/concentration-mass/factories";
import {linearConversion} from "!src/conversion";

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
});
