import {Measurement} from '!src/measurement';
import {Dimension} from '!src/dimension';
import {Unit} from '!src/unit';
import {LinearUnitConverter} from '!src/unit-converters/linear-unit-converter';

describe('Measurement', () => {
  class StubDimension1 extends Dimension<"STUB1"> {public constructor() {super("STUB1", new LinearUnitConverter(1));} }
  class StubDimension2 extends Dimension<"STUB2"> {public constructor() {super("STUB2", new LinearUnitConverter(1));} }
  type StubSymbol3 = "STUB3_1" | "STUB3_2";
  class StubDimension3 extends Dimension<StubSymbol3> {
    public static _1 = new StubDimension3("STUB3_1", new LinearUnitConverter(1));
    public static _2 = new StubDimension3("STUB3_2", new LinearUnitConverter(2));
  }

  const stubUnit = new Unit("STUB");
  const stubDimension1 = new StubDimension1();
  const stubDimension2 = new StubDimension2();

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
      const measurement = new Measurement(1, stubUnit);
      expect(() => measurement.convertedTo(stubDimension1 as never))
        .toThrow(new Error("Cannot convert between different dimensions."));
    });

    it('should throw an error if the target unit is not a dimension', () => {
      const measurement = new Measurement(1, stubDimension1);
      expect(() => measurement.convertedTo(stubUnit as never))
        .toThrow(new Error("Cannot convert to a non-dimension unit."));
    });

    it('should throw an error if the source and target units are not of the same dimension', () => {
      const measurement = new Measurement(1, stubDimension1);
      expect(() => measurement.convertedTo(stubDimension2 as never))
        .toThrow(new Error("Cannot convert between different dimensions."));
    });

    it('should convert the value to the target unit', () => {
      const measurement1 = new Measurement(123, StubDimension3._1);
      const measurement2 = new Measurement(123 * 2, StubDimension3._2);

      expect(measurement1.convertedTo(StubDimension3._2)).toEqual(measurement2);
      expect(measurement2.convertedTo(StubDimension3._1)).toEqual(measurement1);
    });
  });

  describe('#add', () => {
    it('should add regardless of dimensionality if the units are the same.', () => {
      const measurement1 = new Measurement(1, stubUnit);
      const measurement2 = new Measurement(1, stubUnit);
      expect(measurement1.add(measurement2)).toEqual(new Measurement(2, stubUnit));
    });

    it('should throw an error if the source unit is not a dimension', () => {
      const measurement1 = new Measurement(1, stubUnit);
      const measurement2 = new Measurement(1, stubDimension1);
      expect(() => measurement1.add(measurement2 as never))
        .toThrow(new Error("Cannot add measurements of different dimensions."));
    });

    it('should throw an error if the target unit is not a dimension', () => {
      const measurement1 = new Measurement(1, stubDimension1);
      const measurement2 = new Measurement(1, stubUnit);
      expect(() => measurement1.add(measurement2 as never))
        .toThrow(new Error("Cannot add measurements of different dimensions."));
    });

    it('should throw an error if the source and target units are not of the same dimension', () => {
      const measurement1 = new Measurement(1, stubDimension1);
      const measurement2 = new Measurement(1, stubDimension2);
      expect(() => measurement1.add(measurement2 as never))
        .toThrow(new Error("Cannot add measurements of different dimensions."));
    });

    it('should add the values if they are of the same dimension.', () => {
      const measurement1 = new Measurement(123, StubDimension3._1);
      const measurement2 = new Measurement(123, StubDimension3._2);
      const measurement3 = new Measurement(123 * 2, StubDimension3._1);

      expect(measurement1.add(measurement2)).toEqual(measurement3);
    });
  });

  describe('.add', () => {
    it('should add regardless of dimensionality if the units are the same.', () => {
      const measurement1 = new Measurement(1, stubUnit);
      const measurement2 = new Measurement(1, stubUnit);
      expect(Measurement.add(measurement1, measurement2)).toEqual(new Measurement(2, stubUnit));
    });

    it('should throw an error if the source unit is not a dimension', () => {
      const measurement1 = new Measurement(1, stubUnit);
      const measurement2 = new Measurement(1, stubDimension1);
      expect(() => Measurement.add(measurement1, measurement2 as never))
        .toThrow(new Error("Cannot add measurements of different dimensions."));
    });

    it('should throw an error if the target unit is not a dimension', () => {
      const measurement1 = new Measurement(1, stubDimension1);
      const measurement2 = new Measurement(1, stubUnit);
      expect(() => Measurement.add(measurement1, measurement2 as never))
        .toThrow(new Error("Cannot add measurements of different dimensions."));
    });

    it('should throw an error if the source and target units are not of the same dimension', () => {
      const measurement1 = new Measurement(1, stubDimension1);
      const measurement2 = new Measurement(1, stubDimension2);
      expect(() => Measurement.add(measurement1, measurement2 as never))
        .toThrow(new Error("Cannot add measurements of different dimensions."));
    });

    it('should add the values if they are of the same dimension.', () => {
      const measurement1 = new Measurement(123, StubDimension3._1);
      const measurement2 = new Measurement(123, StubDimension3._2);
      const measurement3 = new Measurement(123 * 2, StubDimension3._1);

      expect(Measurement.add(measurement1, measurement2)).toEqual(measurement3);
    });
  });
});
