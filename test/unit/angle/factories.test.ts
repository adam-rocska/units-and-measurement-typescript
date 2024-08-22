import {angle} from "!src/angle/factories";
import {degrees, arcMinutes, arcSeconds, radians, gradians, revolutions} from "!src/angle/factories";
import {linearConversion} from "!src/conversion";

describe("!src/angle/factories aliasing", () => {
  describe('angle["°"]', () => {
    it('should be aliased by "degrees".', () => {
      expect(degrees).toBe(angle["°"]);
    });
  });


  describe('angle["ʹ"]', () => {
    it('should be aliased by "arcMinutes".', () => {
      expect(arcMinutes).toBe(angle["ʹ"]);
    });
  });


  describe('angle["ʺ"]', () => {
    it('should be aliased by "arcSeconds".', () => {
      expect(arcSeconds).toBe(angle["ʺ"]);
    });
  });


  describe('angle["rad"]', () => {
    it('should be aliased by "radians".', () => {
      expect(radians).toBe(angle["rad"]);
    });
  });


  describe('angle["grad"]', () => {
    it('should be aliased by "gradians".', () => {
      expect(gradians).toBe(angle["grad"]);
    });
  });


  describe('angle["rev"]', () => {
    it('should be aliased by "revolutions".', () => {
      expect(revolutions).toBe(angle["rev"]);
    });
  });

});

describe("angle", () => {
});
