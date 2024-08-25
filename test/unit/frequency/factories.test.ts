import {frequency} from "!src/frequency/factories";
import {terahertz, gigahertz, megahertz, kilohertz, hertz, millihertz, microhertz, nanohertz} from "!src/frequency/factories";
import {linearConversion} from "!src/dimension/conversion";

describe("!src/frequency/factories aliasing", () => {
  describe('frequency["THz"]', () => {
    it('should be aliased by "terahertz".', () => {
      expect(terahertz).toBe(frequency["THz"]);
    });
  });


  describe('frequency["GHz"]', () => {
    it('should be aliased by "gigahertz".', () => {
      expect(gigahertz).toBe(frequency["GHz"]);
    });
  });


  describe('frequency["MHz"]', () => {
    it('should be aliased by "megahertz".', () => {
      expect(megahertz).toBe(frequency["MHz"]);
    });
  });


  describe('frequency["kHz"]', () => {
    it('should be aliased by "kilohertz".', () => {
      expect(kilohertz).toBe(frequency["kHz"]);
    });
  });


  describe('frequency["Hz"]', () => {
    it('should be aliased by "hertz".', () => {
      expect(hertz).toBe(frequency["Hz"]);
    });
  });


  describe('frequency["mHz"]', () => {
    it('should be aliased by "millihertz".', () => {
      expect(millihertz).toBe(frequency["mHz"]);
    });
  });


  describe('frequency["µHz"]', () => {
    it('should be aliased by "microhertz".', () => {
      expect(microhertz).toBe(frequency["µHz"]);
    });
  });


  describe('frequency["nHz"]', () => {
    it('should be aliased by "nanohertz".', () => {
      expect(nanohertz).toBe(frequency["nHz"]);
    });
  });

});

describe("frequency", () => {
  describe('THz', () => {
    it.each([1, 10, 100])('should yield a THz measurement when given a number.', v => {
      expect(frequency["THz"](v)).toEqual([v, "THz"]);
      expect(terahertz(v)).toEqual([v, "THz"]);
    });



    it.each([1, 10, 100])('should convert %dGHz to THz.', v => {
      const terahertzConversion = linearConversion(1000000000000);
      const gigahertzConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigahertzConversion[0],
        terahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "THz"] as const;
      const conversionCandidate = [v, "GHz"] as const;

      expect(frequency["THz"](conversionCandidate)).toEqual(expected);
      expect(terahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMHz to THz.', v => {
      const terahertzConversion = linearConversion(1000000000000);
      const megahertzConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megahertzConversion[0],
        terahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "THz"] as const;
      const conversionCandidate = [v, "MHz"] as const;

      expect(frequency["THz"](conversionCandidate)).toEqual(expected);
      expect(terahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkHz to THz.', v => {
      const terahertzConversion = linearConversion(1000000000000);
      const kilohertzConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilohertzConversion[0],
        terahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "THz"] as const;
      const conversionCandidate = [v, "kHz"] as const;

      expect(frequency["THz"](conversionCandidate)).toEqual(expected);
      expect(terahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dHz to THz.', v => {
      const terahertzConversion = linearConversion(1000000000000);
      const hertzConversion = linearConversion(1);

      const [toBase, fromBase] = [
        hertzConversion[0],
        terahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "THz"] as const;
      const conversionCandidate = [v, "Hz"] as const;

      expect(frequency["THz"](conversionCandidate)).toEqual(expected);
      expect(terahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmHz to THz.', v => {
      const terahertzConversion = linearConversion(1000000000000);
      const millihertzConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millihertzConversion[0],
        terahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "THz"] as const;
      const conversionCandidate = [v, "mHz"] as const;

      expect(frequency["THz"](conversionCandidate)).toEqual(expected);
      expect(terahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµHz to THz.', v => {
      const terahertzConversion = linearConversion(1000000000000);
      const microhertzConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microhertzConversion[0],
        terahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "THz"] as const;
      const conversionCandidate = [v, "µHz"] as const;

      expect(frequency["THz"](conversionCandidate)).toEqual(expected);
      expect(terahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnHz to THz.', v => {
      const terahertzConversion = linearConversion(1000000000000);
      const nanohertzConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanohertzConversion[0],
        terahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "THz"] as const;
      const conversionCandidate = [v, "nHz"] as const;

      expect(frequency["THz"](conversionCandidate)).toEqual(expected);
      expect(terahertz(conversionCandidate)).toEqual(expected);
    });
  });


  describe('GHz', () => {
    it.each([1, 10, 100])('should yield a GHz measurement when given a number.', v => {
      expect(frequency["GHz"](v)).toEqual([v, "GHz"]);
      expect(gigahertz(v)).toEqual([v, "GHz"]);
    });

    it.each([1, 10, 100])('should convert %dTHz to GHz.', v => {
      const gigahertzConversion = linearConversion(1000000000);
      const terahertzConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        terahertzConversion[0],
        gigahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GHz"] as const;
      const conversionCandidate = [v, "THz"] as const;

      expect(frequency["GHz"](conversionCandidate)).toEqual(expected);
      expect(gigahertz(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dMHz to GHz.', v => {
      const gigahertzConversion = linearConversion(1000000000);
      const megahertzConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megahertzConversion[0],
        gigahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GHz"] as const;
      const conversionCandidate = [v, "MHz"] as const;

      expect(frequency["GHz"](conversionCandidate)).toEqual(expected);
      expect(gigahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkHz to GHz.', v => {
      const gigahertzConversion = linearConversion(1000000000);
      const kilohertzConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilohertzConversion[0],
        gigahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GHz"] as const;
      const conversionCandidate = [v, "kHz"] as const;

      expect(frequency["GHz"](conversionCandidate)).toEqual(expected);
      expect(gigahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dHz to GHz.', v => {
      const gigahertzConversion = linearConversion(1000000000);
      const hertzConversion = linearConversion(1);

      const [toBase, fromBase] = [
        hertzConversion[0],
        gigahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GHz"] as const;
      const conversionCandidate = [v, "Hz"] as const;

      expect(frequency["GHz"](conversionCandidate)).toEqual(expected);
      expect(gigahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmHz to GHz.', v => {
      const gigahertzConversion = linearConversion(1000000000);
      const millihertzConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millihertzConversion[0],
        gigahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GHz"] as const;
      const conversionCandidate = [v, "mHz"] as const;

      expect(frequency["GHz"](conversionCandidate)).toEqual(expected);
      expect(gigahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµHz to GHz.', v => {
      const gigahertzConversion = linearConversion(1000000000);
      const microhertzConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microhertzConversion[0],
        gigahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GHz"] as const;
      const conversionCandidate = [v, "µHz"] as const;

      expect(frequency["GHz"](conversionCandidate)).toEqual(expected);
      expect(gigahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnHz to GHz.', v => {
      const gigahertzConversion = linearConversion(1000000000);
      const nanohertzConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanohertzConversion[0],
        gigahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "GHz"] as const;
      const conversionCandidate = [v, "nHz"] as const;

      expect(frequency["GHz"](conversionCandidate)).toEqual(expected);
      expect(gigahertz(conversionCandidate)).toEqual(expected);
    });
  });


  describe('MHz', () => {
    it.each([1, 10, 100])('should yield a MHz measurement when given a number.', v => {
      expect(frequency["MHz"](v)).toEqual([v, "MHz"]);
      expect(megahertz(v)).toEqual([v, "MHz"]);
    });

    it.each([1, 10, 100])('should convert %dTHz to MHz.', v => {
      const megahertzConversion = linearConversion(1000000);
      const terahertzConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        terahertzConversion[0],
        megahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MHz"] as const;
      const conversionCandidate = [v, "THz"] as const;

      expect(frequency["MHz"](conversionCandidate)).toEqual(expected);
      expect(megahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGHz to MHz.', v => {
      const megahertzConversion = linearConversion(1000000);
      const gigahertzConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigahertzConversion[0],
        megahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MHz"] as const;
      const conversionCandidate = [v, "GHz"] as const;

      expect(frequency["MHz"](conversionCandidate)).toEqual(expected);
      expect(megahertz(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dkHz to MHz.', v => {
      const megahertzConversion = linearConversion(1000000);
      const kilohertzConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilohertzConversion[0],
        megahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MHz"] as const;
      const conversionCandidate = [v, "kHz"] as const;

      expect(frequency["MHz"](conversionCandidate)).toEqual(expected);
      expect(megahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dHz to MHz.', v => {
      const megahertzConversion = linearConversion(1000000);
      const hertzConversion = linearConversion(1);

      const [toBase, fromBase] = [
        hertzConversion[0],
        megahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MHz"] as const;
      const conversionCandidate = [v, "Hz"] as const;

      expect(frequency["MHz"](conversionCandidate)).toEqual(expected);
      expect(megahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmHz to MHz.', v => {
      const megahertzConversion = linearConversion(1000000);
      const millihertzConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millihertzConversion[0],
        megahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MHz"] as const;
      const conversionCandidate = [v, "mHz"] as const;

      expect(frequency["MHz"](conversionCandidate)).toEqual(expected);
      expect(megahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµHz to MHz.', v => {
      const megahertzConversion = linearConversion(1000000);
      const microhertzConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microhertzConversion[0],
        megahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MHz"] as const;
      const conversionCandidate = [v, "µHz"] as const;

      expect(frequency["MHz"](conversionCandidate)).toEqual(expected);
      expect(megahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnHz to MHz.', v => {
      const megahertzConversion = linearConversion(1000000);
      const nanohertzConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanohertzConversion[0],
        megahertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "MHz"] as const;
      const conversionCandidate = [v, "nHz"] as const;

      expect(frequency["MHz"](conversionCandidate)).toEqual(expected);
      expect(megahertz(conversionCandidate)).toEqual(expected);
    });
  });


  describe('kHz', () => {
    it.each([1, 10, 100])('should yield a kHz measurement when given a number.', v => {
      expect(frequency["kHz"](v)).toEqual([v, "kHz"]);
      expect(kilohertz(v)).toEqual([v, "kHz"]);
    });

    it.each([1, 10, 100])('should convert %dTHz to kHz.', v => {
      const kilohertzConversion = linearConversion(1000);
      const terahertzConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        terahertzConversion[0],
        kilohertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kHz"] as const;
      const conversionCandidate = [v, "THz"] as const;

      expect(frequency["kHz"](conversionCandidate)).toEqual(expected);
      expect(kilohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGHz to kHz.', v => {
      const kilohertzConversion = linearConversion(1000);
      const gigahertzConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigahertzConversion[0],
        kilohertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kHz"] as const;
      const conversionCandidate = [v, "GHz"] as const;

      expect(frequency["kHz"](conversionCandidate)).toEqual(expected);
      expect(kilohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMHz to kHz.', v => {
      const kilohertzConversion = linearConversion(1000);
      const megahertzConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megahertzConversion[0],
        kilohertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kHz"] as const;
      const conversionCandidate = [v, "MHz"] as const;

      expect(frequency["kHz"](conversionCandidate)).toEqual(expected);
      expect(kilohertz(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dHz to kHz.', v => {
      const kilohertzConversion = linearConversion(1000);
      const hertzConversion = linearConversion(1);

      const [toBase, fromBase] = [
        hertzConversion[0],
        kilohertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kHz"] as const;
      const conversionCandidate = [v, "Hz"] as const;

      expect(frequency["kHz"](conversionCandidate)).toEqual(expected);
      expect(kilohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmHz to kHz.', v => {
      const kilohertzConversion = linearConversion(1000);
      const millihertzConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millihertzConversion[0],
        kilohertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kHz"] as const;
      const conversionCandidate = [v, "mHz"] as const;

      expect(frequency["kHz"](conversionCandidate)).toEqual(expected);
      expect(kilohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµHz to kHz.', v => {
      const kilohertzConversion = linearConversion(1000);
      const microhertzConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microhertzConversion[0],
        kilohertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kHz"] as const;
      const conversionCandidate = [v, "µHz"] as const;

      expect(frequency["kHz"](conversionCandidate)).toEqual(expected);
      expect(kilohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnHz to kHz.', v => {
      const kilohertzConversion = linearConversion(1000);
      const nanohertzConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanohertzConversion[0],
        kilohertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "kHz"] as const;
      const conversionCandidate = [v, "nHz"] as const;

      expect(frequency["kHz"](conversionCandidate)).toEqual(expected);
      expect(kilohertz(conversionCandidate)).toEqual(expected);
    });
  });


  describe('Hz', () => {
    it.each([1, 10, 100])('should yield a Hz measurement when given a number.', v => {
      expect(frequency["Hz"](v)).toEqual([v, "Hz"]);
      expect(hertz(v)).toEqual([v, "Hz"]);
    });

    it.each([1, 10, 100])('should convert %dTHz to Hz.', v => {
      const hertzConversion = linearConversion(1);
      const terahertzConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        terahertzConversion[0],
        hertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Hz"] as const;
      const conversionCandidate = [v, "THz"] as const;

      expect(frequency["Hz"](conversionCandidate)).toEqual(expected);
      expect(hertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGHz to Hz.', v => {
      const hertzConversion = linearConversion(1);
      const gigahertzConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigahertzConversion[0],
        hertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Hz"] as const;
      const conversionCandidate = [v, "GHz"] as const;

      expect(frequency["Hz"](conversionCandidate)).toEqual(expected);
      expect(hertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMHz to Hz.', v => {
      const hertzConversion = linearConversion(1);
      const megahertzConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megahertzConversion[0],
        hertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Hz"] as const;
      const conversionCandidate = [v, "MHz"] as const;

      expect(frequency["Hz"](conversionCandidate)).toEqual(expected);
      expect(hertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkHz to Hz.', v => {
      const hertzConversion = linearConversion(1);
      const kilohertzConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilohertzConversion[0],
        hertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Hz"] as const;
      const conversionCandidate = [v, "kHz"] as const;

      expect(frequency["Hz"](conversionCandidate)).toEqual(expected);
      expect(hertz(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dmHz to Hz.', v => {
      const hertzConversion = linearConversion(1);
      const millihertzConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millihertzConversion[0],
        hertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Hz"] as const;
      const conversionCandidate = [v, "mHz"] as const;

      expect(frequency["Hz"](conversionCandidate)).toEqual(expected);
      expect(hertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµHz to Hz.', v => {
      const hertzConversion = linearConversion(1);
      const microhertzConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microhertzConversion[0],
        hertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Hz"] as const;
      const conversionCandidate = [v, "µHz"] as const;

      expect(frequency["Hz"](conversionCandidate)).toEqual(expected);
      expect(hertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnHz to Hz.', v => {
      const hertzConversion = linearConversion(1);
      const nanohertzConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanohertzConversion[0],
        hertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "Hz"] as const;
      const conversionCandidate = [v, "nHz"] as const;

      expect(frequency["Hz"](conversionCandidate)).toEqual(expected);
      expect(hertz(conversionCandidate)).toEqual(expected);
    });
  });


  describe('mHz', () => {
    it.each([1, 10, 100])('should yield a mHz measurement when given a number.', v => {
      expect(frequency["mHz"](v)).toEqual([v, "mHz"]);
      expect(millihertz(v)).toEqual([v, "mHz"]);
    });

    it.each([1, 10, 100])('should convert %dTHz to mHz.', v => {
      const millihertzConversion = linearConversion(0.001);
      const terahertzConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        terahertzConversion[0],
        millihertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mHz"] as const;
      const conversionCandidate = [v, "THz"] as const;

      expect(frequency["mHz"](conversionCandidate)).toEqual(expected);
      expect(millihertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGHz to mHz.', v => {
      const millihertzConversion = linearConversion(0.001);
      const gigahertzConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigahertzConversion[0],
        millihertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mHz"] as const;
      const conversionCandidate = [v, "GHz"] as const;

      expect(frequency["mHz"](conversionCandidate)).toEqual(expected);
      expect(millihertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMHz to mHz.', v => {
      const millihertzConversion = linearConversion(0.001);
      const megahertzConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megahertzConversion[0],
        millihertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mHz"] as const;
      const conversionCandidate = [v, "MHz"] as const;

      expect(frequency["mHz"](conversionCandidate)).toEqual(expected);
      expect(millihertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkHz to mHz.', v => {
      const millihertzConversion = linearConversion(0.001);
      const kilohertzConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilohertzConversion[0],
        millihertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mHz"] as const;
      const conversionCandidate = [v, "kHz"] as const;

      expect(frequency["mHz"](conversionCandidate)).toEqual(expected);
      expect(millihertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dHz to mHz.', v => {
      const millihertzConversion = linearConversion(0.001);
      const hertzConversion = linearConversion(1);

      const [toBase, fromBase] = [
        hertzConversion[0],
        millihertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mHz"] as const;
      const conversionCandidate = [v, "Hz"] as const;

      expect(frequency["mHz"](conversionCandidate)).toEqual(expected);
      expect(millihertz(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dµHz to mHz.', v => {
      const millihertzConversion = linearConversion(0.001);
      const microhertzConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microhertzConversion[0],
        millihertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mHz"] as const;
      const conversionCandidate = [v, "µHz"] as const;

      expect(frequency["mHz"](conversionCandidate)).toEqual(expected);
      expect(millihertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dnHz to mHz.', v => {
      const millihertzConversion = linearConversion(0.001);
      const nanohertzConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanohertzConversion[0],
        millihertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "mHz"] as const;
      const conversionCandidate = [v, "nHz"] as const;

      expect(frequency["mHz"](conversionCandidate)).toEqual(expected);
      expect(millihertz(conversionCandidate)).toEqual(expected);
    });
  });


  describe('µHz', () => {
    it.each([1, 10, 100])('should yield a µHz measurement when given a number.', v => {
      expect(frequency["µHz"](v)).toEqual([v, "µHz"]);
      expect(microhertz(v)).toEqual([v, "µHz"]);
    });

    it.each([1, 10, 100])('should convert %dTHz to µHz.', v => {
      const microhertzConversion = linearConversion(0.000001);
      const terahertzConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        terahertzConversion[0],
        microhertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µHz"] as const;
      const conversionCandidate = [v, "THz"] as const;

      expect(frequency["µHz"](conversionCandidate)).toEqual(expected);
      expect(microhertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGHz to µHz.', v => {
      const microhertzConversion = linearConversion(0.000001);
      const gigahertzConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigahertzConversion[0],
        microhertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µHz"] as const;
      const conversionCandidate = [v, "GHz"] as const;

      expect(frequency["µHz"](conversionCandidate)).toEqual(expected);
      expect(microhertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMHz to µHz.', v => {
      const microhertzConversion = linearConversion(0.000001);
      const megahertzConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megahertzConversion[0],
        microhertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µHz"] as const;
      const conversionCandidate = [v, "MHz"] as const;

      expect(frequency["µHz"](conversionCandidate)).toEqual(expected);
      expect(microhertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkHz to µHz.', v => {
      const microhertzConversion = linearConversion(0.000001);
      const kilohertzConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilohertzConversion[0],
        microhertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µHz"] as const;
      const conversionCandidate = [v, "kHz"] as const;

      expect(frequency["µHz"](conversionCandidate)).toEqual(expected);
      expect(microhertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dHz to µHz.', v => {
      const microhertzConversion = linearConversion(0.000001);
      const hertzConversion = linearConversion(1);

      const [toBase, fromBase] = [
        hertzConversion[0],
        microhertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µHz"] as const;
      const conversionCandidate = [v, "Hz"] as const;

      expect(frequency["µHz"](conversionCandidate)).toEqual(expected);
      expect(microhertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmHz to µHz.', v => {
      const microhertzConversion = linearConversion(0.000001);
      const millihertzConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millihertzConversion[0],
        microhertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µHz"] as const;
      const conversionCandidate = [v, "mHz"] as const;

      expect(frequency["µHz"](conversionCandidate)).toEqual(expected);
      expect(microhertz(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dnHz to µHz.', v => {
      const microhertzConversion = linearConversion(0.000001);
      const nanohertzConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        nanohertzConversion[0],
        microhertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "µHz"] as const;
      const conversionCandidate = [v, "nHz"] as const;

      expect(frequency["µHz"](conversionCandidate)).toEqual(expected);
      expect(microhertz(conversionCandidate)).toEqual(expected);
    });
  });


  describe('nHz', () => {
    it.each([1, 10, 100])('should yield a nHz measurement when given a number.', v => {
      expect(frequency["nHz"](v)).toEqual([v, "nHz"]);
      expect(nanohertz(v)).toEqual([v, "nHz"]);
    });

    it.each([1, 10, 100])('should convert %dTHz to nHz.', v => {
      const nanohertzConversion = linearConversion(1e-9);
      const terahertzConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        terahertzConversion[0],
        nanohertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nHz"] as const;
      const conversionCandidate = [v, "THz"] as const;

      expect(frequency["nHz"](conversionCandidate)).toEqual(expected);
      expect(nanohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dGHz to nHz.', v => {
      const nanohertzConversion = linearConversion(1e-9);
      const gigahertzConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        gigahertzConversion[0],
        nanohertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nHz"] as const;
      const conversionCandidate = [v, "GHz"] as const;

      expect(frequency["nHz"](conversionCandidate)).toEqual(expected);
      expect(nanohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dMHz to nHz.', v => {
      const nanohertzConversion = linearConversion(1e-9);
      const megahertzConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        megahertzConversion[0],
        nanohertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nHz"] as const;
      const conversionCandidate = [v, "MHz"] as const;

      expect(frequency["nHz"](conversionCandidate)).toEqual(expected);
      expect(nanohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dkHz to nHz.', v => {
      const nanohertzConversion = linearConversion(1e-9);
      const kilohertzConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        kilohertzConversion[0],
        nanohertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nHz"] as const;
      const conversionCandidate = [v, "kHz"] as const;

      expect(frequency["nHz"](conversionCandidate)).toEqual(expected);
      expect(nanohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dHz to nHz.', v => {
      const nanohertzConversion = linearConversion(1e-9);
      const hertzConversion = linearConversion(1);

      const [toBase, fromBase] = [
        hertzConversion[0],
        nanohertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nHz"] as const;
      const conversionCandidate = [v, "Hz"] as const;

      expect(frequency["nHz"](conversionCandidate)).toEqual(expected);
      expect(nanohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmHz to nHz.', v => {
      const nanohertzConversion = linearConversion(1e-9);
      const millihertzConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        millihertzConversion[0],
        nanohertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nHz"] as const;
      const conversionCandidate = [v, "mHz"] as const;

      expect(frequency["nHz"](conversionCandidate)).toEqual(expected);
      expect(nanohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dµHz to nHz.', v => {
      const nanohertzConversion = linearConversion(1e-9);
      const microhertzConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        microhertzConversion[0],
        nanohertzConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "nHz"] as const;
      const conversionCandidate = [v, "µHz"] as const;

      expect(frequency["nHz"](conversionCandidate)).toEqual(expected);
      expect(nanohertz(conversionCandidate)).toEqual(expected);
    });


  });

});
