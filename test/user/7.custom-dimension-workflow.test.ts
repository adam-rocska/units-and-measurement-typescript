import {expect, test} from "vitest";
import {
  dimension as d,
  unit,
  value,
} from "@adam-rocska/units-and-measurement";
import {
  add,
  areEqual,
  greaterThan,
} from "@adam-rocska/units-and-measurement/operations";

test("Use Case 7: Custom dimensions behave like built-in dimensions", () => {
  type CurrencySymbol = "USD" | "cent";

  const currency = d.dimension<CurrencySymbol>({
    USD: d.linearConversion(1),
    cent: d.linearConversion(0.01),
  });

  const subtotal = currency.USD(19.99);
  const cardFee = currency.cent(25);
  const total = add(subtotal, cardFee);

  if (total === undefined) {
    throw new Error("Expected custom currency units to add.");
  }

  expect(value(total)).toBeCloseTo(20.24);
  expect(unit(total)).toBe("USD");
  expect(currency.cent(1234).USD.value).toBeCloseTo(12.34);
  expect(areEqual(currency.USD(1), currency.cent(100))).toBe(true);
  expect(greaterThan(total, currency.USD(20))).toBe(true);
});
