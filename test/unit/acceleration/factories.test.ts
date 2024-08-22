import {acceleration} from "!src/acceleration/factories";
import {metersPerSecondSquared, gravity} from "!src/acceleration/factories";
import {linearConversion} from "!src/conversion";

describe("!src/acceleration/factories aliasing", () => {
  describe('acceleration["m/s²"]', () => {
    it('should be aliased by "metersPerSecondSquared".', () => {
      expect(metersPerSecondSquared).toBe(acceleration["m/s²"]);
    });
  });


  describe('acceleration["g"]', () => {
    it('should be aliased by "gravity".', () => {
      expect(gravity).toBe(acceleration["g"]);
    });
  });

});

describe("acceleration", () => {
});
