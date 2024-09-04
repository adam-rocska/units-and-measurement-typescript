import {toCommonUnit} from "!src/operations/to-common-unit";
import * as o from "!src/object";
import * as d from "!src/dimension";
import {value, unit} from "!src";

describe("toCommonUnit", () => {
  const units = ["m", "cm", "mm"] as const;
  type Units = typeof units[number];
  const conversions: d.Conversions<Units> = {
    m: [v => v, v => v],
    cm: [v => v / 100, v => v * 100],
    mm: [v => v / 1000, v => v * 1000],
  };
  const length = d.dimension<Units>(conversions);

  it("should return an empty array if no measurements are provided", () => {
    expect(toCommonUnit()).toEqual([]);
  });

  it("should return the same array if only one measurement is provided", () => {
    const measurements = [o.measurement(1, "m")];
    expect(toCommonUnit(...measurements)).toEqual(measurements);
    expect(toCommonUnit(...measurements)).not.toBe(measurements);
  });

  it("should convert measurements to a common unit", () => {
    const measurements = [
      o.measurement(1, "m"),
      o.measurement(2, "m"),
      o.measurement(3, "m"),
    ];
    expect(toCommonUnit(...measurements)).toEqual(measurements);
  });

  it("should convert measurements to a common unit", () => {
    const measurements = [
      o.measurement(1, "m"),
      length.cm(2),
      length.mm(3),
    ];

    for (const [i, actual] of toCommonUnit(...measurements).entries()) {
      expect(value(actual)).toEqual(value(measurements[i]!));
      expect(unit(actual)).toEqual("m");
    }
  });

  it("should throw an error if measurements have different dimensions", () => {
    const measurements = [
      o.measurement(1, "m"),
      o.measurement(2, "s"),
    ];
    expect(() => toCommonUnit(...measurements)).toThrow(new TypeError(expectedErrorMessage));
  });

  it("should throw an error if dimension can't be expressed as unit.", () => {
    const otherLength = d.dimension({
      km: [v => v / 100, v => v * 100],
    });
    const measurements = [
      o.measurement(1, "m"),
      otherLength.km(3),
    ];
    expect(() => toCommonUnit(...measurements)).toThrow(new TypeError(expectedErrorMessage));
  });

  it("should throw an error if measurements have different units", () => {
    const measurements = [
      o.measurement(1, "m"),
      o.measurement(2, "cm"),
    ];
    expect(() => toCommonUnit(...measurements)).toThrow(new TypeError(expectedErrorMessage));
  });
});

const expectedErrorMessage = "All measurements must have the same unit or be of the same dimension.";