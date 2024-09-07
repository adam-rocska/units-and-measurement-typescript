import {centimeters, inches} from "@adam-rocska/units-and-measurement/length";
import {toFixed} from "@adam-rocska/units-and-measurement";
import {areEqual} from "@adam-rocska/units-and-measurement/operations";

test("Use Case 2: Operations with existing dimensions", () => {
  const paperWidth = inches(5.5);
  const paperHeight = inches(11);

  expect(
    areEqual(toFixed(paperWidth.cm, 2), centimeters(13.97))
  )
    .toBeTruthy();

  expect(
    areEqual(toFixed(paperHeight.cm, 2), centimeters(27.94))
  )
    .toBeTruthy();
});