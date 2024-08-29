import {measurement, toPrecision} from "!src/object";

describe("toPrecision", () => {
  it("should return a measurement representation of the measurement with the specified number of significant digits.", () => {
    const test = measurement(0.1 + 0.2, "px");
    expect(toPrecision(test, 1)).toEqual(measurement(0.3, "px"));
    expect(toPrecision(test, 2)).toEqual(measurement(0.3, "px"));
    expect(toPrecision(test, 3)).toEqual(measurement(0.3, "px"));
  });

  it("should cap the significant digits as expected", () => {
    const test = measurement(0.123456, "px");
    expect(toPrecision(test)).toEqual(measurement(0, "px"));
    expect(toPrecision(test, 1)).toEqual(measurement(0, "px"));
    expect(toPrecision(test, 2)).toEqual(measurement(0, "px"));
    expect(toPrecision(test, 3)).toEqual(measurement(0.123, "px"));
    expect(toPrecision(test, 4)).toEqual(measurement(0.1235, "px"));
    expect(toPrecision(test, 5)).toEqual(measurement(0.12345, "px"));
    expect(toPrecision(test, 6)).toEqual(measurement(0.123456, "px"));
  });
});