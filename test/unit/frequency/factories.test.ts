import {frequency} from "!src/frequency/factories";
import {terahertz, gigahertz, megahertz, kilohertz, hertz, millihertz, microhertz, nanohertz} from "!src/frequency/factories";
import {linearConversion} from "!src/conversion";

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



    it.each([1, 10, 100])('should convert GHz to THz.', v => {
      const terahertzConversion = linearConversion(1000000000000);
      const gigahertzConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        terahertzConversion[1],
        gigahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "THz"] as const;
      const conversionCandidate = [v, "GHz"] as const;

      expect(frequency["THz"](conversionCandidate)).toEqual(expected);
      expect(terahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MHz to THz.', v => {
      const terahertzConversion = linearConversion(1000000000000);
      const megahertzConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        terahertzConversion[1],
        megahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "THz"] as const;
      const conversionCandidate = [v, "MHz"] as const;

      expect(frequency["THz"](conversionCandidate)).toEqual(expected);
      expect(terahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kHz to THz.', v => {
      const terahertzConversion = linearConversion(1000000000000);
      const kilohertzConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        terahertzConversion[1],
        kilohertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "THz"] as const;
      const conversionCandidate = [v, "kHz"] as const;

      expect(frequency["THz"](conversionCandidate)).toEqual(expected);
      expect(terahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Hz to THz.', v => {
      const terahertzConversion = linearConversion(1000000000000);
      const hertzConversion = linearConversion(1);

      const [toBase, fromBase] = [
        terahertzConversion[1],
        hertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "THz"] as const;
      const conversionCandidate = [v, "Hz"] as const;

      expect(frequency["THz"](conversionCandidate)).toEqual(expected);
      expect(terahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mHz to THz.', v => {
      const terahertzConversion = linearConversion(1000000000000);
      const millihertzConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        terahertzConversion[1],
        millihertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "THz"] as const;
      const conversionCandidate = [v, "mHz"] as const;

      expect(frequency["THz"](conversionCandidate)).toEqual(expected);
      expect(terahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µHz to THz.', v => {
      const terahertzConversion = linearConversion(1000000000000);
      const microhertzConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        terahertzConversion[1],
        microhertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "THz"] as const;
      const conversionCandidate = [v, "µHz"] as const;

      expect(frequency["THz"](conversionCandidate)).toEqual(expected);
      expect(terahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nHz to THz.', v => {
      const terahertzConversion = linearConversion(1000000000000);
      const nanohertzConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        terahertzConversion[1],
        nanohertzConversion[0],
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

    it.each([1, 10, 100])('should convert THz to GHz.', v => {
      const gigahertzConversion = linearConversion(1000000000);
      const terahertzConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        gigahertzConversion[1],
        terahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GHz"] as const;
      const conversionCandidate = [v, "THz"] as const;

      expect(frequency["GHz"](conversionCandidate)).toEqual(expected);
      expect(gigahertz(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert MHz to GHz.', v => {
      const gigahertzConversion = linearConversion(1000000000);
      const megahertzConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        gigahertzConversion[1],
        megahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GHz"] as const;
      const conversionCandidate = [v, "MHz"] as const;

      expect(frequency["GHz"](conversionCandidate)).toEqual(expected);
      expect(gigahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kHz to GHz.', v => {
      const gigahertzConversion = linearConversion(1000000000);
      const kilohertzConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        gigahertzConversion[1],
        kilohertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GHz"] as const;
      const conversionCandidate = [v, "kHz"] as const;

      expect(frequency["GHz"](conversionCandidate)).toEqual(expected);
      expect(gigahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Hz to GHz.', v => {
      const gigahertzConversion = linearConversion(1000000000);
      const hertzConversion = linearConversion(1);

      const [toBase, fromBase] = [
        gigahertzConversion[1],
        hertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GHz"] as const;
      const conversionCandidate = [v, "Hz"] as const;

      expect(frequency["GHz"](conversionCandidate)).toEqual(expected);
      expect(gigahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mHz to GHz.', v => {
      const gigahertzConversion = linearConversion(1000000000);
      const millihertzConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        gigahertzConversion[1],
        millihertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GHz"] as const;
      const conversionCandidate = [v, "mHz"] as const;

      expect(frequency["GHz"](conversionCandidate)).toEqual(expected);
      expect(gigahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µHz to GHz.', v => {
      const gigahertzConversion = linearConversion(1000000000);
      const microhertzConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        gigahertzConversion[1],
        microhertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "GHz"] as const;
      const conversionCandidate = [v, "µHz"] as const;

      expect(frequency["GHz"](conversionCandidate)).toEqual(expected);
      expect(gigahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nHz to GHz.', v => {
      const gigahertzConversion = linearConversion(1000000000);
      const nanohertzConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        gigahertzConversion[1],
        nanohertzConversion[0],
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

    it.each([1, 10, 100])('should convert THz to MHz.', v => {
      const megahertzConversion = linearConversion(1000000);
      const terahertzConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        megahertzConversion[1],
        terahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MHz"] as const;
      const conversionCandidate = [v, "THz"] as const;

      expect(frequency["MHz"](conversionCandidate)).toEqual(expected);
      expect(megahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GHz to MHz.', v => {
      const megahertzConversion = linearConversion(1000000);
      const gigahertzConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        megahertzConversion[1],
        gigahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MHz"] as const;
      const conversionCandidate = [v, "GHz"] as const;

      expect(frequency["MHz"](conversionCandidate)).toEqual(expected);
      expect(megahertz(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert kHz to MHz.', v => {
      const megahertzConversion = linearConversion(1000000);
      const kilohertzConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        megahertzConversion[1],
        kilohertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MHz"] as const;
      const conversionCandidate = [v, "kHz"] as const;

      expect(frequency["MHz"](conversionCandidate)).toEqual(expected);
      expect(megahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Hz to MHz.', v => {
      const megahertzConversion = linearConversion(1000000);
      const hertzConversion = linearConversion(1);

      const [toBase, fromBase] = [
        megahertzConversion[1],
        hertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MHz"] as const;
      const conversionCandidate = [v, "Hz"] as const;

      expect(frequency["MHz"](conversionCandidate)).toEqual(expected);
      expect(megahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mHz to MHz.', v => {
      const megahertzConversion = linearConversion(1000000);
      const millihertzConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        megahertzConversion[1],
        millihertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MHz"] as const;
      const conversionCandidate = [v, "mHz"] as const;

      expect(frequency["MHz"](conversionCandidate)).toEqual(expected);
      expect(megahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µHz to MHz.', v => {
      const megahertzConversion = linearConversion(1000000);
      const microhertzConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        megahertzConversion[1],
        microhertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "MHz"] as const;
      const conversionCandidate = [v, "µHz"] as const;

      expect(frequency["MHz"](conversionCandidate)).toEqual(expected);
      expect(megahertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nHz to MHz.', v => {
      const megahertzConversion = linearConversion(1000000);
      const nanohertzConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        megahertzConversion[1],
        nanohertzConversion[0],
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

    it.each([1, 10, 100])('should convert THz to kHz.', v => {
      const kilohertzConversion = linearConversion(1000);
      const terahertzConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        kilohertzConversion[1],
        terahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kHz"] as const;
      const conversionCandidate = [v, "THz"] as const;

      expect(frequency["kHz"](conversionCandidate)).toEqual(expected);
      expect(kilohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GHz to kHz.', v => {
      const kilohertzConversion = linearConversion(1000);
      const gigahertzConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        kilohertzConversion[1],
        gigahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kHz"] as const;
      const conversionCandidate = [v, "GHz"] as const;

      expect(frequency["kHz"](conversionCandidate)).toEqual(expected);
      expect(kilohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MHz to kHz.', v => {
      const kilohertzConversion = linearConversion(1000);
      const megahertzConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        kilohertzConversion[1],
        megahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kHz"] as const;
      const conversionCandidate = [v, "MHz"] as const;

      expect(frequency["kHz"](conversionCandidate)).toEqual(expected);
      expect(kilohertz(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert Hz to kHz.', v => {
      const kilohertzConversion = linearConversion(1000);
      const hertzConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kilohertzConversion[1],
        hertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kHz"] as const;
      const conversionCandidate = [v, "Hz"] as const;

      expect(frequency["kHz"](conversionCandidate)).toEqual(expected);
      expect(kilohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mHz to kHz.', v => {
      const kilohertzConversion = linearConversion(1000);
      const millihertzConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        kilohertzConversion[1],
        millihertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kHz"] as const;
      const conversionCandidate = [v, "mHz"] as const;

      expect(frequency["kHz"](conversionCandidate)).toEqual(expected);
      expect(kilohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µHz to kHz.', v => {
      const kilohertzConversion = linearConversion(1000);
      const microhertzConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        kilohertzConversion[1],
        microhertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "kHz"] as const;
      const conversionCandidate = [v, "µHz"] as const;

      expect(frequency["kHz"](conversionCandidate)).toEqual(expected);
      expect(kilohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nHz to kHz.', v => {
      const kilohertzConversion = linearConversion(1000);
      const nanohertzConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        kilohertzConversion[1],
        nanohertzConversion[0],
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

    it.each([1, 10, 100])('should convert THz to Hz.', v => {
      const hertzConversion = linearConversion(1);
      const terahertzConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        hertzConversion[1],
        terahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Hz"] as const;
      const conversionCandidate = [v, "THz"] as const;

      expect(frequency["Hz"](conversionCandidate)).toEqual(expected);
      expect(hertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GHz to Hz.', v => {
      const hertzConversion = linearConversion(1);
      const gigahertzConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        hertzConversion[1],
        gigahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Hz"] as const;
      const conversionCandidate = [v, "GHz"] as const;

      expect(frequency["Hz"](conversionCandidate)).toEqual(expected);
      expect(hertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MHz to Hz.', v => {
      const hertzConversion = linearConversion(1);
      const megahertzConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        hertzConversion[1],
        megahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Hz"] as const;
      const conversionCandidate = [v, "MHz"] as const;

      expect(frequency["Hz"](conversionCandidate)).toEqual(expected);
      expect(hertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kHz to Hz.', v => {
      const hertzConversion = linearConversion(1);
      const kilohertzConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        hertzConversion[1],
        kilohertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Hz"] as const;
      const conversionCandidate = [v, "kHz"] as const;

      expect(frequency["Hz"](conversionCandidate)).toEqual(expected);
      expect(hertz(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert mHz to Hz.', v => {
      const hertzConversion = linearConversion(1);
      const millihertzConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        hertzConversion[1],
        millihertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Hz"] as const;
      const conversionCandidate = [v, "mHz"] as const;

      expect(frequency["Hz"](conversionCandidate)).toEqual(expected);
      expect(hertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µHz to Hz.', v => {
      const hertzConversion = linearConversion(1);
      const microhertzConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        hertzConversion[1],
        microhertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "Hz"] as const;
      const conversionCandidate = [v, "µHz"] as const;

      expect(frequency["Hz"](conversionCandidate)).toEqual(expected);
      expect(hertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nHz to Hz.', v => {
      const hertzConversion = linearConversion(1);
      const nanohertzConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        hertzConversion[1],
        nanohertzConversion[0],
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

    it.each([1, 10, 100])('should convert THz to mHz.', v => {
      const millihertzConversion = linearConversion(0.001);
      const terahertzConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        millihertzConversion[1],
        terahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mHz"] as const;
      const conversionCandidate = [v, "THz"] as const;

      expect(frequency["mHz"](conversionCandidate)).toEqual(expected);
      expect(millihertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GHz to mHz.', v => {
      const millihertzConversion = linearConversion(0.001);
      const gigahertzConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        millihertzConversion[1],
        gigahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mHz"] as const;
      const conversionCandidate = [v, "GHz"] as const;

      expect(frequency["mHz"](conversionCandidate)).toEqual(expected);
      expect(millihertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MHz to mHz.', v => {
      const millihertzConversion = linearConversion(0.001);
      const megahertzConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        millihertzConversion[1],
        megahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mHz"] as const;
      const conversionCandidate = [v, "MHz"] as const;

      expect(frequency["mHz"](conversionCandidate)).toEqual(expected);
      expect(millihertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kHz to mHz.', v => {
      const millihertzConversion = linearConversion(0.001);
      const kilohertzConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        millihertzConversion[1],
        kilohertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mHz"] as const;
      const conversionCandidate = [v, "kHz"] as const;

      expect(frequency["mHz"](conversionCandidate)).toEqual(expected);
      expect(millihertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Hz to mHz.', v => {
      const millihertzConversion = linearConversion(0.001);
      const hertzConversion = linearConversion(1);

      const [toBase, fromBase] = [
        millihertzConversion[1],
        hertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mHz"] as const;
      const conversionCandidate = [v, "Hz"] as const;

      expect(frequency["mHz"](conversionCandidate)).toEqual(expected);
      expect(millihertz(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert µHz to mHz.', v => {
      const millihertzConversion = linearConversion(0.001);
      const microhertzConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        millihertzConversion[1],
        microhertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "mHz"] as const;
      const conversionCandidate = [v, "µHz"] as const;

      expect(frequency["mHz"](conversionCandidate)).toEqual(expected);
      expect(millihertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert nHz to mHz.', v => {
      const millihertzConversion = linearConversion(0.001);
      const nanohertzConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        millihertzConversion[1],
        nanohertzConversion[0],
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

    it.each([1, 10, 100])('should convert THz to µHz.', v => {
      const microhertzConversion = linearConversion(0.000001);
      const terahertzConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        microhertzConversion[1],
        terahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µHz"] as const;
      const conversionCandidate = [v, "THz"] as const;

      expect(frequency["µHz"](conversionCandidate)).toEqual(expected);
      expect(microhertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GHz to µHz.', v => {
      const microhertzConversion = linearConversion(0.000001);
      const gigahertzConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        microhertzConversion[1],
        gigahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µHz"] as const;
      const conversionCandidate = [v, "GHz"] as const;

      expect(frequency["µHz"](conversionCandidate)).toEqual(expected);
      expect(microhertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MHz to µHz.', v => {
      const microhertzConversion = linearConversion(0.000001);
      const megahertzConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        microhertzConversion[1],
        megahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µHz"] as const;
      const conversionCandidate = [v, "MHz"] as const;

      expect(frequency["µHz"](conversionCandidate)).toEqual(expected);
      expect(microhertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kHz to µHz.', v => {
      const microhertzConversion = linearConversion(0.000001);
      const kilohertzConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        microhertzConversion[1],
        kilohertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µHz"] as const;
      const conversionCandidate = [v, "kHz"] as const;

      expect(frequency["µHz"](conversionCandidate)).toEqual(expected);
      expect(microhertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Hz to µHz.', v => {
      const microhertzConversion = linearConversion(0.000001);
      const hertzConversion = linearConversion(1);

      const [toBase, fromBase] = [
        microhertzConversion[1],
        hertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µHz"] as const;
      const conversionCandidate = [v, "Hz"] as const;

      expect(frequency["µHz"](conversionCandidate)).toEqual(expected);
      expect(microhertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mHz to µHz.', v => {
      const microhertzConversion = linearConversion(0.000001);
      const millihertzConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        microhertzConversion[1],
        millihertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "µHz"] as const;
      const conversionCandidate = [v, "mHz"] as const;

      expect(frequency["µHz"](conversionCandidate)).toEqual(expected);
      expect(microhertz(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert nHz to µHz.', v => {
      const microhertzConversion = linearConversion(0.000001);
      const nanohertzConversion = linearConversion(1e-9);

      const [toBase, fromBase] = [
        microhertzConversion[1],
        nanohertzConversion[0],
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

    it.each([1, 10, 100])('should convert THz to nHz.', v => {
      const nanohertzConversion = linearConversion(1e-9);
      const terahertzConversion = linearConversion(1000000000000);

      const [toBase, fromBase] = [
        nanohertzConversion[1],
        terahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nHz"] as const;
      const conversionCandidate = [v, "THz"] as const;

      expect(frequency["nHz"](conversionCandidate)).toEqual(expected);
      expect(nanohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert GHz to nHz.', v => {
      const nanohertzConversion = linearConversion(1e-9);
      const gigahertzConversion = linearConversion(1000000000);

      const [toBase, fromBase] = [
        nanohertzConversion[1],
        gigahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nHz"] as const;
      const conversionCandidate = [v, "GHz"] as const;

      expect(frequency["nHz"](conversionCandidate)).toEqual(expected);
      expect(nanohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert MHz to nHz.', v => {
      const nanohertzConversion = linearConversion(1e-9);
      const megahertzConversion = linearConversion(1000000);

      const [toBase, fromBase] = [
        nanohertzConversion[1],
        megahertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nHz"] as const;
      const conversionCandidate = [v, "MHz"] as const;

      expect(frequency["nHz"](conversionCandidate)).toEqual(expected);
      expect(nanohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert kHz to nHz.', v => {
      const nanohertzConversion = linearConversion(1e-9);
      const kilohertzConversion = linearConversion(1000);

      const [toBase, fromBase] = [
        nanohertzConversion[1],
        kilohertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nHz"] as const;
      const conversionCandidate = [v, "kHz"] as const;

      expect(frequency["nHz"](conversionCandidate)).toEqual(expected);
      expect(nanohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert Hz to nHz.', v => {
      const nanohertzConversion = linearConversion(1e-9);
      const hertzConversion = linearConversion(1);

      const [toBase, fromBase] = [
        nanohertzConversion[1],
        hertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nHz"] as const;
      const conversionCandidate = [v, "Hz"] as const;

      expect(frequency["nHz"](conversionCandidate)).toEqual(expected);
      expect(nanohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert mHz to nHz.', v => {
      const nanohertzConversion = linearConversion(1e-9);
      const millihertzConversion = linearConversion(0.001);

      const [toBase, fromBase] = [
        nanohertzConversion[1],
        millihertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nHz"] as const;
      const conversionCandidate = [v, "mHz"] as const;

      expect(frequency["nHz"](conversionCandidate)).toEqual(expected);
      expect(nanohertz(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert µHz to nHz.', v => {
      const nanohertzConversion = linearConversion(1e-9);
      const microhertzConversion = linearConversion(0.000001);

      const [toBase, fromBase] = [
        nanohertzConversion[1],
        microhertzConversion[0],
      ];

      const expected = [fromBase(toBase(v)), "nHz"] as const;
      const conversionCandidate = [v, "µHz"] as const;

      expect(frequency["nHz"](conversionCandidate)).toEqual(expected);
      expect(nanohertz(conversionCandidate)).toEqual(expected);
    });


  });

});
