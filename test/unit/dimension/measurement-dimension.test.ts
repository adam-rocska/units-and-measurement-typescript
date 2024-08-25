import {Conversion} from "!src/conversion";
import {DimensionMeasurement} from "!src/dimension/measurement-dimension";
import {MeasurementObject} from "!src/measurement/measurement-object";

describe('DimensionMeasurement', () => {
  const conversions = {
    m: [v => v, v => v] satisfies Conversion,
    cm: [v => v / 100, v => v * 100] satisfies Conversion,
  } as const;
  const dimension = DimensionMeasurement(conversions);

  describe("factory results", () => {
    it("returns a dimension object", () => {
      expect(dimension).toEqual({
        m: expect.any(Function),
        cm: expect.any(Function),
      });
    });

    it("returns a dimension object with measurement functions", () => {
      expect(dimension.m).toEqual(expect.any(Function));
      expect(dimension.cm).toEqual(expect.any(Function));
    });

    it("returns a dimension object with measurement functions that return measurement objects", () => {
      expect(dimension.m(1)).toEqual([1, "m"]);
      expect(dimension.cm(100)).toEqual([100, "cm"]);
    });

    it("returns a dimension object with measurement functions that return measurement objects that are instances of MeasurementObject", () => {
      expect(dimension.m(1)).toBeInstanceOf(MeasurementObject);
      expect(dimension.cm(100)).toBeInstanceOf(MeasurementObject);
    });

    it("ensures proper conversion of dimension units", () => {
      expect(dimension.m(1)).toEqual([1, "m"]);
      expect(dimension.cm(100)).toEqual([100, "cm"]);
      expect(dimension.m([1, "m"])).toEqual([1, "m"]);
      expect(dimension.cm([100, "cm"])).toEqual([100, "cm"]);
      expect(dimension.m([100, "cm"])).toEqual([1, "m"]);
      expect(dimension.cm([1, "m"])).toEqual([100, "cm"]);
    });
  });
});