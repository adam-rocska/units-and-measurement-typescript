import {Measurement, unit} from "!src/tuple";

describe('unit', () => {
  it("should return the unit of the measurement.", () => {
    const measurement: Measurement<"px", 12.5> = [12.5, "px"] as const;
    expect(unit(measurement)).toBe("px");
  });
});
