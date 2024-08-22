import {dispersion} from "!src/dispersion/factories";
import {partsPerMillion, partsPerBillion, partsPerTrillion} from "!src/dispersion/factories";
import {linearConversion} from "!src/conversion";

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
});
