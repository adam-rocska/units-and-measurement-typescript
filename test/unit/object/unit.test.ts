import {measurement, unit} from "!src/object";

describe('unit', () => {
  it("should return the unit of the measurement.", () => {
    const actual: "px" = unit(measurement(12.5, "px"));
    expect(actual).toBe("px");
  });
});