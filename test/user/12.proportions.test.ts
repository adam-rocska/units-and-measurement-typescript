import {expect, test} from "vitest";
import {
  object,
  string,
  tuple,
} from "@adam-rocska/units-and-measurement";
import {proportion} from "@adam-rocska/units-and-measurement/operations";
import {
  centimeters,
  inches,
  meters,
} from "@adam-rocska/units-and-measurement/length";
import {
  celsius,
  fahrenheit,
} from "@adam-rocska/units-and-measurement/temperature";
import {
  liters,
  milliliters,
} from "@adam-rocska/units-and-measurement/volume";

test("Use Case 12: Measurements can be compared as proportions", () => {
  expect(proportion(string.measurement(640, "px"), string.measurement(320, "px")))
    .toBe(2);

  expect(proportion(tuple.measurement(45, "min"), tuple.measurement(15, "min")))
    .toBe(3);

  expect(proportion(object.measurement(7.5, "kg"), object.measurement(2.5, "kg")))
    .toBe(3);

  expect(proportion(inches(11), centimeters(13.97)))
    .toBeCloseTo(2);

  expect(proportion(meters(2), string.measurement(50, "cm")))
    .toBe(4);

  expect(proportion(tuple.measurement(250, "mL"), liters(1)))
    .toBe(0.25);

  expect(proportion(liters(1), milliliters(250)))
    .toBe(4);

  expect(proportion(fahrenheit(212), celsius(100)))
    .toBeCloseTo(1);

  expect(proportion(string.measurement(1, "m"), string.measurement(100, "cm")))
    .toBeUndefined();
});
