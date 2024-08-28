import {measurement, value} from "!src/object";

describe('value', () => {
  it("should return the value of the measurement.", () => {
    const actual: 12.5 = value(measurement(12.5, "px"));
    expect(actual).toBe(12.5);
  });
});