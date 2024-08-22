import {electricCurrent} from "!src/electric-current/factories";
import {megaamperes, kiloamperes, amperes, milliamperes, microamperes} from "!src/electric-current/factories";
import {linearConversion} from "!src/conversion";

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
});
