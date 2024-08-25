import {String} from "!src/measurement/string";
import {Measurement, toTuple, toString, isMeasurement, value, unit, toFixed, toExponential, toPrecision} from "!src/measurement/measurement";
import {MeasurementObject} from "!src/measurement/measurement-object";

describe("Measurement", () => {
  describe("type union", () => {
    it("includes a tuple measurement", () => {
      const measurement: Measurement<"m"> = [1, "m"];
      expect(measurement).toStrictEqual([1, "m"]);
    });

    it("includes a string measurement", () => {
      const measurement: Measurement<"m"> = "1m";
      expect(measurement).toStrictEqual("1m");
    });

    it("includes a measurement object", () => {
      const measurement: Measurement<"m"> = new MeasurementObject(1, "m");
      expect(measurement).toStrictEqual(new MeasurementObject(1, "m"));
    });
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

  it("converts a measurement object to a tuple", () => {
    const input = new MeasurementObject(1, "m");
    type Expected = Measurement<"m", 1>;
    const expected: Expected = [1, "m"];
    const actual = toTuple(input);
    expect(actual).toStrictEqual(expected);
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

  it("converts a measurement object to a string", () => {
    const input = new MeasurementObject(1, "m");
    type Expected = String<"m", 1>;
    const expected: Expected = "1m";
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

  it("returns true for a measurement object", () => {
    const input = new MeasurementObject(1, "m");
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

  it("returns the value of a measurement object", () => {
    const input = new MeasurementObject(1, "m");
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

  it("returns the unit of a measurement object", () => {
    const input = new MeasurementObject(1, "m");
    const expected = "m";
    const actual = unit(input);
    expect(actual).toBe(expected);
  });
});

describe("toFixed", () => {
  it("returns a tuple measurement with a fixed value", () => {
    const input: Measurement<"m", 1> = [1, "m"];
    const expected: Measurement<"m", number> = [1.00, "m"];
    const actual = toFixed(input, 2);
    expect(actual).toStrictEqual(expected);
  });

  it("returns a string measurement with a fixed value", () => {
    const input: Measurement<"m", 1> = "1m";
    const expected: String<"m", number> = "1.00m";
    const actual = toFixed(input, 2);
    expect(actual).toStrictEqual(expected);
  });

  it("returns an object measurement with a fixed value", () => {
    const input = new MeasurementObject(1, "m");
    const expected = new MeasurementObject(1.00, "m");
    const actual = toFixed(input, 2);
    expect(actual).toStrictEqual(expected);
  });
});

describe("toExponential", () => {
  it("returns a tuple measurement with an exponential value", () => {
    const input: Measurement<"m", 1> = [1, "m"];
    const expected: Measurement<"m", number> = [1e+0, "m"];
    const actual = toExponential(input);
    expect(actual).toStrictEqual(expected);
  });

  it("returns a string measurement with an exponential value", () => {
    const input: Measurement<"m", 1> = "1m";
    const expected: String<"m", number> = "1e+0m";
    const actual = toExponential(input);
    expect(actual).toStrictEqual(expected);
  });

  it("returns an object measurement with an exponential value", () => {
    const input = new MeasurementObject(1, "m");
    const expected = new MeasurementObject(1e+0, "m");
    const actual = toExponential(input);
    expect(actual).toStrictEqual(expected);
  });
});

describe("toPrecision", () => {
  it("returns a tuple measurement with a precise value", () => {
    const input: Measurement<"m", 1> = [1, "m"];
    const expected: Measurement<"m", number> = [1.0, "m"];
    const actual = toPrecision(input, 2);
    expect(actual).toStrictEqual(expected);
  });

  it("returns a string measurement with a precise value", () => {
    const input: Measurement<"m", 1> = "1m";
    const expected: String<"m", number> = "1.0m";
    const actual = toPrecision(input, 2);
    expect(actual).toStrictEqual(expected);
  });

  it("returns an object measurement with a precise value", () => {
    const input = new MeasurementObject(1, "m");
    const expected = new MeasurementObject(1.0, "m");
    const actual = toPrecision(input, 2);
    expect(actual).toStrictEqual(expected);
  });
});