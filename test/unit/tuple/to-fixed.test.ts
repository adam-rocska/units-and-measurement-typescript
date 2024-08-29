import {measurement, toFixed} from "!src/tuple";

describe("toFixed", () => {
  it("should return a measurement with the value of the measurement to a fixed number of decimal places.", () => {
    const unit = measurement(0.1 + 0.2, "px");
    const expected = measurement(0.3, "px");
    const actual = toFixed(unit, 1);
    expect(actual).toEqual(expected);
  });
});
