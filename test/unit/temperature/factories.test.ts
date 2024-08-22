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
  describe('K', () => {
    it.each([1, 10, 100])('should yield a K measurement when given a number.', v => {
      expect(temperature["K"](v)).toEqual([v, "K"]);
      expect(kelvin(v)).toEqual([v, "K"]);
    });



    it.each([1, 10, 100])('should convert °C to K.', v => {
      const kelvinConversion = linearConversion(1);
      const celsiusConversion = linearConversion(1, 273.15);

      const [toBase, fromBase] = [
        celsiusConversion[0],
        kelvinConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "K"] as const;
      const conversionCandidate = [v, "°C"] as const;

      expect(temperature["K"](conversionCandidate)).toEqual(expected);
      expect(kelvin(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert °F to K.', v => {
      const kelvinConversion = linearConversion(1);
      const fahrenheitConversion = linearConversion(0.55555555555556, 255.37222222222428);

      const [toBase, fromBase] = [
        fahrenheitConversion[0],
        kelvinConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "K"] as const;
      const conversionCandidate = [v, "°F"] as const;

      expect(temperature["K"](conversionCandidate)).toEqual(expected);
      expect(kelvin(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert °R to K.', v => {
      const kelvinConversion = linearConversion(1);
      const rankineConversion = linearConversion(0.55555555555556);

      const [toBase, fromBase] = [
        rankineConversion[0],
        kelvinConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "K"] as const;
      const conversionCandidate = [v, "°R"] as const;

      expect(temperature["K"](conversionCandidate)).toEqual(expected);
      expect(kelvin(conversionCandidate)).toEqual(expected);
    });
  });


  describe('°C', () => {
    it.each([1, 10, 100])('should yield a °C measurement when given a number.', v => {
      expect(temperature["°C"](v)).toEqual([v, "°C"]);
      expect(celsius(v)).toEqual([v, "°C"]);
    });

    it.each([1, 10, 100])('should convert K to °C.', v => {
      const celsiusConversion = linearConversion(1, 273.15);
      const kelvinConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kelvinConversion[0],
        celsiusConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "°C"] as const;
      const conversionCandidate = [v, "K"] as const;

      expect(temperature["°C"](conversionCandidate)).toEqual(expected);
      expect(celsius(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert °F to °C.', v => {
      const celsiusConversion = linearConversion(1, 273.15);
      const fahrenheitConversion = linearConversion(0.55555555555556, 255.37222222222428);

      const [toBase, fromBase] = [
        fahrenheitConversion[0],
        celsiusConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "°C"] as const;
      const conversionCandidate = [v, "°F"] as const;

      expect(temperature["°C"](conversionCandidate)).toEqual(expected);
      expect(celsius(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert °R to °C.', v => {
      const celsiusConversion = linearConversion(1, 273.15);
      const rankineConversion = linearConversion(0.55555555555556);

      const [toBase, fromBase] = [
        rankineConversion[0],
        celsiusConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "°C"] as const;
      const conversionCandidate = [v, "°R"] as const;

      expect(temperature["°C"](conversionCandidate)).toEqual(expected);
      expect(celsius(conversionCandidate)).toEqual(expected);
    });
  });


  describe('°F', () => {
    it.each([1, 10, 100])('should yield a °F measurement when given a number.', v => {
      expect(temperature["°F"](v)).toEqual([v, "°F"]);
      expect(fahrenheit(v)).toEqual([v, "°F"]);
    });

    it.each([1, 10, 100])('should convert K to °F.', v => {
      const fahrenheitConversion = linearConversion(0.55555555555556, 255.37222222222428);
      const kelvinConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kelvinConversion[0],
        fahrenheitConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "°F"] as const;
      const conversionCandidate = [v, "K"] as const;

      expect(temperature["°F"](conversionCandidate)).toEqual(expected);
      expect(fahrenheit(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert °C to °F.', v => {
      const fahrenheitConversion = linearConversion(0.55555555555556, 255.37222222222428);
      const celsiusConversion = linearConversion(1, 273.15);

      const [toBase, fromBase] = [
        celsiusConversion[0],
        fahrenheitConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "°F"] as const;
      const conversionCandidate = [v, "°C"] as const;

      expect(temperature["°F"](conversionCandidate)).toEqual(expected);
      expect(fahrenheit(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert °R to °F.', v => {
      const fahrenheitConversion = linearConversion(0.55555555555556, 255.37222222222428);
      const rankineConversion = linearConversion(0.55555555555556);

      const [toBase, fromBase] = [
        rankineConversion[0],
        fahrenheitConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "°F"] as const;
      const conversionCandidate = [v, "°R"] as const;

      expect(temperature["°F"](conversionCandidate)).toEqual(expected);
      expect(fahrenheit(conversionCandidate)).toEqual(expected);
    });
  });


  describe('°R', () => {
    it.each([1, 10, 100])('should yield a °R measurement when given a number.', v => {
      expect(temperature["°R"](v)).toEqual([v, "°R"]);
      expect(rankine(v)).toEqual([v, "°R"]);
    });

    it.each([1, 10, 100])('should convert K to °R.', v => {
      const rankineConversion = linearConversion(0.55555555555556);
      const kelvinConversion = linearConversion(1);

      const [toBase, fromBase] = [
        kelvinConversion[0],
        rankineConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "°R"] as const;
      const conversionCandidate = [v, "K"] as const;

      expect(temperature["°R"](conversionCandidate)).toEqual(expected);
      expect(rankine(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert °C to °R.', v => {
      const rankineConversion = linearConversion(0.55555555555556);
      const celsiusConversion = linearConversion(1, 273.15);

      const [toBase, fromBase] = [
        celsiusConversion[0],
        rankineConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "°R"] as const;
      const conversionCandidate = [v, "°C"] as const;

      expect(temperature["°R"](conversionCandidate)).toEqual(expected);
      expect(rankine(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert °F to °R.', v => {
      const rankineConversion = linearConversion(0.55555555555556);
      const fahrenheitConversion = linearConversion(0.55555555555556, 255.37222222222428);

      const [toBase, fromBase] = [
        fahrenheitConversion[0],
        rankineConversion[1]
      ];

      const expected = [toBase(fromBase(v)), "°R"] as const;
      const conversionCandidate = [v, "°F"] as const;

      expect(temperature["°R"](conversionCandidate)).toEqual(expected);
      expect(rankine(conversionCandidate)).toEqual(expected);
    });


  });

});
