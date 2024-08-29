import {measurement, toPrecision} from "!src/tuple";

describe("toPrecision", () => {
  it("should return a measurement with the value of the measurement to a specified precision.", () => {
    const unit = measurement(0.1 + 0.2, "px");
    const expected = measurement(0.3, "px");
    const actual = toPrecision(unit, 1);
    expect(actual).toEqual(expected);
  });
});