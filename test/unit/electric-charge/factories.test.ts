import {electricCharge} from "!src/electric-charge/factories";
import {coulombs, megaampereHours, kiloampereHours, ampereHours, milliampereHours, microampereHours} from "!src/electric-charge/factories";
import {linearConversion} from "!src/conversion";

describe("!src/electric-charge/factories aliasing", () => {
  describe('electricCharge["C"]', () => {
    it('should be aliased by "coulombs".', () => {
      expect(coulombs).toBe(electricCharge["C"]);
    });
  });


  describe('electricCharge["MAh"]', () => {
    it('should be aliased by "megaampereHours".', () => {
      expect(megaampereHours).toBe(electricCharge["MAh"]);
    });
  });


  describe('electricCharge["kAh"]', () => {
    it('should be aliased by "kiloampereHours".', () => {
      expect(kiloampereHours).toBe(electricCharge["kAh"]);
    });
  });


  describe('electricCharge["Ah"]', () => {
    it('should be aliased by "ampereHours".', () => {
      expect(ampereHours).toBe(electricCharge["Ah"]);
    });
  });


  describe('electricCharge["mAh"]', () => {
    it('should be aliased by "milliampereHours".', () => {
      expect(milliampereHours).toBe(electricCharge["mAh"]);
    });
  });


  describe('electricCharge["µAh"]', () => {
    it('should be aliased by "microampereHours".', () => {
      expect(microampereHours).toBe(electricCharge["µAh"]);
    });
  });

});

describe("electricCharge", () => {
});
