import {power} from "!src/power/factories";
import {terawatts, gigawatts, megawatts, kilowatts, watts, milliwatts, microwatts, nanowatts, picowatts, femtowatts, horsepower} from "!src/power/factories";
import {linearConversion} from "!src/conversion";

describe("!src/power/factories aliasing", () => {
  describe('power["TW"]', () => {
    it('should be aliased by "terawatts".', () => {
      expect(terawatts).toBe(power["TW"]);
    });
  });


  describe('power["GW"]', () => {
    it('should be aliased by "gigawatts".', () => {
      expect(gigawatts).toBe(power["GW"]);
    });
  });


  describe('power["MW"]', () => {
    it('should be aliased by "megawatts".', () => {
      expect(megawatts).toBe(power["MW"]);
    });
  });


  describe('power["kW"]', () => {
    it('should be aliased by "kilowatts".', () => {
      expect(kilowatts).toBe(power["kW"]);
    });
  });


  describe('power["W"]', () => {
    it('should be aliased by "watts".', () => {
      expect(watts).toBe(power["W"]);
    });
  });


  describe('power["mW"]', () => {
    it('should be aliased by "milliwatts".', () => {
      expect(milliwatts).toBe(power["mW"]);
    });
  });


  describe('power["µW"]', () => {
    it('should be aliased by "microwatts".', () => {
      expect(microwatts).toBe(power["µW"]);
    });
  });


  describe('power["nW"]', () => {
    it('should be aliased by "nanowatts".', () => {
      expect(nanowatts).toBe(power["nW"]);
    });
  });


  describe('power["pW"]', () => {
    it('should be aliased by "picowatts".', () => {
      expect(picowatts).toBe(power["pW"]);
    });
  });


  describe('power["fW"]', () => {
    it('should be aliased by "femtowatts".', () => {
      expect(femtowatts).toBe(power["fW"]);
    });
  });


  describe('power["hp"]', () => {
    it('should be aliased by "horsepower".', () => {
      expect(horsepower).toBe(power["hp"]);
    });
  });

});

describe("power", () => {
});
