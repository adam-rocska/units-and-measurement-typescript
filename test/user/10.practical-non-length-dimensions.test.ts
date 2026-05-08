import {expect, test} from "vitest";
import {areEqual} from "@adam-rocska/units-and-measurement/operations";
import {
  bytes,
  kilobytes,
} from "@adam-rocska/units-and-measurement/information";
import {
  kilowatts,
  watts,
} from "@adam-rocska/units-and-measurement/power";
import {
  liters,
  milliliters,
} from "@adam-rocska/units-and-measurement/volume";

test("Use Case 10: Non-length dimensions cover everyday conversions", () => {
  expect(liters(1).mL.value).toBe(1000);
  expect(milliliters(250).L.value).toBe(0.25);

  expect(kilowatts(1).W.value).toBe(1000);
  expect(watts(1000).kW.value).toBe(1);

  expect(kilobytes(1).B.value).toBe(1024);
  expect(bytes(1024).KB.value).toBe(1);

  expect(areEqual(liters(1), milliliters(1000))).toBe(true);
  expect(areEqual(kilowatts(1), watts(1000))).toBe(true);
  expect(areEqual(kilobytes(1), bytes(1024))).toBe(true);
});
