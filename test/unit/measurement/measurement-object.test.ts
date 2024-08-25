import {MeasurementObject} from "!src/measurement/measurement-object";
import * as t from "!src/measurement/tuple";

describe("MeasurementObject", () => {
  /// MARK: Constructor tests
  describe("constructor", () => {
    it("should accept a string", () => {
      const measurement = new MeasurementObject("5.5in");
      expect(measurement.value).toEqual(5.5);
      expect(measurement.unit).toEqual("in");
    });

    it("should accept a tuple", () => {
      const measurement = new MeasurementObject([5.5, "in"]);
      expect(measurement.value).toEqual(5.5);
      expect(measurement.unit).toEqual("in");
    });

    it("should accept direct parameters", () => {
      const measurement = new MeasurementObject(5.5, "in");
      expect(measurement.value).toEqual(5.5);
      expect(measurement.unit).toEqual("in");
    });
  });

  /// MARK: Number Conformance Tests

  describe("Number Conformance", () => {
    describe("toString", () => {
      it("should return the VALUE of the measurement in the expected radix.", () => {
        const measurement = new MeasurementObject("5.5in");
        for (let i = 2; i <= 36; i++) {
          expect(measurement.toString(i)).toEqual((5.5).toString(i));
        }
      });
    });

    describe("toFixed", () => {
      it("should return the VALUE of the measurement with the expected number of fraction digits.", () => {
        const measurement = new MeasurementObject("5.5in");
        expect(measurement.toFixed(2)).toEqual((5.5).toFixed(2));
      });
    });

    describe("toExponential", () => {
      it("should return the VALUE of the measurement in exponential notation with the expected number of fraction digits.", () => {
        const measurement = new MeasurementObject("5.5in");
        expect(measurement.toExponential(2)).toEqual((5.5).toExponential(2));
      });
    });

    describe("toPrecision", () => {
      it("should return the VALUE of the measurement with the expected precision.", () => {
        const measurement = new MeasurementObject("5.5in");
        expect(measurement.toPrecision(2)).toEqual((5.5).toPrecision(2));
      });
    });

    describe("valueOf", () => {
      it("should return the VALUE of the measurement.", () => {
        const measurement = new MeasurementObject("5.5in");
        expect(measurement.valueOf()).toEqual(5.5);
      });
    });

    describe("toLocaleString", () => {
      it("should return the VALUE of the measurement in the expected locale.", () => {
        const measurement = new MeasurementObject("5.5in");
        expect(measurement.toLocaleString()).toEqual((5.5).toLocaleString());
      });
    });
  });

  /// MARK: Tuple Conformance Tests
  describe("Tuple Conformance", () => {
    const unit = new MeasurementObject(5.5, "in");
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

  describe("Arithmetics", () => {
    describe("add", () => {
      it("should add the value of the measurement to the given value", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.add(5).value).toEqual(10.5);
      });

      it("should add the value of the measurement to the value of the given measurement", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.add(new MeasurementObject(5, "in")).value).toEqual(10.5);
      });
    });

    describe("subtract", () => {
      it("should subtract the value of the measurement from the given value", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.subtract(5).value).toEqual(0.5);
      });

      it("should subtract the value of the given measurement from the value of the measurement", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.subtract(new MeasurementObject(5, "in")).value).toEqual(0.5);
      });
    });

    describe("multiply", () => {
      it("should multiply the value of the measurement by the given value", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.multiply(5).value).toEqual(27.5);
      });
    });

    describe("divide", () => {
      it("should divide the value of the measurement by the given value", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.divide(5).value).toEqual(1.1);
      });
    });

    describe("modulo", () => {
      it("should modulo the value of the measurement by the given value", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.modulo(5).value).toEqual(0.5);
      });
    });

    describe("power", () => {
      it("should raise the value of the measurement to the given value", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.power(2).value).toEqual(30.25);
      });
    });

    describe("root", () => {
      it("should root the value of the measurement by the given value", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.root(2).value).toEqual(2.345207879911715);
      });
    });

    describe("negate", () => {
      it("should negate the value of the measurement", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.negate().value).toEqual(-5.5);
      });
    });

    describe("abs", () => {
      it("should return the absolute value of the measurement", () => {
        const measurement = new MeasurementObject(-5.5, "in");
        expect(measurement.abs().value).toEqual(5.5);
      });
    });

    describe("ceil", () => {
      it("should ceil the value of the measurement", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.ceil().value).toEqual(6);
      });
    });

    describe("floor", () => {
      it("should floor the value of the measurement", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.floor().value).toEqual(5);
      });
    });

    describe("round", () => {
      it("should round the value of the measurement", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.round().value).toEqual(6);
      });
    });
  });

  describe("Comparison Operations", () => {
    describe("equals", () => {
      it("should compare the value of the measurement to the given value", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.equals(5.5)).toBe(true);
        expect(measurement.equals(5)).toBe(false);
      });

      it("should compare the value of the measurement to the value of the given measurement", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.equals(new MeasurementObject(5.5, "in"))).toBe(true);
        expect(measurement.equals(new MeasurementObject(5, "in"))).toBe(false);
      });
    });

    describe("lessThan", () => {
      it("should compare the value of the measurement to the given value", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.lessThan(5.5)).toBe(false);
        expect(measurement.lessThan(6)).toBe(true);
      });

      it("should compare the value of the measurement to the value of the given measurement", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.lessThan(new MeasurementObject(5.5, "in"))).toBe(false);
        expect(measurement.lessThan(new MeasurementObject(6, "in"))).toBe(true);
      });
    });

    describe("lessThanOrEqual", () => {
      it("should compare the value of the measurement to the given value", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.lessThanOrEqual(5.5)).toBe(true);
        expect(measurement.lessThanOrEqual(6)).toBe(true);
      });

      it("should compare the value of the measurement to the value of the given measurement", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.lessThanOrEqual(new MeasurementObject(5.5, "in"))).toBe(true);
        expect(measurement.lessThanOrEqual(new MeasurementObject(6, "in"))).toBe(true);
      });
    });

    describe("greaterThan", () => {
      it("should compare the value of the measurement to the given value", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.greaterThan(5.5)).toBe(false);
        expect(measurement.greaterThan(6)).toBe(false);
      });

      it("should compare the value of the measurement to the value of the given measurement", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.greaterThan(new MeasurementObject(5.5, "in"))).toBe(false);
        expect(measurement.greaterThan(new MeasurementObject(6, "in"))).toBe(false);
      });

      it("should compare the value of the measurement to the value of the given measurement", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.greaterThan(new MeasurementObject(5, "in"))).toBe(true);
        expect(measurement.greaterThan(new MeasurementObject(6, "in"))).toBe(false);
      });
    });

    describe("greaterThanOrEqual", () => {
      it("should compare the value of the measurement to the given value", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.greaterThanOrEqual(5.5)).toBe(true);
        expect(measurement.greaterThanOrEqual(6)).toBe(false);
      });

      it("should compare the value of the measurement to the value of the given measurement", () => {
        const measurement = new MeasurementObject(5.5, "in");
        expect(measurement.greaterThanOrEqual(new MeasurementObject(5.5, "in"))).toBe(true);
        expect(measurement.greaterThanOrEqual(new MeasurementObject(6, "in"))).toBe(false);
      });
    });

  });
});
