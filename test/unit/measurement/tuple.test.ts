import {Tuple, tuple, isTuple, unit, value} from "!src/measurement/tuple";

describe('tuple', () => {
  it("should represent the measurement described in its parameters as a tuple.", () => {
    type Expected = Tuple<"px", 12.5>;
    const expected: Expected = [12.5, "px"] as const;
    const actual: Expected = tuple(12.5, "px");
    expect(actual).toEqual(expected);
  });
});

describe('isTuple', () => {
  it("should return false if the candidate is not an array.", () => {
    expect(isTuple(12.5)).toBe(false);
  });

  it("should return false if the candidate is not an array of length 2.", () => {
    expect(isTuple([12.5])).toBe(false);
  });

  it("should return false if the candidate's value is not a number.", () => {
    expect(isTuple(["test", "px"])).toBe(false);
  });

  it("should return false if the candidate's unit is not a string.", () => {
    expect(isTuple([12.5, 12.5])).toBe(false);
  });

  it("should return false if the candidate's unit does not match the expected unit.", () => {
    expect(isTuple([12.5, "px"], "em")).toBe(false);
  });

  it("should return false if the candidate's value does not match the expected value.", () => {
    expect(isTuple([12.5, "px"], "px", 13)).toBe(false);
  });

  it("should return true if the candidate is a valid tuple representation of a measurement.", () => {
    expect(isTuple([12.5, "px"])).toBe(true);
  });

  it("should return true if the candidate is a valid tuple representation of a measurement with the expected unit.", () => {
    expect(isTuple([12.5, "px"], "px")).toBe(true);
  });

  it("should return true if the candidate is a valid tuple representation of a measurement with the expected value.", () => {
    expect(isTuple([12.5, "px"], undefined, 12.5)).toBe(true);
  });

  it("should return true if the candidate is a valid tuple representation of a measurement with the expected unit and value.", () => {
    expect(isTuple([12.5, "px"], "px", 12.5)).toBe(true);
  });
});

describe('value', () => {
  it("should return the value of the measurement.", () => {
    const measurement: Tuple<"px", 12.5> = [12.5, "px"] as const;
    expect(value(measurement)).toBe(12.5);
  });
});

describe('unit', () => {
  it("should return the unit of the measurement.", () => {
    const measurement: Tuple<"px", 12.5> = [12.5, "px"] as const;
    expect(unit(measurement)).toBe("px");
  });
});