import {expect, test} from "vitest";
import {dimension} from "@adam-rocska/units-and-measurement";
import {
  kilometers,
  meters,
  type Length,
} from "@adam-rocska/units-and-measurement/length";

test("Use Case 4: Built-in dimensions expose typed conversions", () => {
  const route: Length = kilometers(5);
  const trackLap = meters(400);

  expect(route.kM.value).toBe(5);
  expect(route.m.value).toBe(5000);
  expect(route.m.unit).toBe("m");

  expect(trackLap.kM.value).toBe(0.4);
  expect(trackLap.cm.value).toBe(40000);

  const roundedMiles = dimension.toFixed(route.mi, 2);

  expect(roundedMiles.value).toBe(3.11);
  expect(roundedMiles.unit).toBe("mi");
});
