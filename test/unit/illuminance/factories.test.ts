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
});
