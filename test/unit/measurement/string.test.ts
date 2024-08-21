import {String, string, isString, unit, value} from "!src/measurement/string";

describe('string', () => {
  it("should represent the measurement described in its parameters as a string.", () => {
    type Expected = String<"px", 12.5>;
    const expected: Expected = "12.5px" as const;
    const actual: Expected = string(12.5, "px");
    expect(actual).toEqual(expected);
  });
});

describe('isString', () => {
  it("should return false if the candidate is not a string.", () => {
    expect(isString(12.5)).toBe(false);
  });

  it("should return false if the candidate is not a number in a string", () => {
    expect(isString("test")).toBe(false);
  });

  it("should return false if the candidate does not have a unit.", () => {
    expect(isString("12.5")).toBe(false);
  });

  it("should return false if the candidate's unit does not match the expected unit.", () => {
    expect(isString("12.5px", "em")).toBe(false);
  });

  it("should return false if the candidate's value does not match the expected value.", () => {
    expect(isString("12.5px", "px", 13)).toBe(false);
  });

  it("should return false if the candidate is not a valid string representation of a measurement.", () => {
    expect(isString("12.5 px")).toBe(false);
  });

  it("should return true if the candidate is a valid string representation of a measurement.", () => {
    expect(isString("12.5px")).toBe(true);
  });

  it("should return true if the candidate is a valid string representation of a measurement with the expected unit.", () => {
    expect(isString("12.5px", "px")).toBe(true);
  });

  it("should return true if the candidate is a valid string representation of a measurement with the expected value.", () => {
    expect(isString("12.5px", undefined, 12.5)).toBe(true);
  });

  it("should return true if the candidate is a valid string representation of a measurement with the expected unit and value.", () => {
    expect(isString("12.5px", "px", 12.5)).toBe(true);
  });
});

describe('value', () => {
  it("should return the value of the measurement.", () => {
    const measurement: String<"px", 12.5> = "12.5px" as const;
    expect(value(measurement)).toBe(12.5);
  });
});

describe('unit', () => {
  it("should return the unit of the measurement.", () => {
    const measurement: String<"px", 12.5> = "12.5px" as const;
    expect(unit(measurement)).toBe("px");
  });
});