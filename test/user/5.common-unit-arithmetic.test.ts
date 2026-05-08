import {expect, test} from "vitest";
import {
  object,
  string,
  tuple,
  unit,
  value,
} from "@adam-rocska/units-and-measurement";
import {
  add,
  subtract,
  toCommonUnit,
} from "@adam-rocska/units-and-measurement/operations";

test("Use Case 5: Plain measurements use built-in unit knowledge", () => {
  const normalized = toCommonUnit(
    object.measurement(1, "m"),
    tuple.measurement(25, "cm"),
    string.measurement(1000, "mm")
  );

  if (normalized === undefined) {
    throw new Error("Expected compatible length units to normalize.");
  }

  expect(normalized.map(unit)).toEqual(["m", "m", "m"]);
  expect(normalized.map(value)).toEqual([1, 0.25, 1]);

  const total = add(
    object.measurement(1, "m"),
    tuple.measurement(25, "cm"),
    string.measurement(1000, "mm")
  );

  if (total === undefined) {
    throw new Error("Expected compatible length units to add.");
  }

  expect(value(total)).toBe(2.25);
  expect(unit(total)).toBe("m");

  expect(subtract(string.measurement(1, "m"), string.measurement(25, "cm")))
    .toBe("0.75m");
});
