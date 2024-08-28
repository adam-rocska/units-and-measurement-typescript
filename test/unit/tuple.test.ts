import {Measurement, measurement, isMeasurement, unit, value, toFixed, toExponential, toPrecision} from "!src/tuple";

describe('measurement', () => {
  it("should represent the measurement described in its parameters as a measurement.", () => {
    type Expected = Measurement<"px", 12.5>;
    const expected: Expected = [12.5, "px"] as const;
    const actual: Expected = measurement(12.5, "px");
    expect(actual).toEqual(expected);
  });
});

describe('isMeasurement', () => {
  it("should return false if the candidate is not an array.", () => {
    expect(isMeasurement(12.5)).toBe(false);
  });

  it("should return false if the candidate is not an array of length 2.", () => {
    expect(isMeasurement([12.5])).toBe(false);
  });

  it("should return false if the candidate's value is not a number.", () => {
    expect(isMeasurement(["test", "px"])).toBe(false);
  });

  it("should return false if the candidate's unit is not a string.", () => {
    expect(isMeasurement([12.5, 12.5])).toBe(false);
  });

  it("should return false if the candidate's unit does not match the expected unit.", () => {
    expect(isMeasurement([12.5, "px"], "em")).toBe(false);
  });

  it("should return false if the candidate's value does not match the expected value.", () => {
    expect(isMeasurement([12.5, "px"], "px", 13)).toBe(false);
  });

  it("should return true if the candidate is a valid measurement representation of a measurement.", () => {
    expect(isMeasurement([12.5, "px"])).toBe(true);
  });

  it("should return true if the candidate is a valid measurement representation of a measurement with the expected unit.", () => {
    expect(isMeasurement([12.5, "px"], "px")).toBe(true);
  });

  it("should return true if the candidate is a valid measurement representation of a measurement with the expected value.", () => {
    expect(isMeasurement([12.5, "px"], undefined, 12.5)).toBe(true);
  });

  it("should return true if the candidate is a valid measurement representation of a measurement with the expected unit and value.", () => {
    expect(isMeasurement([12.5, "px"], "px", 12.5)).toBe(true);
  });
});

describe('value', () => {
  it("should return the value of the measurement.", () => {
    const measurement: Measurement<"px", 12.5> = [12.5, "px"] as const;
    expect(value(measurement)).toBe(12.5);
  });
});

describe('unit', () => {
  it("should return the unit of the measurement.", () => {
    const measurement: Measurement<"px", 12.5> = [12.5, "px"] as const;
    expect(unit(measurement)).toBe("px");
  });
});

describe("toFixed", () => {
  it("should return a measurement with the value of the measurement to a fixed number of decimal places.", () => {
    const unit = measurement(0.1 + 0.2, "px");
    const expected = measurement(0.3, "px");
    const actual = toFixed(unit, 1);
    expect(actual).toEqual(expected);
  });
});

describe("toExponential", () => {
  it("should return a measurement with the value of the measurement to exponential notation.", () => {
    const unit = measurement(0.1 + 0.2, "px");
    const expected = measurement(0.1 + 0.2, "px"); // toExponent should still be the floating point mess we face
    const actual = toExponential(unit);
    expect(actual).toEqual(expected);
  });
});

describe("toPrecision", () => {
  it("should return a measurement with the value of the measurement to a specified precision.", () => {
    const unit = measurement(0.1 + 0.2, "px");
    const expected = measurement(0.3, "px");
    const actual = toPrecision(unit, 1);
    expect(actual).toEqual(expected);
  });
});