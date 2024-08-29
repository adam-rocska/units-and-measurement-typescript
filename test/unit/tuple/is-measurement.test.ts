import {isMeasurement} from "!src/tuple";

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