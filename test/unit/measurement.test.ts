import {Measurement} from '!src/measurement';
import {Unit} from '!src/unit';
import {LengthDimension} from '!src/dimensions';
import {AreaDimension} from '!src/dimensions/physical/area/area-dimension';

describe('Measurement', () => {
  class StubUnit extends Unit<"STUB"> {public static readonly stub = new StubUnit("STUB");}

  describe('.unit', () => {
    it('should be the very same reference we passed in the constructor', () => {
      const unit = {symbol: 'm'};
      const measurement = new Measurement(1, unit);
      expect(measurement.unit).toBe(unit);
    });
  });

  describe('.value', () => {
    it('should be the same value we passed in the constructor', () => {
      const measurement = new Measurement(1, {symbol: 'm'});
      expect(measurement.value).toEqual(1);
    });
  });

  describe('#convertedTo', () => {
    it('should throw an error if the source unit is not a dimension', () => {
      /// NOTE: This whole thing won't even be callable in reality.
      const measurement = new Measurement(1, LengthDimension.centimeters);
      expect(() => measurement.convertedTo(AreaDimension.squareCentimeters as never))
        .toThrow(new Error("Cannot convert between different dimensions."));
    });

    it('should convert the value to the target unit', () => {
      const measurement1 = new Measurement(123, LengthDimension.centimeters);
      const measurement2 = new Measurement(1.23, LengthDimension.meters);

      expect(measurement1.convertedTo(LengthDimension.meters)).toEqual(measurement2);
      expect(measurement2.convertedTo(LengthDimension.centimeters)).toEqual(measurement1);
    });
  });

  describe("#unitIsDimension", () => {
    it("should return true if the unit is a dimension", () => {
      const measurement = new Measurement(1, LengthDimension.meters);
      expect(measurement.unitIsDimension()).toBe(true);
    });

    it("should return false if the unit is not a dimension", () => {
      const measurement = new Measurement(1, StubUnit.stub);
      expect(measurement.unitIsDimension()).toBe(false);
    });
  });

  describe("#assertUnitIsDimension", () => {
    it("should not throw an error if the unit is a dimension", () => {
      const measurement = new Measurement(1, LengthDimension.meters);
      expect(() => measurement.assertUnitIsDimension()).not.toThrow();
    });

    it("should throw an error if the unit is not a dimension", () => {
      const measurement = new Measurement(1, StubUnit.stub);
      expect(() => measurement.assertUnitIsDimension())
        .toThrow(new Error("The unit is not a dimension."));
    });

    it("should throw an error with the specified message if the unit is not a dimension", () => {
      const measurement = new Measurement(1, StubUnit.stub);
      expect(() => measurement.assertUnitIsDimension("Custom message."))
        .toThrow(new Error("Custom message."));
    });
  });

  describe("arithmetics", () => {
    describe('#add', () => {
      it('should add the values as they are if both units are not dimensions', () => {
        const measurement1 = new Measurement(1, StubUnit.stub);
        const measurement2 = new Measurement(2, StubUnit.stub);
        expect(measurement1.add(measurement2)).toEqual(new Measurement(3, StubUnit.stub));
        expect(measurement2.add(measurement1)).toEqual(new Measurement(3, StubUnit.stub));
      });

      it('should add the values after converting the second value to the first unit', () => {
        const measurement1 = new Measurement(1, LengthDimension.meters);
        const measurement2 = new Measurement(20, LengthDimension.centimeters);
        expect(measurement1.add(measurement2))
          .toEqual(new Measurement(1.2, LengthDimension.meters));
        expect((measurement1.add(measurement2)).convertedTo(LengthDimension.centimeters))
          .toEqual(new Measurement(120, LengthDimension.centimeters));
        expect(measurement2.add(measurement1))
          .toEqual(new Measurement(120, LengthDimension.centimeters));
        expect((measurement2.add(measurement1)).convertedTo(LengthDimension.meters))
          .toEqual(new Measurement(1.2, LengthDimension.meters));
      });
    });

    describe('#subtract', () => {
      it('should subtract the values as they are if both units are not dimensions', () => {
        const measurement1 = new Measurement(1, StubUnit.stub);
        const measurement2 = new Measurement(2, StubUnit.stub);
        expect(measurement1.subtract(measurement2)).toEqual(new Measurement(-1, StubUnit.stub));
        expect(measurement2.subtract(measurement1)).toEqual(new Measurement(1, StubUnit.stub));
      });

      it('should subtract the values after converting the second value to the first unit', () => {
        const measurement1 = new Measurement(1, LengthDimension.meters);
        const measurement2 = new Measurement(20, LengthDimension.centimeters);
        expect(measurement1.subtract(measurement2))
          .toEqual(new Measurement(0.8, LengthDimension.meters));
        expect((measurement1.subtract(measurement2)).convertedTo(LengthDimension.centimeters))
          .toEqual(new Measurement(80, LengthDimension.centimeters));
        expect(measurement2.subtract(measurement1))
          .toEqual(new Measurement(-80, LengthDimension.centimeters));
        expect((measurement2.subtract(measurement1)).convertedTo(LengthDimension.meters))
          .toEqual(new Measurement(-0.8, LengthDimension.meters));
      });
    });

    describe('#multiply', () => {
      it('should multiply the value by the given number', () => {
        const measurement = new Measurement(2, StubUnit.stub);
        expect(measurement.multiply(3)).toEqual(new Measurement(6, StubUnit.stub));
      });
    });

    describe('#divide', () => {
      it('should divide the value by the given number', () => {
        const measurement = new Measurement(6, StubUnit.stub);
        expect(measurement.divide(3)).toEqual(new Measurement(2, StubUnit.stub));
      });
    });
  });

  describe('comparison', () => {
    describe('#equals', () => {
      it('should return true if the values are equal', () => {
        const measurement1 = new Measurement(1, LengthDimension.meters);
        const measurement2 = new Measurement(100, LengthDimension.centimeters);
        expect(measurement1.equals(measurement2)).toBe(true);
        expect(measurement1.equals(measurement1)).toBe(true);
        expect(measurement2.equals(measurement1)).toBe(true);
        expect(measurement2.equals(measurement2)).toBe(true);
      });

      it('should return false if the values are different', () => {
        const measurement1 = new Measurement(1, LengthDimension.meters);
        const measurement2 = new Measurement(2, LengthDimension.meters);
        expect(measurement1.equals(measurement2)).toBe(false);
        expect(measurement2.equals(measurement1)).toBe(false);
      });

      it('should return true if the converted values are the same', () => {
        const measurement1 = new Measurement(1, LengthDimension.meters);
        const measurement2 = new Measurement(100, LengthDimension.centimeters);
        expect(measurement1.equals(measurement2)).toBe(true);
        expect(measurement2.equals(measurement1)).toBe(true);
      });

      it('should return false if the converted values are different', () => {
        const measurement1 = new Measurement(1, LengthDimension.meters);
        const measurement2 = new Measurement(3, LengthDimension.centimeters);
        expect(measurement1.equals(measurement2)).toBe(false);
        expect(measurement2.equals(measurement1)).toBe(false);
      });
    });

    describe('#lessThan', () => {
      it('should return true if the value is less than the other value', () => {
        const measurement1 = new Measurement(1, StubUnit.stub);
        const measurement2 = new Measurement(2, StubUnit.stub);
        expect(measurement1.lessThan(measurement2)).toBe(true);
        expect(measurement1.lessThan(measurement1)).toBe(false);
        expect(measurement2.lessThan(measurement1)).toBe(false);
        expect(measurement2.lessThan(measurement2)).toBe(false);
      });

      it('should return true if the converted value is less than the other value', () => {
        const measurement1 = new Measurement(1, LengthDimension.centimeters);
        const measurement2 = new Measurement(10, LengthDimension.meters);
        expect(measurement1.lessThan(measurement2)).toBe(true);
        expect(measurement1.lessThan(measurement1)).toBe(false);
        expect(measurement2.lessThan(measurement1)).toBe(false);
        expect(measurement2.lessThan(measurement2)).toBe(false);
      });

      it('should return false if the converted value is greater than the other value', () => {
        const measurement1 = new Measurement(1, LengthDimension.centimeters);
        const measurement2 = new Measurement(3, LengthDimension.meters);
        expect(measurement1.lessThan(measurement2)).toBe(true);
        expect(measurement1.lessThan(measurement1)).toBe(false);
        expect(measurement2.lessThan(measurement1)).toBe(false);
        expect(measurement2.lessThan(measurement2)).toBe;
      });

    });

    describe('#lessThanOrEqual', () => {
      it('should return true if the value is less than or equal to the other value', () => {
        const measurement1 = new Measurement(1, StubUnit.stub);
        const measurement2 = new Measurement(2, StubUnit.stub);
        expect(measurement1.lessThanOrEqual(measurement2)).toBe(true);
        expect(measurement1.lessThanOrEqual(measurement1)).toBe(true);
        expect(measurement2.lessThanOrEqual(measurement1)).toBe(false);
        expect(measurement2.lessThanOrEqual(measurement2)).toBe(true);
      });

      it('should return true if the converted value is less than or equal to the other value', () => {
        const measurement1 = new Measurement(1, LengthDimension.centimeters);
        const measurement2 = new Measurement(10, LengthDimension.meters);
        expect(measurement1.lessThanOrEqual(measurement2)).toBe(true);
        expect(measurement1.lessThanOrEqual(measurement1)).toBe(true);
        expect(measurement2.lessThanOrEqual(measurement1)).toBe(false);
        expect(measurement2.lessThanOrEqual(measurement2)).toBe(true);
      });

      it('should return false if the converted value is greater than the other value', () => {
        const measurement1 = new Measurement(1, LengthDimension.centimeters);
        const measurement2 = new Measurement(3, LengthDimension.meters);
        expect(measurement1.lessThanOrEqual(measurement2)).toBe(true);
        expect(measurement1.lessThanOrEqual(measurement1)).toBe(true);
        expect(measurement2.lessThanOrEqual(measurement1)).toBe(false);
        expect(measurement2.lessThanOrEqual(measurement2)).toBe(true);
      });

    });
    describe('#greaterThan', () => {
      it('should return true if the value is greater than the other value', () => {
        const measurement1 = new Measurement(1, StubUnit.stub);
        const measurement2 = new Measurement(2, StubUnit.stub);
        expect(measurement1.greaterThan(measurement2)).toBe(false);
        expect(measurement1.greaterThan(measurement1)).toBe(false);
        expect(measurement2.greaterThan(measurement1)).toBe(true);
        expect(measurement2.greaterThan(measurement2)).toBe(false);
      });

      it('should return true if the converted value is greater than the other value', () => {
        const measurement1 = new Measurement(1, LengthDimension.centimeters);
        const measurement2 = new Measurement(10, LengthDimension.meters);
        expect(measurement1.greaterThan(measurement2)).toBe(false);
        expect(measurement1.greaterThan(measurement1)).toBe(false);
        expect(measurement2.greaterThan(measurement1)).toBe(true);
        expect(measurement2.greaterThan(measurement2)).toBe(false);
      });

      it('should return false if the converted value is less than the other value', () => {
        const measurement1 = new Measurement(1, LengthDimension.centimeters);
        const measurement2 = new Measurement(3, LengthDimension.meters);
        expect(measurement1.greaterThan(measurement2)).toBe(false);
        expect(measurement1.greaterThan(measurement1)).toBe(false);
        expect(measurement2.greaterThan(measurement1)).toBe(true);
        expect(measurement2.greaterThan(measurement2)).toBe(false);
      });
    });

    describe('#greaterThanOrEqual', () => {
      it('should return true if the value is greater than or equal to the other value', () => {
        const measurement1 = new Measurement(1, StubUnit.stub);
        const measurement2 = new Measurement(2, StubUnit.stub);
        expect(measurement1.greaterThanOrEqual(measurement2)).toBe(false);
        expect(measurement1.greaterThanOrEqual(measurement1)).toBe(true);
        expect(measurement2.greaterThanOrEqual(measurement1)).toBe(true);
        expect(measurement2.greaterThanOrEqual(measurement2)).toBe(true);
      });

      it('should return true if the converted value is greater than or equal to the other value', () => {
        const measurement1 = new Measurement(1, LengthDimension.centimeters);
        const measurement2 = new Measurement(10, LengthDimension.meters);
        expect(measurement1.greaterThanOrEqual(measurement2)).toBe(false);
        expect(measurement1.greaterThanOrEqual(measurement1)).toBe(true);
        expect(measurement2.greaterThanOrEqual(measurement1)).toBe(true);
        expect(measurement2.greaterThanOrEqual(measurement2)).toBe(true);
      });

      it('should return true if the converted value is greater than or equal to the other value', () => {
        const measurement1 = new Measurement(1, LengthDimension.centimeters);
        const measurement2 = new Measurement(3, LengthDimension.meters);
        expect(measurement1.greaterThanOrEqual(measurement2)).toBe(false);
        expect(measurement1.greaterThanOrEqual(measurement1)).toBe(true);
        expect(measurement2.greaterThanOrEqual(measurement1)).toBe(true);
        expect(measurement2.greaterThanOrEqual(measurement2)).toBe(true);
      });
    });
  });

  describe('String representation', () => {
    describe('#toString', () => {
      it('should return the string representation of the measurement', () => {
        const measurement = new Measurement(123.123, LengthDimension.meters);
        expect(measurement.toString()).toEqual("123.123m");
      });
    });
  });
});
