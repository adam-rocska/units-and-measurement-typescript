import {Measurement, value} from "!src/string";

describe('value', () => {
  it("should return the value of the measurement.", () => {
    const measurement: Measurement<"px", 12.5> = "12.5px" as const;
    expect(value(measurement)).toBe(12.5);
  });
});
