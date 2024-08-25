import {UnitMeasurement} from "!src/dimension/measurement-unit";
import {MeasurementObject} from "!src/measurement/measurement-object";

describe('UnitMeasurement', () => {
  it("should yield a measurement factory of the given unit", () => {
    const m = UnitMeasurement("m");
    expect(m(1)).toEqual([1, "m"]);
    expect(m("1m")).toEqual([1, "m"]);
    expect(m(new MeasurementObject(3, "m"))).toEqual([3, "m"]);
  });

  it("should yield the measurement results as a `MeasurementObject` object.", () => {
    const m = UnitMeasurement("m");
    expect(m(1)).toBeInstanceOf(MeasurementObject);
    expect(m("1m")).toBeInstanceOf(MeasurementObject);
    expect(m(new MeasurementObject(3, "m"))).toBeInstanceOf(MeasurementObject);
  });
});