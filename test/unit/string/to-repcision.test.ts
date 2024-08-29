import {Measurement, toPrecision} from "!src/string";

describe("toPrecision", () => {
  it("should return a measurement representation of the measurement with the specified number of significant digits.", () => {
    const measurement: Measurement<"px", 12.5> = "12.5px" as const;
    expect(toPrecision(measurement, 1)).toBe("1e+1px");
    expect(toPrecision(measurement, 2)).toBe("13px");
    expect(toPrecision(measurement, 3)).toBe("12.5px");
  });
});