import {expect, test} from "vitest";
import {
  type Measurement,
  measurement,
  object,
  string,
  tuple,
  unit,
  value,
} from "@adam-rocska/units-and-measurement";

test("Use Case 3: Measurement representations stay interchangeable", () => {
  type Px = Measurement<"px">;

  const cssWidth: Px = string.measurement(320, "px");
  const animationDelay = tuple.measurement(120, "ms");
  const payloadSize = object.measurement(4, "kB");

  expect(value(cssWidth)).toBe(320);
  expect(unit(cssWidth)).toBe("px");

  expect(value(animationDelay)).toBe(120);
  expect(unit(animationDelay)).toBe("ms");

  expect(value(payloadSize)).toBe(4);
  expect(unit(payloadSize)).toBe("kB");

  expect(measurement(cssWidth, 640)).toBe("640px");
  expect(measurement(animationDelay, 240)).toEqual([240, "ms"]);

  const largerPayload = measurement(payloadSize, 8);

  expect(value(largerPayload)).toBe(8);
  expect(unit(largerPayload)).toBe("kB");
});
