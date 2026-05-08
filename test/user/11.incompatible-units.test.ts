import {expect, test} from "vitest";
import {
  object,
  string,
  tuple,
} from "@adam-rocska/units-and-measurement";
import {
  add,
  greaterThan,
  toCommonUnit,
} from "@adam-rocska/units-and-measurement/operations";

test("Use Case 11: Incompatible units return undefined", () => {
  expect(add(string.measurement(1, "m"), string.measurement(2, "sec")))
    .toBeUndefined();

  expect(greaterThan(tuple.measurement(1, "m"), tuple.measurement(2, "sec")))
    .toBeUndefined();

  expect(toCommonUnit(
    object.measurement(1, "foo"),
    object.measurement(2, "bar")
  ))
    .toBeUndefined();
});
