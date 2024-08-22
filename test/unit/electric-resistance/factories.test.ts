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
});
