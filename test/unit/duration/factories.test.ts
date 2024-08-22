import {duration} from "!src/duration/factories";
import {seconds, minutes, hours} from "!src/duration/factories";
import {linearConversion} from "!src/conversion";

describe("!src/duration/factories aliasing", () => {
  describe('duration["sec"]', () => {
    it('should be aliased by "seconds".', () => {
      expect(seconds).toBe(duration["sec"]);
    });
  });


  describe('duration["min"]', () => {
    it('should be aliased by "minutes".', () => {
      expect(minutes).toBe(duration["min"]);
    });
  });


  describe('duration["hr"]', () => {
    it('should be aliased by "hours".', () => {
      expect(hours).toBe(duration["hr"]);
    });
  });

});

describe("duration", () => {
  describe('sec', () => {
    it.each([1, 10, 100])('should yield a sec measurement when given a number.', v => {
      expect(duration["sec"](v)).toEqual([v, "sec"]);
      expect(seconds(v)).toEqual([v, "sec"]);
    });



    it.each([1, 10, 100])('should convert %dmin to sec.', v => {
      const secondsConversion = linearConversion(1);
      const minutesConversion = linearConversion(60);

      const [toBase, fromBase] = [
        minutesConversion[0],
        secondsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "sec"] as const;
      const conversionCandidate = [v, "min"] as const;

      expect(duration["sec"](conversionCandidate)).toEqual(expected);
      expect(seconds(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dhr to sec.', v => {
      const secondsConversion = linearConversion(1);
      const hoursConversion = linearConversion(3600);

      const [toBase, fromBase] = [
        hoursConversion[0],
        secondsConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "sec"] as const;
      const conversionCandidate = [v, "hr"] as const;

      expect(duration["sec"](conversionCandidate)).toEqual(expected);
      expect(seconds(conversionCandidate)).toEqual(expected);
    });
  });


  describe('min', () => {
    it.each([1, 10, 100])('should yield a min measurement when given a number.', v => {
      expect(duration["min"](v)).toEqual([v, "min"]);
      expect(minutes(v)).toEqual([v, "min"]);
    });

    it.each([1, 10, 100])('should convert %dsec to min.', v => {
      const minutesConversion = linearConversion(60);
      const secondsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        secondsConversion[0],
        minutesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "min"] as const;
      const conversionCandidate = [v, "sec"] as const;

      expect(duration["min"](conversionCandidate)).toEqual(expected);
      expect(minutes(conversionCandidate)).toEqual(expected);
    });



    it.each([1, 10, 100])('should convert %dhr to min.', v => {
      const minutesConversion = linearConversion(60);
      const hoursConversion = linearConversion(3600);

      const [toBase, fromBase] = [
        hoursConversion[0],
        minutesConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "min"] as const;
      const conversionCandidate = [v, "hr"] as const;

      expect(duration["min"](conversionCandidate)).toEqual(expected);
      expect(minutes(conversionCandidate)).toEqual(expected);
    });
  });


  describe('hr', () => {
    it.each([1, 10, 100])('should yield a hr measurement when given a number.', v => {
      expect(duration["hr"](v)).toEqual([v, "hr"]);
      expect(hours(v)).toEqual([v, "hr"]);
    });

    it.each([1, 10, 100])('should convert %dsec to hr.', v => {
      const hoursConversion = linearConversion(3600);
      const secondsConversion = linearConversion(1);

      const [toBase, fromBase] = [
        secondsConversion[0],
        hoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hr"] as const;
      const conversionCandidate = [v, "sec"] as const;

      expect(duration["hr"](conversionCandidate)).toEqual(expected);
      expect(hours(conversionCandidate)).toEqual(expected);
    });

    it.each([1, 10, 100])('should convert %dmin to hr.', v => {
      const hoursConversion = linearConversion(3600);
      const minutesConversion = linearConversion(60);

      const [toBase, fromBase] = [
        minutesConversion[0],
        hoursConversion[1],
      ];

      const expected = [fromBase(toBase(v)), "hr"] as const;
      const conversionCandidate = [v, "min"] as const;

      expect(duration["hr"](conversionCandidate)).toEqual(expected);
      expect(hours(conversionCandidate)).toEqual(expected);
    });


  });

});
