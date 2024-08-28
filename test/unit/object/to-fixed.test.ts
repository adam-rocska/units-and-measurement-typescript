import {measurement, toFixed} from "!src/object";

describe("toFixed", () => {
  it("should return a measurement representation of the measurement with the specified number of decimal places.", () => {
    const test = measurement(0.1 + 0.2, "px");
    expect(toFixed(test, 1)).toEqual(measurement(0.3, "px"));
    expect(toFixed(test, 2)).toEqual(measurement(0.3, "px"));
    expect(toFixed(test, 3)).toEqual(measurement(0.3, "px"));
  });

  it("should cap the decimals as expected", () => {
    const test = measurement(0.12345, "px");
    expect(toFixed(test)).toEqual(measurement(0, "px"));
    expect(toFixed(test, 0)).toEqual(measurement(0, "px"));
    expect(toFixed(test, 1)).toEqual(measurement(0.1, "px"));
    expect(toFixed(test, 2)).toEqual(measurement(0.12, "px"));
    expect(toFixed(test, 3)).toEqual(measurement(0.123, "px"));
    expect(toFixed(test, 4)).toEqual(measurement(0.1234, "px"));
    expect(toFixed(test, 5)).toEqual(measurement(0.12345, "px"));
  });
});
