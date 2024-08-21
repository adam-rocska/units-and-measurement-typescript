import {String} from "!src/measurement/string";
import {Measurement, toTuple, toString, isMeasurement, value, unit} from "!src/measurement/measurement";

describe("Measurement", () => {
  it("is a type", () => {
    const measurement: Measurement<"m"> = [1, "m"];
    expect(measurement).toStrictEqual([1, "m"]);
  });
});

describe("toTuple", () => {
  it("converts a string measurement to a tuple", () => {
    const input: String<"m", 1> = "1m";
    type Expected = Measurement<"m", 1>;
    const expected: Expected = [1, "m"];
    const actual = toTuple(input);
    expect(actual).toStrictEqual(expected);
  });

  it("leaves a tuple measurement unchanged", () => {
    const input: Measurement<"m", 1> = [1, "m"];
    const expected = input;
    const actual = toTuple(input);
    expect(actual).toStrictEqual(expected);
  });

  it("returns a new tuple instance from the given tuple measurement", () => {
    const input: Measurement<"m", 1> = [1, "m"];
    const actual = toTuple(input);
    expect(actual).not.toBe(input);
  });
});

describe("toString", () => {
  it("converts a tuple measurement to a string", () => {
    const input: Measurement<"m", 1> = [1, "m"];
    type Expected = String<"m", 1>;
    const expected: Expected = "1m";
    const actual = toString(input);
    expect(actual).toStrictEqual(expected);
  });

  it("leaves a string measurement unchanged", () => {
    const input: String<"m", 1> = "1m";
    const expected = input;
    const actual = toString(input);
    expect(actual).toStrictEqual(expected);
  });
});

describe("isMeasurement", () => {
  it("returns true for a tuple measurement", () => {
    const input: Measurement<"m", 1> = [1, "m"];
    expect(isMeasurement(input)).toBe(true);
  });

  it("returns true for a string measurement", () => {
    const input: Measurement<"m", 1> = "1m";
    expect(isMeasurement(input)).toBe(true);
  });

  it("returns false for a non-measurement", () => {
    const input = 1;
    expect(isMeasurement(input)).toBe(false);
  });
});

describe("value", () => {
  it("returns the value of a tuple measurement", () => {
    const input: Measurement<"m", 1> = [1, "m"];
    const expected = 1;
    const actual = value(input);
    expect(actual).toBe(expected);
  });

  it("returns the value of a string measurement", () => {
    const input: Measurement<"m", 1> = "1m";
    const expected = 1;
    const actual = value(input);
    expect(actual).toBe(expected);
  });
});

describe("unit", () => {
  it("returns the unit of a tuple measurement", () => {
    const input: Measurement<"m", 1> = [1, "m"];
    const expected = "m";
    const actual = unit(input);
    expect(actual).toBe(expected);
  });

  it("returns the unit of a string measurement", () => {
    const input: Measurement<"m", 1> = "1m";
    const expected = "m";
    const actual = unit(input);
    expect(actual).toBe(expected);
  });
});