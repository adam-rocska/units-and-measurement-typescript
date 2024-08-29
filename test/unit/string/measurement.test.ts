import {Measurement, measurement} from "!src/string";

describe('measurement', () => {
  it("should represent the measurement described in its parameters as a measurement.", () => {
    type Expected = Measurement<"px", 12.5>;
    const expected: Expected = "12.5px" as const;
    const actual: Expected = measurement(12.5, "px");
    expect(actual).toEqual(expected);
  });
});