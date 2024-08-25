import {pressure} from "!src/pressure/factories";
import {newtonsPerMetersSquared, gigapascals, megapascals, kilopascals, hectopascals, inchesOfMercury, bars, millibars, millimetersOfMercury, poundsForcePerSquareInch} from "!src/pressure/factories";
import {linearConversion} from "!src/dimension/conversion";

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
  describe('N/m²', () => {
    it.each([1, 10, 100])('should yield a N/m² measurement when given a number.', v => {
      expect(pressure["N/m²"](v)).toEqual([v, "N/m²"]);
      expect(newtonsPerMetersSquared(v)).toEqual([v, "N/m²"]);
    });



    it.each([1, 10, 100])('should convert %dGPa to N/m².', v => {
      const newtonsPerMetersSquaredConversion = linearConversion(1);
      const gigapascalsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigapascalsConversion[0],
        newtonsPerMetersSquaredConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "N/m²"] as const;
      const conversionCandidate = [v, "GPa"] as const;

      expect(pressure["N/m²"](conversionCandidate)).toEqual(expected);
      expect(newtonsPerMetersSquared(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMPa to N/m².', v => {
      const newtonsPerMetersSquaredConversion = linearConversion(1);
      const megapascalsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megapascalsConversion[0],
        newtonsPerMetersSquaredConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "N/m²"] as const;
      const conversionCandidate = [v, "MPa"] as const;

      expect(pressure["N/m²"](conversionCandidate)).toEqual(expected);
      expect(newtonsPerMetersSquared(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkPa to N/m².', v => {
      const newtonsPerMetersSquaredConversion = linearConversion(1);
      const kilopascalsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilopascalsConversion[0],
        newtonsPerMetersSquaredConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "N/m²"] as const;
      const conversionCandidate = [v, "kPa"] as const;

      expect(pressure["N/m²"](conversionCandidate)).toEqual(expected);
      expect(newtonsPerMetersSquared(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhPa to N/m².', v => {
      const newtonsPerMetersSquaredConversion = linearConversion(1);
      const hectopascalsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectopascalsConversion[0],
        newtonsPerMetersSquaredConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "N/m²"] as const;
      const conversionCandidate = [v, "hPa"] as const;

      expect(pressure["N/m²"](conversionCandidate)).toEqual(expected);
      expect(newtonsPerMetersSquared(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dinHg to N/m².', v => {
      const newtonsPerMetersSquaredConversion = linearConversion(1);
      const inchesOfMercuryConversion = linearConversion(3386.39);

      const [toBase, fromBase] = [
        inchesOfMercuryConversion[0],
        newtonsPerMetersSquaredConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "N/m²"] as const;
      const conversionCandidate = [v, "inHg"] as const;

      expect(pressure["N/m²"](conversionCandidate)).toEqual(expected);
      expect(newtonsPerMetersSquared(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbar to N/m².', v => {
      const newtonsPerMetersSquaredConversion = linearConversion(1);
      const barsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        barsConversion[0],
        newtonsPerMetersSquaredConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "N/m²"] as const;
      const conversionCandidate = [v, "bar"] as const;

      expect(pressure["N/m²"](conversionCandidate)).toEqual(expected);
      expect(newtonsPerMetersSquared(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmbar to N/m².', v => {
      const newtonsPerMetersSquaredConversion = linearConversion(1);
      const millibarsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        millibarsConversion[0],
        newtonsPerMetersSquaredConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "N/m²"] as const;
      const conversionCandidate = [v, "mbar"] as const;

      expect(pressure["N/m²"](conversionCandidate)).toEqual(expected);
      expect(newtonsPerMetersSquared(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmmHg to N/m².', v => {
      const newtonsPerMetersSquaredConversion = linearConversion(1);
      const millimetersOfMercuryConversion = linearConversion(133.322);

      const [toBase, fromBase] = [
        millimetersOfMercuryConversion[0],
        newtonsPerMetersSquaredConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "N/m²"] as const;
      const conversionCandidate = [v, "mmHg"] as const;

      expect(pressure["N/m²"](conversionCandidate)).toEqual(expected);
      expect(newtonsPerMetersSquared(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpsi to N/m².', v => {
      const newtonsPerMetersSquaredConversion = linearConversion(1);
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);

      const [toBase, fromBase] = [
        poundsForcePerSquareInchConversion[0],
        newtonsPerMetersSquaredConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "N/m²"] as const;
      const conversionCandidate = [v, "psi"] as const;

      expect(pressure["N/m²"](conversionCandidate)).toEqual(expected);
      expect(newtonsPerMetersSquared(conversionCandidate)).toEqual(expected);
    });
  });


  describe('GPa', () => {
    it.each([1, 10, 100])('should yield a GPa measurement when given a number.', v => {
      expect(pressure["GPa"](v)).toEqual([v, "GPa"]);
      expect(gigapascals(v)).toEqual([v, "GPa"]);
    });

    it.each([1, 10, 100])('should convert %dN/m² to GPa.', v => {
      const gigapascalsConversion = linearConversion(1000000000);
      const newtonsPerMetersSquaredConversion = linearConversion(1);

      const [toBase, fromBase] = [
        newtonsPerMetersSquaredConversion[0],
        gigapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GPa"] as const;
      const conversionCandidate = [v, "N/m²"] as const;

      expect(pressure["GPa"](conversionCandidate)).toEqual(expected);
      expect(gigapascals(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dMPa to GPa.', v => {
      const gigapascalsConversion = linearConversion(1000000000);
      const megapascalsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megapascalsConversion[0],
        gigapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GPa"] as const;
      const conversionCandidate = [v, "MPa"] as const;

      expect(pressure["GPa"](conversionCandidate)).toEqual(expected);
      expect(gigapascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkPa to GPa.', v => {
      const gigapascalsConversion = linearConversion(1000000000);
      const kilopascalsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilopascalsConversion[0],
        gigapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GPa"] as const;
      const conversionCandidate = [v, "kPa"] as const;

      expect(pressure["GPa"](conversionCandidate)).toEqual(expected);
      expect(gigapascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhPa to GPa.', v => {
      const gigapascalsConversion = linearConversion(1000000000);
      const hectopascalsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectopascalsConversion[0],
        gigapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GPa"] as const;
      const conversionCandidate = [v, "hPa"] as const;

      expect(pressure["GPa"](conversionCandidate)).toEqual(expected);
      expect(gigapascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dinHg to GPa.', v => {
      const gigapascalsConversion = linearConversion(1000000000);
      const inchesOfMercuryConversion = linearConversion(3386.39);

      const [toBase, fromBase] = [
        inchesOfMercuryConversion[0],
        gigapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GPa"] as const;
      const conversionCandidate = [v, "inHg"] as const;

      expect(pressure["GPa"](conversionCandidate)).toEqual(expected);
      expect(gigapascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbar to GPa.', v => {
      const gigapascalsConversion = linearConversion(1000000000);
      const barsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        barsConversion[0],
        gigapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GPa"] as const;
      const conversionCandidate = [v, "bar"] as const;

      expect(pressure["GPa"](conversionCandidate)).toEqual(expected);
      expect(gigapascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmbar to GPa.', v => {
      const gigapascalsConversion = linearConversion(1000000000);
      const millibarsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        millibarsConversion[0],
        gigapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GPa"] as const;
      const conversionCandidate = [v, "mbar"] as const;

      expect(pressure["GPa"](conversionCandidate)).toEqual(expected);
      expect(gigapascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmmHg to GPa.', v => {
      const gigapascalsConversion = linearConversion(1000000000);
      const millimetersOfMercuryConversion = linearConversion(133.322);

      const [toBase, fromBase] = [
        millimetersOfMercuryConversion[0],
        gigapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GPa"] as const;
      const conversionCandidate = [v, "mmHg"] as const;

      expect(pressure["GPa"](conversionCandidate)).toEqual(expected);
      expect(gigapascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpsi to GPa.', v => {
      const gigapascalsConversion = linearConversion(1000000000);
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);

      const [toBase, fromBase] = [
        poundsForcePerSquareInchConversion[0],
        gigapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GPa"] as const;
      const conversionCandidate = [v, "psi"] as const;

      expect(pressure["GPa"](conversionCandidate)).toEqual(expected);
      expect(gigapascals(conversionCandidate)).toEqual(expected);
    });
  });


  describe('MPa', () => {
    it.each([1, 10, 100])('should yield a MPa measurement when given a number.', v => {
      expect(pressure["MPa"](v)).toEqual([v, "MPa"]);
      expect(megapascals(v)).toEqual([v, "MPa"]);
    });

    it.each([1, 10, 100])('should convert %dN/m² to MPa.', v => {
      const megapascalsConversion = linearConversion(1000000);
      const newtonsPerMetersSquaredConversion = linearConversion(1);

      const [toBase, fromBase] = [
        newtonsPerMetersSquaredConversion[0],
        megapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MPa"] as const;
      const conversionCandidate = [v, "N/m²"] as const;

      expect(pressure["MPa"](conversionCandidate)).toEqual(expected);
      expect(megapascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGPa to MPa.', v => {
      const megapascalsConversion = linearConversion(1000000);
      const gigapascalsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigapascalsConversion[0],
        megapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MPa"] as const;
      const conversionCandidate = [v, "GPa"] as const;

      expect(pressure["MPa"](conversionCandidate)).toEqual(expected);
      expect(megapascals(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dkPa to MPa.', v => {
      const megapascalsConversion = linearConversion(1000000);
      const kilopascalsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilopascalsConversion[0],
        megapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MPa"] as const;
      const conversionCandidate = [v, "kPa"] as const;

      expect(pressure["MPa"](conversionCandidate)).toEqual(expected);
      expect(megapascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhPa to MPa.', v => {
      const megapascalsConversion = linearConversion(1000000);
      const hectopascalsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectopascalsConversion[0],
        megapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MPa"] as const;
      const conversionCandidate = [v, "hPa"] as const;

      expect(pressure["MPa"](conversionCandidate)).toEqual(expected);
      expect(megapascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dinHg to MPa.', v => {
      const megapascalsConversion = linearConversion(1000000);
      const inchesOfMercuryConversion = linearConversion(3386.39);

      const [toBase, fromBase] = [
        inchesOfMercuryConversion[0],
        megapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MPa"] as const;
      const conversionCandidate = [v, "inHg"] as const;

      expect(pressure["MPa"](conversionCandidate)).toEqual(expected);
      expect(megapascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbar to MPa.', v => {
      const megapascalsConversion = linearConversion(1000000);
      const barsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        barsConversion[0],
        megapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MPa"] as const;
      const conversionCandidate = [v, "bar"] as const;

      expect(pressure["MPa"](conversionCandidate)).toEqual(expected);
      expect(megapascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmbar to MPa.', v => {
      const megapascalsConversion = linearConversion(1000000);
      const millibarsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        millibarsConversion[0],
        megapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MPa"] as const;
      const conversionCandidate = [v, "mbar"] as const;

      expect(pressure["MPa"](conversionCandidate)).toEqual(expected);
      expect(megapascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmmHg to MPa.', v => {
      const megapascalsConversion = linearConversion(1000000);
      const millimetersOfMercuryConversion = linearConversion(133.322);

      const [toBase, fromBase] = [
        millimetersOfMercuryConversion[0],
        megapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MPa"] as const;
      const conversionCandidate = [v, "mmHg"] as const;

      expect(pressure["MPa"](conversionCandidate)).toEqual(expected);
      expect(megapascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpsi to MPa.', v => {
      const megapascalsConversion = linearConversion(1000000);
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);

      const [toBase, fromBase] = [
        poundsForcePerSquareInchConversion[0],
        megapascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MPa"] as const;
      const conversionCandidate = [v, "psi"] as const;

      expect(pressure["MPa"](conversionCandidate)).toEqual(expected);
      expect(megapascals(conversionCandidate)).toEqual(expected);
    });
  });


  describe('kPa', () => {
    it.each([1, 10, 100])('should yield a kPa measurement when given a number.', v => {
      expect(pressure["kPa"](v)).toEqual([v, "kPa"]);
      expect(kilopascals(v)).toEqual([v, "kPa"]);
    });

    it.each([1, 10, 100])('should convert %dN/m² to kPa.', v => {
      const kilopascalsConversion = linearConversion(1000);
      const newtonsPerMetersSquaredConversion = linearConversion(1);

      const [toBase, fromBase] = [
        newtonsPerMetersSquaredConversion[0],
        kilopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kPa"] as const;
      const conversionCandidate = [v, "N/m²"] as const;

      expect(pressure["kPa"](conversionCandidate)).toEqual(expected);
      expect(kilopascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGPa to kPa.', v => {
      const kilopascalsConversion = linearConversion(1000);
      const gigapascalsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigapascalsConversion[0],
        kilopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kPa"] as const;
      const conversionCandidate = [v, "GPa"] as const;

      expect(pressure["kPa"](conversionCandidate)).toEqual(expected);
      expect(kilopascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMPa to kPa.', v => {
      const kilopascalsConversion = linearConversion(1000);
      const megapascalsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megapascalsConversion[0],
        kilopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kPa"] as const;
      const conversionCandidate = [v, "MPa"] as const;

      expect(pressure["kPa"](conversionCandidate)).toEqual(expected);
      expect(kilopascals(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dhPa to kPa.', v => {
      const kilopascalsConversion = linearConversion(1000);
      const hectopascalsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectopascalsConversion[0],
        kilopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kPa"] as const;
      const conversionCandidate = [v, "hPa"] as const;

      expect(pressure["kPa"](conversionCandidate)).toEqual(expected);
      expect(kilopascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dinHg to kPa.', v => {
      const kilopascalsConversion = linearConversion(1000);
      const inchesOfMercuryConversion = linearConversion(3386.39);

      const [toBase, fromBase] = [
        inchesOfMercuryConversion[0],
        kilopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kPa"] as const;
      const conversionCandidate = [v, "inHg"] as const;

      expect(pressure["kPa"](conversionCandidate)).toEqual(expected);
      expect(kilopascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbar to kPa.', v => {
      const kilopascalsConversion = linearConversion(1000);
      const barsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        barsConversion[0],
        kilopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kPa"] as const;
      const conversionCandidate = [v, "bar"] as const;

      expect(pressure["kPa"](conversionCandidate)).toEqual(expected);
      expect(kilopascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmbar to kPa.', v => {
      const kilopascalsConversion = linearConversion(1000);
      const millibarsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        millibarsConversion[0],
        kilopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kPa"] as const;
      const conversionCandidate = [v, "mbar"] as const;

      expect(pressure["kPa"](conversionCandidate)).toEqual(expected);
      expect(kilopascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmmHg to kPa.', v => {
      const kilopascalsConversion = linearConversion(1000);
      const millimetersOfMercuryConversion = linearConversion(133.322);

      const [toBase, fromBase] = [
        millimetersOfMercuryConversion[0],
        kilopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kPa"] as const;
      const conversionCandidate = [v, "mmHg"] as const;

      expect(pressure["kPa"](conversionCandidate)).toEqual(expected);
      expect(kilopascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpsi to kPa.', v => {
      const kilopascalsConversion = linearConversion(1000);
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);

      const [toBase, fromBase] = [
        poundsForcePerSquareInchConversion[0],
        kilopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kPa"] as const;
      const conversionCandidate = [v, "psi"] as const;

      expect(pressure["kPa"](conversionCandidate)).toEqual(expected);
      expect(kilopascals(conversionCandidate)).toEqual(expected);
    });
  });


  describe('hPa', () => {
    it.each([1, 10, 100])('should yield a hPa measurement when given a number.', v => {
      expect(pressure["hPa"](v)).toEqual([v, "hPa"]);
      expect(hectopascals(v)).toEqual([v, "hPa"]);
    });

    it.each([1, 10, 100])('should convert %dN/m² to hPa.', v => {
      const hectopascalsConversion = linearConversion(100);
      const newtonsPerMetersSquaredConversion = linearConversion(1);

      const [toBase, fromBase] = [
        newtonsPerMetersSquaredConversion[0],
        hectopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hPa"] as const;
      const conversionCandidate = [v, "N/m²"] as const;

      expect(pressure["hPa"](conversionCandidate)).toEqual(expected);
      expect(hectopascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGPa to hPa.', v => {
      const hectopascalsConversion = linearConversion(100);
      const gigapascalsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigapascalsConversion[0],
        hectopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hPa"] as const;
      const conversionCandidate = [v, "GPa"] as const;

      expect(pressure["hPa"](conversionCandidate)).toEqual(expected);
      expect(hectopascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMPa to hPa.', v => {
      const hectopascalsConversion = linearConversion(100);
      const megapascalsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megapascalsConversion[0],
        hectopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hPa"] as const;
      const conversionCandidate = [v, "MPa"] as const;

      expect(pressure["hPa"](conversionCandidate)).toEqual(expected);
      expect(hectopascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkPa to hPa.', v => {
      const hectopascalsConversion = linearConversion(100);
      const kilopascalsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilopascalsConversion[0],
        hectopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hPa"] as const;
      const conversionCandidate = [v, "kPa"] as const;

      expect(pressure["hPa"](conversionCandidate)).toEqual(expected);
      expect(hectopascals(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dinHg to hPa.', v => {
      const hectopascalsConversion = linearConversion(100);
      const inchesOfMercuryConversion = linearConversion(3386.39);

      const [toBase, fromBase] = [
        inchesOfMercuryConversion[0],
        hectopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hPa"] as const;
      const conversionCandidate = [v, "inHg"] as const;

      expect(pressure["hPa"](conversionCandidate)).toEqual(expected);
      expect(hectopascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbar to hPa.', v => {
      const hectopascalsConversion = linearConversion(100);
      const barsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        barsConversion[0],
        hectopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hPa"] as const;
      const conversionCandidate = [v, "bar"] as const;

      expect(pressure["hPa"](conversionCandidate)).toEqual(expected);
      expect(hectopascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmbar to hPa.', v => {
      const hectopascalsConversion = linearConversion(100);
      const millibarsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        millibarsConversion[0],
        hectopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hPa"] as const;
      const conversionCandidate = [v, "mbar"] as const;

      expect(pressure["hPa"](conversionCandidate)).toEqual(expected);
      expect(hectopascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmmHg to hPa.', v => {
      const hectopascalsConversion = linearConversion(100);
      const millimetersOfMercuryConversion = linearConversion(133.322);

      const [toBase, fromBase] = [
        millimetersOfMercuryConversion[0],
        hectopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hPa"] as const;
      const conversionCandidate = [v, "mmHg"] as const;

      expect(pressure["hPa"](conversionCandidate)).toEqual(expected);
      expect(hectopascals(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpsi to hPa.', v => {
      const hectopascalsConversion = linearConversion(100);
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);

      const [toBase, fromBase] = [
        poundsForcePerSquareInchConversion[0],
        hectopascalsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hPa"] as const;
      const conversionCandidate = [v, "psi"] as const;

      expect(pressure["hPa"](conversionCandidate)).toEqual(expected);
      expect(hectopascals(conversionCandidate)).toEqual(expected);
    });
  });


  describe('inHg', () => {
    it.each([1, 10, 100])('should yield a inHg measurement when given a number.', v => {
      expect(pressure["inHg"](v)).toEqual([v, "inHg"]);
      expect(inchesOfMercury(v)).toEqual([v, "inHg"]);
    });

    it.each([1, 10, 100])('should convert %dN/m² to inHg.', v => {
      const inchesOfMercuryConversion = linearConversion(3386.39);
      const newtonsPerMetersSquaredConversion = linearConversion(1);

      const [toBase, fromBase] = [
        newtonsPerMetersSquaredConversion[0],
        inchesOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "inHg"] as const;
      const conversionCandidate = [v, "N/m²"] as const;

      expect(pressure["inHg"](conversionCandidate)).toEqual(expected);
      expect(inchesOfMercury(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGPa to inHg.', v => {
      const inchesOfMercuryConversion = linearConversion(3386.39);
      const gigapascalsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigapascalsConversion[0],
        inchesOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "inHg"] as const;
      const conversionCandidate = [v, "GPa"] as const;

      expect(pressure["inHg"](conversionCandidate)).toEqual(expected);
      expect(inchesOfMercury(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMPa to inHg.', v => {
      const inchesOfMercuryConversion = linearConversion(3386.39);
      const megapascalsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megapascalsConversion[0],
        inchesOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "inHg"] as const;
      const conversionCandidate = [v, "MPa"] as const;

      expect(pressure["inHg"](conversionCandidate)).toEqual(expected);
      expect(inchesOfMercury(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkPa to inHg.', v => {
      const inchesOfMercuryConversion = linearConversion(3386.39);
      const kilopascalsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilopascalsConversion[0],
        inchesOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "inHg"] as const;
      const conversionCandidate = [v, "kPa"] as const;

      expect(pressure["inHg"](conversionCandidate)).toEqual(expected);
      expect(inchesOfMercury(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhPa to inHg.', v => {
      const inchesOfMercuryConversion = linearConversion(3386.39);
      const hectopascalsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectopascalsConversion[0],
        inchesOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "inHg"] as const;
      const conversionCandidate = [v, "hPa"] as const;

      expect(pressure["inHg"](conversionCandidate)).toEqual(expected);
      expect(inchesOfMercury(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dbar to inHg.', v => {
      const inchesOfMercuryConversion = linearConversion(3386.39);
      const barsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        barsConversion[0],
        inchesOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "inHg"] as const;
      const conversionCandidate = [v, "bar"] as const;

      expect(pressure["inHg"](conversionCandidate)).toEqual(expected);
      expect(inchesOfMercury(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmbar to inHg.', v => {
      const inchesOfMercuryConversion = linearConversion(3386.39);
      const millibarsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        millibarsConversion[0],
        inchesOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "inHg"] as const;
      const conversionCandidate = [v, "mbar"] as const;

      expect(pressure["inHg"](conversionCandidate)).toEqual(expected);
      expect(inchesOfMercury(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmmHg to inHg.', v => {
      const inchesOfMercuryConversion = linearConversion(3386.39);
      const millimetersOfMercuryConversion = linearConversion(133.322);

      const [toBase, fromBase] = [
        millimetersOfMercuryConversion[0],
        inchesOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "inHg"] as const;
      const conversionCandidate = [v, "mmHg"] as const;

      expect(pressure["inHg"](conversionCandidate)).toEqual(expected);
      expect(inchesOfMercury(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpsi to inHg.', v => {
      const inchesOfMercuryConversion = linearConversion(3386.39);
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);

      const [toBase, fromBase] = [
        poundsForcePerSquareInchConversion[0],
        inchesOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "inHg"] as const;
      const conversionCandidate = [v, "psi"] as const;

      expect(pressure["inHg"](conversionCandidate)).toEqual(expected);
      expect(inchesOfMercury(conversionCandidate)).toEqual(expected);
    });
  });


  describe('bar', () => {
    it.each([1, 10, 100])('should yield a bar measurement when given a number.', v => {
      expect(pressure["bar"](v)).toEqual([v, "bar"]);
      expect(bars(v)).toEqual([v, "bar"]);
    });

    it.each([1, 10, 100])('should convert %dN/m² to bar.', v => {
      const barsConversion = linearConversion(100000);
      const newtonsPerMetersSquaredConversion = linearConversion(1);

      const [toBase, fromBase] = [
        newtonsPerMetersSquaredConversion[0],
        barsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bar"] as const;
      const conversionCandidate = [v, "N/m²"] as const;

      expect(pressure["bar"](conversionCandidate)).toEqual(expected);
      expect(bars(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGPa to bar.', v => {
      const barsConversion = linearConversion(100000);
      const gigapascalsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigapascalsConversion[0],
        barsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bar"] as const;
      const conversionCandidate = [v, "GPa"] as const;

      expect(pressure["bar"](conversionCandidate)).toEqual(expected);
      expect(bars(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMPa to bar.', v => {
      const barsConversion = linearConversion(100000);
      const megapascalsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megapascalsConversion[0],
        barsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bar"] as const;
      const conversionCandidate = [v, "MPa"] as const;

      expect(pressure["bar"](conversionCandidate)).toEqual(expected);
      expect(bars(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkPa to bar.', v => {
      const barsConversion = linearConversion(100000);
      const kilopascalsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilopascalsConversion[0],
        barsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bar"] as const;
      const conversionCandidate = [v, "kPa"] as const;

      expect(pressure["bar"](conversionCandidate)).toEqual(expected);
      expect(bars(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhPa to bar.', v => {
      const barsConversion = linearConversion(100000);
      const hectopascalsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectopascalsConversion[0],
        barsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bar"] as const;
      const conversionCandidate = [v, "hPa"] as const;

      expect(pressure["bar"](conversionCandidate)).toEqual(expected);
      expect(bars(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dinHg to bar.', v => {
      const barsConversion = linearConversion(100000);
      const inchesOfMercuryConversion = linearConversion(3386.39);

      const [toBase, fromBase] = [
        inchesOfMercuryConversion[0],
        barsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bar"] as const;
      const conversionCandidate = [v, "inHg"] as const;

      expect(pressure["bar"](conversionCandidate)).toEqual(expected);
      expect(bars(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dmbar to bar.', v => {
      const barsConversion = linearConversion(100000);
      const millibarsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        millibarsConversion[0],
        barsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bar"] as const;
      const conversionCandidate = [v, "mbar"] as const;

      expect(pressure["bar"](conversionCandidate)).toEqual(expected);
      expect(bars(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmmHg to bar.', v => {
      const barsConversion = linearConversion(100000);
      const millimetersOfMercuryConversion = linearConversion(133.322);

      const [toBase, fromBase] = [
        millimetersOfMercuryConversion[0],
        barsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bar"] as const;
      const conversionCandidate = [v, "mmHg"] as const;

      expect(pressure["bar"](conversionCandidate)).toEqual(expected);
      expect(bars(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpsi to bar.', v => {
      const barsConversion = linearConversion(100000);
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);

      const [toBase, fromBase] = [
        poundsForcePerSquareInchConversion[0],
        barsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "bar"] as const;
      const conversionCandidate = [v, "psi"] as const;

      expect(pressure["bar"](conversionCandidate)).toEqual(expected);
      expect(bars(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mbar', () => {
    it.each([1, 10, 100])('should yield a mbar measurement when given a number.', v => {
      expect(pressure["mbar"](v)).toEqual([v, "mbar"]);
      expect(millibars(v)).toEqual([v, "mbar"]);
    });

    it.each([1, 10, 100])('should convert %dN/m² to mbar.', v => {
      const millibarsConversion = linearConversion(100);
      const newtonsPerMetersSquaredConversion = linearConversion(1);

      const [toBase, fromBase] = [
        newtonsPerMetersSquaredConversion[0],
        millibarsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mbar"] as const;
      const conversionCandidate = [v, "N/m²"] as const;

      expect(pressure["mbar"](conversionCandidate)).toEqual(expected);
      expect(millibars(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGPa to mbar.', v => {
      const millibarsConversion = linearConversion(100);
      const gigapascalsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigapascalsConversion[0],
        millibarsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mbar"] as const;
      const conversionCandidate = [v, "GPa"] as const;

      expect(pressure["mbar"](conversionCandidate)).toEqual(expected);
      expect(millibars(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMPa to mbar.', v => {
      const millibarsConversion = linearConversion(100);
      const megapascalsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megapascalsConversion[0],
        millibarsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mbar"] as const;
      const conversionCandidate = [v, "MPa"] as const;

      expect(pressure["mbar"](conversionCandidate)).toEqual(expected);
      expect(millibars(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkPa to mbar.', v => {
      const millibarsConversion = linearConversion(100);
      const kilopascalsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilopascalsConversion[0],
        millibarsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mbar"] as const;
      const conversionCandidate = [v, "kPa"] as const;

      expect(pressure["mbar"](conversionCandidate)).toEqual(expected);
      expect(millibars(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhPa to mbar.', v => {
      const millibarsConversion = linearConversion(100);
      const hectopascalsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectopascalsConversion[0],
        millibarsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mbar"] as const;
      const conversionCandidate = [v, "hPa"] as const;

      expect(pressure["mbar"](conversionCandidate)).toEqual(expected);
      expect(millibars(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dinHg to mbar.', v => {
      const millibarsConversion = linearConversion(100);
      const inchesOfMercuryConversion = linearConversion(3386.39);

      const [toBase, fromBase] = [
        inchesOfMercuryConversion[0],
        millibarsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mbar"] as const;
      const conversionCandidate = [v, "inHg"] as const;

      expect(pressure["mbar"](conversionCandidate)).toEqual(expected);
      expect(millibars(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbar to mbar.', v => {
      const millibarsConversion = linearConversion(100);
      const barsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        barsConversion[0],
        millibarsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mbar"] as const;
      const conversionCandidate = [v, "bar"] as const;

      expect(pressure["mbar"](conversionCandidate)).toEqual(expected);
      expect(millibars(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dmmHg to mbar.', v => {
      const millibarsConversion = linearConversion(100);
      const millimetersOfMercuryConversion = linearConversion(133.322);

      const [toBase, fromBase] = [
        millimetersOfMercuryConversion[0],
        millibarsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mbar"] as const;
      const conversionCandidate = [v, "mmHg"] as const;

      expect(pressure["mbar"](conversionCandidate)).toEqual(expected);
      expect(millibars(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dpsi to mbar.', v => {
      const millibarsConversion = linearConversion(100);
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);

      const [toBase, fromBase] = [
        poundsForcePerSquareInchConversion[0],
        millibarsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mbar"] as const;
      const conversionCandidate = [v, "psi"] as const;

      expect(pressure["mbar"](conversionCandidate)).toEqual(expected);
      expect(millibars(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mmHg', () => {
    it.each([1, 10, 100])('should yield a mmHg measurement when given a number.', v => {
      expect(pressure["mmHg"](v)).toEqual([v, "mmHg"]);
      expect(millimetersOfMercury(v)).toEqual([v, "mmHg"]);
    });

    it.each([1, 10, 100])('should convert %dN/m² to mmHg.', v => {
      const millimetersOfMercuryConversion = linearConversion(133.322);
      const newtonsPerMetersSquaredConversion = linearConversion(1);

      const [toBase, fromBase] = [
        newtonsPerMetersSquaredConversion[0],
        millimetersOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mmHg"] as const;
      const conversionCandidate = [v, "N/m²"] as const;

      expect(pressure["mmHg"](conversionCandidate)).toEqual(expected);
      expect(millimetersOfMercury(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGPa to mmHg.', v => {
      const millimetersOfMercuryConversion = linearConversion(133.322);
      const gigapascalsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigapascalsConversion[0],
        millimetersOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mmHg"] as const;
      const conversionCandidate = [v, "GPa"] as const;

      expect(pressure["mmHg"](conversionCandidate)).toEqual(expected);
      expect(millimetersOfMercury(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMPa to mmHg.', v => {
      const millimetersOfMercuryConversion = linearConversion(133.322);
      const megapascalsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megapascalsConversion[0],
        millimetersOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mmHg"] as const;
      const conversionCandidate = [v, "MPa"] as const;

      expect(pressure["mmHg"](conversionCandidate)).toEqual(expected);
      expect(millimetersOfMercury(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkPa to mmHg.', v => {
      const millimetersOfMercuryConversion = linearConversion(133.322);
      const kilopascalsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilopascalsConversion[0],
        millimetersOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mmHg"] as const;
      const conversionCandidate = [v, "kPa"] as const;

      expect(pressure["mmHg"](conversionCandidate)).toEqual(expected);
      expect(millimetersOfMercury(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhPa to mmHg.', v => {
      const millimetersOfMercuryConversion = linearConversion(133.322);
      const hectopascalsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectopascalsConversion[0],
        millimetersOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mmHg"] as const;
      const conversionCandidate = [v, "hPa"] as const;

      expect(pressure["mmHg"](conversionCandidate)).toEqual(expected);
      expect(millimetersOfMercury(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dinHg to mmHg.', v => {
      const millimetersOfMercuryConversion = linearConversion(133.322);
      const inchesOfMercuryConversion = linearConversion(3386.39);

      const [toBase, fromBase] = [
        inchesOfMercuryConversion[0],
        millimetersOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mmHg"] as const;
      const conversionCandidate = [v, "inHg"] as const;

      expect(pressure["mmHg"](conversionCandidate)).toEqual(expected);
      expect(millimetersOfMercury(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbar to mmHg.', v => {
      const millimetersOfMercuryConversion = linearConversion(133.322);
      const barsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        barsConversion[0],
        millimetersOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mmHg"] as const;
      const conversionCandidate = [v, "bar"] as const;

      expect(pressure["mmHg"](conversionCandidate)).toEqual(expected);
      expect(millimetersOfMercury(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmbar to mmHg.', v => {
      const millimetersOfMercuryConversion = linearConversion(133.322);
      const millibarsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        millibarsConversion[0],
        millimetersOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mmHg"] as const;
      const conversionCandidate = [v, "mbar"] as const;

      expect(pressure["mmHg"](conversionCandidate)).toEqual(expected);
      expect(millimetersOfMercury(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dpsi to mmHg.', v => {
      const millimetersOfMercuryConversion = linearConversion(133.322);
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);

      const [toBase, fromBase] = [
        poundsForcePerSquareInchConversion[0],
        millimetersOfMercuryConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mmHg"] as const;
      const conversionCandidate = [v, "psi"] as const;

      expect(pressure["mmHg"](conversionCandidate)).toEqual(expected);
      expect(millimetersOfMercury(conversionCandidate)).toEqual(expected);
    });
  });


  describe('psi', () => {
    it.each([1, 10, 100])('should yield a psi measurement when given a number.', v => {
      expect(pressure["psi"](v)).toEqual([v, "psi"]);
      expect(poundsForcePerSquareInch(v)).toEqual([v, "psi"]);
    });

    it.each([1, 10, 100])('should convert %dN/m² to psi.', v => {
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);
      const newtonsPerMetersSquaredConversion = linearConversion(1);

      const [toBase, fromBase] = [
        newtonsPerMetersSquaredConversion[0],
        poundsForcePerSquareInchConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "psi"] as const;
      const conversionCandidate = [v, "N/m²"] as const;

      expect(pressure["psi"](conversionCandidate)).toEqual(expected);
      expect(poundsForcePerSquareInch(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGPa to psi.', v => {
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);
      const gigapascalsConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigapascalsConversion[0],
        poundsForcePerSquareInchConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "psi"] as const;
      const conversionCandidate = [v, "GPa"] as const;

      expect(pressure["psi"](conversionCandidate)).toEqual(expected);
      expect(poundsForcePerSquareInch(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMPa to psi.', v => {
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);
      const megapascalsConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megapascalsConversion[0],
        poundsForcePerSquareInchConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "psi"] as const;
      const conversionCandidate = [v, "MPa"] as const;

      expect(pressure["psi"](conversionCandidate)).toEqual(expected);
      expect(poundsForcePerSquareInch(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkPa to psi.', v => {
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);
      const kilopascalsConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilopascalsConversion[0],
        poundsForcePerSquareInchConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "psi"] as const;
      const conversionCandidate = [v, "kPa"] as const;

      expect(pressure["psi"](conversionCandidate)).toEqual(expected);
      expect(poundsForcePerSquareInch(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhPa to psi.', v => {
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);
      const hectopascalsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        hectopascalsConversion[0],
        poundsForcePerSquareInchConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "psi"] as const;
      const conversionCandidate = [v, "hPa"] as const;

      expect(pressure["psi"](conversionCandidate)).toEqual(expected);
      expect(poundsForcePerSquareInch(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dinHg to psi.', v => {
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);
      const inchesOfMercuryConversion = linearConversion(3386.39);

      const [toBase, fromBase] = [
        inchesOfMercuryConversion[0],
        poundsForcePerSquareInchConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "psi"] as const;
      const conversionCandidate = [v, "inHg"] as const;

      expect(pressure["psi"](conversionCandidate)).toEqual(expected);
      expect(poundsForcePerSquareInch(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dbar to psi.', v => {
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);
      const barsConversion = linearConversion(100000);

      const [toBase, fromBase] = [
        barsConversion[0],
        poundsForcePerSquareInchConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "psi"] as const;
      const conversionCandidate = [v, "bar"] as const;

      expect(pressure["psi"](conversionCandidate)).toEqual(expected);
      expect(poundsForcePerSquareInch(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmbar to psi.', v => {
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);
      const millibarsConversion = linearConversion(100);

      const [toBase, fromBase] = [
        millibarsConversion[0],
        poundsForcePerSquareInchConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "psi"] as const;
      const conversionCandidate = [v, "mbar"] as const;

      expect(pressure["psi"](conversionCandidate)).toEqual(expected);
      expect(poundsForcePerSquareInch(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmmHg to psi.', v => {
      const poundsForcePerSquareInchConversion = linearConversion(6894.76);
      const millimetersOfMercuryConversion = linearConversion(133.322);

      const [toBase, fromBase] = [
        millimetersOfMercuryConversion[0],
        poundsForcePerSquareInchConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "psi"] as const;
      const conversionCandidate = [v, "mmHg"] as const;

      expect(pressure["psi"](conversionCandidate)).toEqual(expected);
      expect(poundsForcePerSquareInch(conversionCandidate)).toEqual(expected);
    });


  });

});
