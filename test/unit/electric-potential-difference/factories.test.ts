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
});
