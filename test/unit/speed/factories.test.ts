import {speed} from "!src/speed/factories";
import {metersPerSecond, kilometersPerHour, milesPerHour, knots} from "!src/speed/factories";
import {linearConversion} from "!src/conversion";

describe("!src/speed/factories aliasing", () => {
  describe('speed["m/s"]', () => {
    it('should be aliased by "metersPerSecond".', () => {
      expect(metersPerSecond).toBe(speed["m/s"]);
    });
  });


  describe('speed["km/h"]', () => {
    it('should be aliased by "kilometersPerHour".', () => {
      expect(kilometersPerHour).toBe(speed["km/h"]);
    });
  });


  describe('speed["mph"]', () => {
    it('should be aliased by "milesPerHour".', () => {
      expect(milesPerHour).toBe(speed["mph"]);
    });
  });


  describe('speed["kn"]', () => {
    it('should be aliased by "knots".', () => {
      expect(knots).toBe(speed["kn"]);
    });
  });

});

describe("speed", () => {
});
