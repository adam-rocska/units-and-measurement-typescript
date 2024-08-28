import {isMeasurement} from "!src/string";

describe('isMeasurement', () => {
  it("should return false if the candidate is not a measurement.", () => {
    expect(isMeasurement(12.5)).toBe(false);
  });

  it("should return false if the candidate is not a number in a measurement", () => {
    expect(isMeasurement("test")).toBe(false);
  });

  it("should return false if the candidate does not have a unit.", () => {
    expect(isMeasurement("12.5")).toBe(false);
  });

  it("should return false if the candidate's unit does not match the expected unit.", () => {
    expect(isMeasurement("12.5px", "em")).toBe(false);
  });

  it("should return false if the candidate's value does not match the expected value.", () => {
    expect(isMeasurement("12.5px", "px", 13)).toBe(false);
  });

  it("should return false if the candidate is not a valid measurement representation of a measurement.", () => {
    expect(isMeasurement("12.5 px")).toBe(false);
  });

  it("should return true if the candidate is a valid measurement representation of a measurement.", () => {
    expect(isMeasurement("12.5px")).toBe(true);
  });

  it("should return true if the candidate is a valid measurement representation of a measurement with the expected unit.", () => {
    expect(isMeasurement("12.5px", "px")).toBe(true);
  });

  it("should return true if the candidate is a valid measurement representation of a measurement with the expected value.", () => {
    expect(isMeasurement("12.5px", undefined, 12.5)).toBe(true);
  });

  it("should return true if the candidate is a valid measurement representation of a measurement with the expected unit and value.", () => {
    expect(isMeasurement("12.5px", "px", 12.5)).toBe(true);
  });
});