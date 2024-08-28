import {Measurement, measurement, isMeasurement, unit, value, toFixed, toExponential, toPrecision} from "!src/object";

describe('measurement', () => {
  it("should represent the measurement described in its parameters as a measurement.", () => {
    type Expected = Measurement<"px", 12.5>;
    const expected: Expected = {value: 12.5, unit: "px"};
    const actual: Expected = measurement(12.5, "px");
    expect(actual.unit).toBe(expected.unit);
    expect(actual.value).toBe(expected.value);
  });
});

describe('isMeasurement', () => {
  it("should return false if the value doesn't have a unit field.", () => {
    const measurement = {value: 12.5};
    expect(isMeasurement(measurement)).toBe(false);
  });

  it("should return false if the value is null.", () => {
    expect(isMeasurement(null)).toBe(false);
  });

  it("should return false if the value doesn't have a value field.", () => {
    const measurement = {unit: "px"};
    expect(isMeasurement(measurement)).toBe(false);
  });

  it("should return false if the value of the unit field is not a string.", () => {
    const measurement = {value: 12.5, unit: 12.5};
    expect(isMeasurement(measurement)).toBe(false);
  });

  it("should return false if the value of the value field is not a number.", () => {
    const measurement = {value: "12.5", unit: "px"};
    expect(isMeasurement(measurement)).toBe(false);
  });

  it("should return false if the value of the unit field is not the specified unit.", () => {
    const measurement = {value: 12.5, unit: "em"};
    expect(isMeasurement(measurement, "px")).toBe(false);
  });

  it("should return false if the value of the value field is not the specified value.", () => {
    const measurement = {value: 13.5, unit: "px"};
    expect(isMeasurement(measurement, "px", 12.5)).toBe(false);
  });

  it("should return true if the value is a measurement with the specified unit.", () => {
    const measurement: Measurement<"px", 12.5> = {value: 12.5, unit: "px"};
    expect(isMeasurement(measurement, "px")).toBe(true);
  });

  it("should return true if the value is a measurement with the specified value.", () => {
    const measurement: Measurement<"px", 12.5> = {value: 12.5, unit: "px"};
    expect(isMeasurement(measurement, undefined, 12.5)).toBe(true);
  });

  it("should return true if the value is a measurement with the specified unit and value.", () => {
    const measurement: Measurement<"px", 12.5> = {value: 12.5, unit: "px"};
    expect(isMeasurement(measurement, "px", 12.5)).toBe(true);
  });
});

describe('value', () => {
  it("should return the value of the measurement.", () => {
    const measurement: Measurement<"px", 12.5> = {value: 12.5, unit: "px"};
    expect(value(measurement)).toBe(12.5);
  });
});

describe('unit', () => {
  it("should return the unit of the measurement.", () => {
    const measurement: Measurement<"px", 12.5> = {value: 12.5, unit: "px"};
    expect(unit(measurement)).toBe("px");
  });
});

describe("toFixed", () => {
  it("should return a measurement representation of the measurement with the specified number of decimal places.", () => {
    const test = measurement(0.1 + 0.2, "px");
    expect(toFixed(test, 1)).toEqual(measurement(0.3, "px"));
    expect(toFixed(test, 2)).toEqual(measurement(0.3, "px"));
    expect(toFixed(test, 3)).toEqual(measurement(0.3, "px"));
  });
});

describe("toExponential", () => {
  it("should return a measurement representation of the measurement in exponential notation.", () => {
    const test = measurement(0.1 + 0.2, "px");
    expect(toExponential(test, 1)).toEqual(measurement(3e-1, "px"));
  });
});

describe("toPrecision", () => {
  it("should return a measurement representation of the measurement with the specified number of significant digits.", () => {
    const test = measurement(0.1 + 0.2, "px");
    expect(toPrecision(test, 1)).toEqual(measurement(0.3, "px"));
    expect(toPrecision(test, 2)).toEqual(measurement(0.3, "px"));
    expect(toPrecision(test, 3)).toEqual(measurement(0.3, "px"));
  });
});