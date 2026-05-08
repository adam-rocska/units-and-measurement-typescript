import {expect, test} from "vitest";
import {dimension} from "@adam-rocska/units-and-measurement";
import {areEqual} from "@adam-rocska/units-and-measurement/operations";
import {
  celsius,
  fahrenheit,
  kelvin,
  rankine,
} from "@adam-rocska/units-and-measurement/temperature";

test("Use Case 6: Temperature conversions handle offsets", () => {
  expect(celsius(0).K.value).toBeCloseTo(273.15);
  expect(fahrenheit(32)["°C"].value).toBeCloseTo(0);
  expect(kelvin(273.15)["°C"].value).toBeCloseTo(0);
  expect(rankine(0).K.value).toBe(0);

  const boilingInCelsius = dimension.toFixed(fahrenheit(212)["°C"], 6);

  expect(areEqual(celsius(100), boilingInCelsius)).toBe(true);
});
