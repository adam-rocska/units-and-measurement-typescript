import {temperature} from "!src/temperature/factories";
import {kelvin, celsius, fahrenheit, rankine} from "!src/temperature/factories";
import {linearConversion} from "!src/conversion";

describe("!src/temperature/factories aliasing", () => {
  describe('temperature["K"]', () => {
    it('should be aliased by "kelvin".', () => {
      expect(kelvin).toBe(temperature["K"]);
    });
  });


  describe('temperature["°C"]', () => {
    it('should be aliased by "celsius".', () => {
      expect(celsius).toBe(temperature["°C"]);
    });
  });


  describe('temperature["°F"]', () => {
    it('should be aliased by "fahrenheit".', () => {
      expect(fahrenheit).toBe(temperature["°F"]);
    });
  });


  describe('temperature["°R"]', () => {
    it('should be aliased by "rankine".', () => {
      expect(rankine).toBe(temperature["°R"]);
    });
  });

});

describe("temperature", () => {
});
