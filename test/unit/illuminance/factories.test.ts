import {illuminance} from "!src/illuminance/factories";
import {lux} from "!src/illuminance/factories";
import {linearConversion} from "!src/conversion";

describe("!src/illuminance/factories aliasing", () => {
  describe('illuminance["lx"]', () => {
    it('should be aliased by "lux".', () => {
      expect(lux).toBe(illuminance["lx"]);
    });
  });

});

describe("illuminance", () => {
  describe('lx', () => {
    it.each([1, 10, 100])('should yield a lx measurement when given a number.', v => {
      expect(illuminance["lx"](v)).toEqual([v, "lx"]);
      expect(lux(v)).toEqual([v, "lx"]);
    });


  });

});
