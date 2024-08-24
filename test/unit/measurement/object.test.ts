import {Object} from "!src/measurement/object";

describe('Object', () => {
  describe("constructor", () => {
    it("should accept a string", () => {
      const measurement = new Object("5.5in");
      expect(measurement.value).toEqual(5.5);
      expect(measurement.unit).toEqual("in");
    });

    it("should accept a tuple", () => {
      const measurement = new Object(5.5, "in");
      expect(measurement.value).toEqual(5.5);
      expect(measurement.unit).toEqual("in");
    });

    it("should accept direct parameters", () => {
      const measurement = new Object(5.5, "in");
      expect(measurement.value).toEqual(5.5);
      expect(measurement.unit).toEqual("in");
    });
  });
});