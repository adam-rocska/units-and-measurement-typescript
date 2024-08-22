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
});
