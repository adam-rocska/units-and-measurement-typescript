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
});
