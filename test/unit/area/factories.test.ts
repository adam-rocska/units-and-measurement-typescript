import {area} from "!src/area/factories";
import {squareMegameters, squareKilometers, squareMeters, squareCentimeters, squareMillimeters, squareMicrometers, squareNanometers, squareInches, squareFeet, squareYards, squareMiles, acres, ares, hectares} from "!src/area/factories";
import {linearConversion} from "!src/conversion";

describe("!src/area/factories aliasing", () => {
  describe('area["Mm²"]', () => {
    it('should be aliased by "squareMegameters".', () => {
      expect(squareMegameters).toBe(area["Mm²"]);
    });
  });


  describe('area["km²"]', () => {
    it('should be aliased by "squareKilometers".', () => {
      expect(squareKilometers).toBe(area["km²"]);
    });
  });


  describe('area["m²"]', () => {
    it('should be aliased by "squareMeters".', () => {
      expect(squareMeters).toBe(area["m²"]);
    });
  });


  describe('area["cm²"]', () => {
    it('should be aliased by "squareCentimeters".', () => {
      expect(squareCentimeters).toBe(area["cm²"]);
    });
  });


  describe('area["mm²"]', () => {
    it('should be aliased by "squareMillimeters".', () => {
      expect(squareMillimeters).toBe(area["mm²"]);
    });
  });


  describe('area["µm²"]', () => {
    it('should be aliased by "squareMicrometers".', () => {
      expect(squareMicrometers).toBe(area["µm²"]);
    });
  });


  describe('area["nm²"]', () => {
    it('should be aliased by "squareNanometers".', () => {
      expect(squareNanometers).toBe(area["nm²"]);
    });
  });


  describe('area["in²"]', () => {
    it('should be aliased by "squareInches".', () => {
      expect(squareInches).toBe(area["in²"]);
    });
  });


  describe('area["ft²"]', () => {
    it('should be aliased by "squareFeet".', () => {
      expect(squareFeet).toBe(area["ft²"]);
    });
  });


  describe('area["yd²"]', () => {
    it('should be aliased by "squareYards".', () => {
      expect(squareYards).toBe(area["yd²"]);
    });
  });


  describe('area["mi²"]', () => {
    it('should be aliased by "squareMiles".', () => {
      expect(squareMiles).toBe(area["mi²"]);
    });
  });


  describe('area["ac"]', () => {
    it('should be aliased by "acres".', () => {
      expect(acres).toBe(area["ac"]);
    });
  });


  describe('area["a"]', () => {
    it('should be aliased by "ares".', () => {
      expect(ares).toBe(area["a"]);
    });
  });


  describe('area["ha"]', () => {
    it('should be aliased by "hectares".', () => {
      expect(hectares).toBe(area["ha"]);
    });
  });

});

describe("area", () => {
});
