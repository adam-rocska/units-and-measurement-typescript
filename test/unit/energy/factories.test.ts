import {energy} from "!src/energy/factories";
import {kilojoules, joules, kilocalories, calories, kilowattHours, wattHours, electronvolts} from "!src/energy/factories";
import {linearConversion} from "!src/conversion";

describe("!src/energy/factories aliasing", () => {
  describe('energy["kJ"]', () => {
    it('should be aliased by "kilojoules".', () => {
      expect(kilojoules).toBe(energy["kJ"]);
    });
  });


  describe('energy["J"]', () => {
    it('should be aliased by "joules".', () => {
      expect(joules).toBe(energy["J"]);
    });
  });


  describe('energy["kCal"]', () => {
    it('should be aliased by "kilocalories".', () => {
      expect(kilocalories).toBe(energy["kCal"]);
    });
  });


  describe('energy["cal"]', () => {
    it('should be aliased by "calories".', () => {
      expect(calories).toBe(energy["cal"]);
    });
  });


  describe('energy["kWh"]', () => {
    it('should be aliased by "kilowattHours".', () => {
      expect(kilowattHours).toBe(energy["kWh"]);
    });
  });


  describe('energy["Wh"]', () => {
    it('should be aliased by "wattHours".', () => {
      expect(wattHours).toBe(energy["Wh"]);
    });
  });


  describe('energy["eV"]', () => {
    it('should be aliased by "electronvolts".', () => {
      expect(electronvolts).toBe(energy["eV"]);
    });
  });

});

describe("energy", () => {
});
