import {Measurement, toFixed} from "!src/string";

describe("toFixed", () => {
  it("should return a measurement representation of the measurement with the specified number of decimal places.", () => {
    const measurement: Measurement<"px", 12.5> = "12.5px" as const;
    expect(toFixed(measurement, 1)).toBe("12.5px");
    expect(toFixed(measurement, 2)).toBe("12.50px");
    expect(toFixed(measurement, 3)).toBe("12.500px");
  });
});