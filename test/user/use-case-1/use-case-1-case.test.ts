import {add} from "@adam-rocska/units-and-measurement/operations";

test("1. Arithmetics", () => {
  expect(add("2px", "50px", "2px")).toEqual("54px");
});