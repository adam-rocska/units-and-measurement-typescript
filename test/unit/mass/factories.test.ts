import {mass} from "!src/mass/factories";
import {kilograms, grams, decigrams, centigrams, milligrams, micrograms, nanograms, picograms, ounces, pounds, stones, metricTons, shortTons, carats, ouncesTroy, slugs} from "!src/mass/factories";
import {linearConversion} from "!src/conversion";

describe("!src/mass/factories aliasing", () => {
  describe('mass["kg"]', () => {
    it('should be aliased by "kilograms".', () => {
      expect(kilograms).toBe(mass["kg"]);
    });
  });


  describe('mass["g"]', () => {
    it('should be aliased by "grams".', () => {
      expect(grams).toBe(mass["g"]);
    });
  });


  describe('mass["dg"]', () => {
    it('should be aliased by "decigrams".', () => {
      expect(decigrams).toBe(mass["dg"]);
    });
  });


  describe('mass["cg"]', () => {
    it('should be aliased by "centigrams".', () => {
      expect(centigrams).toBe(mass["cg"]);
    });
  });


  describe('mass["mg"]', () => {
    it('should be aliased by "milligrams".', () => {
      expect(milligrams).toBe(mass["mg"]);
    });
  });


  describe('mass["µg"]', () => {
    it('should be aliased by "micrograms".', () => {
      expect(micrograms).toBe(mass["µg"]);
    });
  });


  describe('mass["ng"]', () => {
    it('should be aliased by "nanograms".', () => {
      expect(nanograms).toBe(mass["ng"]);
    });
  });


  describe('mass["pg"]', () => {
    it('should be aliased by "picograms".', () => {
      expect(picograms).toBe(mass["pg"]);
    });
  });


  describe('mass["oz"]', () => {
    it('should be aliased by "ounces".', () => {
      expect(ounces).toBe(mass["oz"]);
    });
  });


  describe('mass["lb"]', () => {
    it('should be aliased by "pounds".', () => {
      expect(pounds).toBe(mass["lb"]);
    });
  });


  describe('mass["st"]', () => {
    it('should be aliased by "stones".', () => {
      expect(stones).toBe(mass["st"]);
    });
  });


  describe('mass["t"]', () => {
    it('should be aliased by "metricTons".', () => {
      expect(metricTons).toBe(mass["t"]);
    });
  });


  describe('mass["ton"]', () => {
    it('should be aliased by "shortTons".', () => {
      expect(shortTons).toBe(mass["ton"]);
    });
  });


  describe('mass["ct"]', () => {
    it('should be aliased by "carats".', () => {
      expect(carats).toBe(mass["ct"]);
    });
  });


  describe('mass["oz t"]', () => {
    it('should be aliased by "ouncesTroy".', () => {
      expect(ouncesTroy).toBe(mass["oz t"]);
    });
  });


  describe('mass["slug"]', () => {
    it('should be aliased by "slugs".', () => {
      expect(slugs).toBe(mass["slug"]);
    });
  });

});

describe("mass", () => {
});
