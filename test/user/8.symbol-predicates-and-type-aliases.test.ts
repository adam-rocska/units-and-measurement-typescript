import {expect, test} from "vitest";
import {
  isLengthSymbol,
  length,
  lengthSymbols,
  type Length,
  type LengthSymbol,
} from "@adam-rocska/units-and-measurement/length";

test("Use Case 8: Symbol predicates protect dynamic unit input", () => {
  function readLength(value: number, candidate: string): Length | undefined {
    if (!isLengthSymbol(candidate)) return undefined;

    const safeUnit: LengthSymbol = candidate;
    return length[safeUnit](value);
  }

  expect(lengthSymbols).toContain("ft");
  expect(readLength(1, "parsec")).toBeUndefined();

  const parsed = readLength(12, "ft");

  if (parsed === undefined) {
    throw new Error("Expected feet to be a supported length symbol.");
  }

  expect(parsed.unit).toBe("ft");
  expect(parsed.in.value).toBeCloseTo(144);
  expect(parsed.yd.value).toBeCloseTo(4);
});
