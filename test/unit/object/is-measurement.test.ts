import {Measurement, isMeasurement} from "!src/object";

describe('isMeasurement', () => {
  it("should return false if the value doesn't have a unit field.", () => {
    const measurement = {value: 12.5};
    expect(isMeasurement(measurement)).toBe(false);
  });

  it("should return false if the value is null.", () => {
    expect(isMeasurement(null)).toBe(false);
  });

  it("should return false if the value doesn't have a value field.", () => {
    const measurement = {unit: "px"};
    expect(isMeasurement(measurement)).toBe(false);
  });

  it("should return false if the value of the unit field is not a string.", () => {
    const measurement = {value: 12.5, unit: 12.5};
    expect(isMeasurement(measurement)).toBe(false);
  });

  it("should return false if the value of the value field is not a number.", () => {
    const measurement = {value: "12.5", unit: "px"};
    expect(isMeasurement(measurement)).toBe(false);
  });

  it("should return false if the value of the unit field is not the specified unit.", () => {
    const measurement = {value: 12.5, unit: "em"};
    expect(isMeasurement(measurement, "px")).toBe(false);
  });

  it("should return false if the value of the value field is not the specified value.", () => {
    const measurement = {value: 13.5, unit: "px"};
    expect(isMeasurement(measurement, "px", 12.5)).toBe(false);
  });

  it("should return true if the value is a measurement with the specified unit.", () => {
    const measurement: Measurement<"px", 12.5> = {value: 12.5, unit: "px"};
    expect(isMeasurement(measurement, "px")).toBe(true);
  });

  it("should return true if the value is a measurement with the specified value.", () => {
    const measurement: Measurement<"px", 12.5> = {value: 12.5, unit: "px"};
    expect(isMeasurement(measurement, undefined, 12.5)).toBe(true);
  });

  it("should return true if the value is a measurement with the specified unit and value.", () => {
    const measurement: Measurement<"px", 12.5> = {value: 12.5, unit: "px"};
    expect(isMeasurement(measurement, "px", 12.5)).toBe(true);
  });
});