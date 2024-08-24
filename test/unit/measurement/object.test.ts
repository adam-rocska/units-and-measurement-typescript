import {Object} from "!src/measurement/object";
import * as s from "!src/measurement/string";
import * as t from "!src/measurement/tuple";

describe("Object", () => {
  /// MARK: Constructor tests
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

  /// MARK: Tuple Conformance Tests
  describe("Tuple Conformance", () => {
    const unit = new Object(5.5, "in");
    const tuple = Reflect.get(unit, "measurement");

    describe("0", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit[0]).toBe(tuple[0]);
      });
    });
    describe("1", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit[1]).toBe(tuple[1]);
      });
    });
    describe("length", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.length).toBe(tuple.length);
      });
    });
    describe("concat ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.concat).toBe(tuple.concat);
      });
    });
    describe("join ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.join).toBe(tuple.join);
      });
    });
    describe("slice ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.slice).toBe(tuple.slice);
      });
    });
    describe("indexOf ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.indexOf).toBe(tuple.indexOf);
      });
    });
    describe("lastIndexOf ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.lastIndexOf).toBe(tuple.lastIndexOf);
      });
    });
    describe("every ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.every).toBe(tuple.every);
      });
    });
    describe("some ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.some).toBe(tuple.some);
      });
    });
    describe("forEach ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.forEach).toBe(tuple.forEach);
      });
    });
    describe("map ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.map).toBe(tuple.map);
      });
    });
    describe("filter ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.filter).toBe(tuple.filter);
      });
    });
    describe("reduce ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.reduce).toBe(tuple.reduce);
      });
    });
    describe("reduceRight ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.reduceRight).toBe(tuple.reduceRight);
      });
    });
    describe("find ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.find).toBe(tuple.find);
      });
    });
    describe("findIndex ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.findIndex).toBe(tuple.findIndex);
      });
    });
    describe("entries ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.entries).toBe(tuple.entries);
      });
    });
    describe("keys ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.keys).toBe(tuple.keys);
      });
    });
    describe("values ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.values).toBe(tuple.values);
      });
    });
    describe("includes ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.includes).toBe(tuple.includes);
      });
    });
    describe("flatMap ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.flatMap).toBe(tuple.flatMap);
      });
    });
    describe("flat ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.flat).toBe(tuple.flat);
      });
    });
    describe("at ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.at).toBe(tuple.at);
      });
    });
    describe("findLast ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.findLast).toBe(tuple.findLast);
      });
    });
    describe("findLastIndex ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.findLastIndex).toBe(tuple.findLastIndex);
      });
    });
    describe("toReversed ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.toReversed).toBe(tuple.toReversed);
      });
    });
    describe("toSorted ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.toSorted).toBe(tuple.toSorted);
      });
    });
    describe("toSpliced ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.toSpliced).toBe(tuple.toSpliced);
      });
    });
    describe("with ", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit.with).toBe(tuple.with);
      });
    });
    describe("[Symbol.iterator]", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit[Symbol.iterator]).toBe(tuple[Symbol.iterator]);
      });
    });
    describe("[Symbol.unscopables]", () => {
      it("should be the same as of the encapsulated tuple", () => {
        expect(unit[Symbol.unscopables]).toBe(tuple[Symbol.unscopables]);
      });
    });

    describe('functional utility compatibility', () => {
      describe('isTuple', () => {
        it('should return false for the encapsulated tuple', () => {
          expect(t.isTuple(unit)).toBe(false);
        });
      });

      describe('value', () => {
        it('should return the value of the encapsulated tuple', () => {
          expect(t.value(unit)).toBe(5.5);
        });
      });

      describe('unit', () => {
        it('should return the unit of the encapsulated tuple', () => {
          expect(t.unit(unit)).toBe("in");
        });
      });

      describe('toFixed', () => {
        it('should return the value of the encapsulated tuple with the expected number of fraction digits', () => {
          expect(t.toFixed(unit, 2)).toEqual([5.5, "in"]);
        });
      });

      describe('toExponential', () => {
        it('should return the value of the encapsulated tuple in exponential notation with the expected number of fraction digits', () => {
          expect(t.toExponential(unit, 2)).toEqual([5.5, "in"]);
        });
      });

      describe('toPrecision', () => {
        it('should return the value of the encapsulated tuple with the expected precision', () => {
          expect(t.toPrecision(unit, 2)).toEqual([5.5, "in"]);
        });
      });
    });
  });
});
