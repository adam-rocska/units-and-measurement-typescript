import {describe, expect, it} from "vitest";
import {value} from "!src";

describe("value", () => {
  it("should return the value of a string measurement.", () => {
    expect(value("1m")).toBe(1);
  });

  it("should return the value of a tuple measurement.", () => {
    expect(value([1, "m"])).toBe(1);
  });

  it("should return the value of an object measurement.", () => {
    expect(value({value: 1, unit: "m"} as any)).toBe(1);
  });

  it("should return the value of a dimension measurement.", () => {
    const v = 1;
    const u = "m";
    expect(value({value: v, unit: u, [u]: v} as any)).toBe(1);
  });

});