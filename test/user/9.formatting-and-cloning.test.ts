import {expect, test} from "vitest";
import {
  dimension,
  measurement,
  object,
  string,
  toFixed,
  toPrecision,
  tuple,
  unit,
  value,
} from "@adam-rocska/units-and-measurement";
import {inches} from "@adam-rocska/units-and-measurement/length";

test("Use Case 9: Formatting and cloning preserve measurement shape", () => {
  expect(toFixed(string.measurement(1.236, "m"), 2)).toBe("1.24m");
  expect(toPrecision(tuple.measurement(1234, "ms"), 2)).toEqual([1200, "ms"]);

  const roundedObject = toFixed(object.measurement(1.236, "kg"), 2);

  expect(value(roundedObject)).toBe(1.24);
  expect(unit(roundedObject)).toBe("kg");

  const baseMass = object.measurement(5, "kg");
  const updatedMass = measurement(baseMass, 7);

  expect(value(updatedMass)).toBe(7);
  expect(unit(updatedMass)).toBe("kg");

  const roundedDimension = dimension.toPrecision(inches(12).cm, 3);

  expect(roundedDimension.value).toBe(30.5);
  expect(roundedDimension.unit).toBe("cm");
});
