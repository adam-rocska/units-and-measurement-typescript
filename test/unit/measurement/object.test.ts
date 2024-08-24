import {Object} from "!src/measurement/object";
import * as s from "!src/measurement/string";

describe('Object', () => {
  describe("constructor", () => {
    it("should accept a string", () => {
      const measurement = new Object("5.5in");
      expect(measurement.value).toEqual(5.5);
      expect(measurement.unit).toEqual("in");
    });

    it("should accept a tuple", () => {
      const measurement = new Object([5.5, "in"]);
      expect(measurement.value).toEqual(5.5);
      expect(measurement.unit).toEqual("in");
    });

    it("should accept direct parameters", () => {
      const measurement = new Object(5.5, "in");
      expect(measurement.value).toEqual(5.5);
      expect(measurement.unit).toEqual("in");
    });
  });

  /// MARK: Number Conformance Tests

  describe("Number Conformance", () => {
    describe("toString", () => {
      it("should return the VALUE of the measurement in the expected radix.", () => {
        const measurement = new Object("5.5in");
        for (let i = 2; i <= 36; i++) {
          expect(measurement.toString(i)).toEqual((5.5).toString(i));
        }
      });
    });

    describe("toFixed", () => {
      it("should return the VALUE of the measurement with the expected number of fraction digits.", () => {
        const measurement = new Object("5.5in");
        expect(measurement.toFixed(2)).toEqual((5.5).toFixed(2));
      });
    });

    describe("toExponential", () => {
      it("should return the VALUE of the measurement in exponential notation with the expected number of fraction digits.", () => {
        const measurement = new Object("5.5in");
        expect(measurement.toExponential(2)).toEqual((5.5).toExponential(2));
      });
    });

    describe("toPrecision", () => {
      it("should return the VALUE of the measurement with the expected precision.", () => {
        const measurement = new Object("5.5in");
        expect(measurement.toPrecision(2)).toEqual((5.5).toPrecision(2));
      });
    });

    describe("valueOf", () => {
      it("should return the VALUE of the measurement.", () => {
        const measurement = new Object("5.5in");
        expect(measurement.valueOf()).toEqual(5.5);
      });
    });

    describe("toLocaleString", () => {
      it("should return the VALUE of the measurement in the expected locale.", () => {
        const measurement = new Object("5.5in");
        expect(measurement.toLocaleString()).toEqual((5.5).toLocaleString());
      });
    });

  });
});