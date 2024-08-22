import {pressure} from "!src/pressure/factories";
import {newtonsPerMetersSquared, gigapascals, megapascals, kilopascals, hectopascals, inchesOfMercury, bars, millibars, millimetersOfMercury, poundsForcePerSquareInch} from "!src/pressure/factories";
import {linearConversion} from "!src/conversion";

describe("!src/pressure/factories aliasing", () => {
  describe('pressure["N/m²"]', () => {
    it('should be aliased by "newtonsPerMetersSquared".', () => {
      expect(newtonsPerMetersSquared).toBe(pressure["N/m²"]);
    });
  });


  describe('pressure["GPa"]', () => {
    it('should be aliased by "gigapascals".', () => {
      expect(gigapascals).toBe(pressure["GPa"]);
    });
  });


  describe('pressure["MPa"]', () => {
    it('should be aliased by "megapascals".', () => {
      expect(megapascals).toBe(pressure["MPa"]);
    });
  });


  describe('pressure["kPa"]', () => {
    it('should be aliased by "kilopascals".', () => {
      expect(kilopascals).toBe(pressure["kPa"]);
    });
  });


  describe('pressure["hPa"]', () => {
    it('should be aliased by "hectopascals".', () => {
      expect(hectopascals).toBe(pressure["hPa"]);
    });
  });


  describe('pressure["inHg"]', () => {
    it('should be aliased by "inchesOfMercury".', () => {
      expect(inchesOfMercury).toBe(pressure["inHg"]);
    });
  });


  describe('pressure["bar"]', () => {
    it('should be aliased by "bars".', () => {
      expect(bars).toBe(pressure["bar"]);
    });
  });


  describe('pressure["mbar"]', () => {
    it('should be aliased by "millibars".', () => {
      expect(millibars).toBe(pressure["mbar"]);
    });
  });


  describe('pressure["mmHg"]', () => {
    it('should be aliased by "millimetersOfMercury".', () => {
      expect(millimetersOfMercury).toBe(pressure["mmHg"]);
    });
  });


  describe('pressure["psi"]', () => {
    it('should be aliased by "poundsForcePerSquareInch".', () => {
      expect(poundsForcePerSquareInch).toBe(pressure["psi"]);
    });
  });

});

describe("pressure", () => {
});
