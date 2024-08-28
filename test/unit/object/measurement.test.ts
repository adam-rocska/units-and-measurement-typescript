import {Measurement, measurement} from "!src/object";

describe('measurement', () => {
  it("should represent the measurement described in its parameters as a measurement.", () => {
    type Expected = Measurement<"px", 12.5>;
    const expected = {value: 12.5, unit: "px"} as const as Expected;
    const actual: Expected = measurement(12.5, "px");
    expect(actual.unit).toBe(expected.unit);
    expect(actual.value).toBe(expected.value);
  });
});