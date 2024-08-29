import {unit} from "!src";

describe("unit", () => {
  it("should return the unit of a string measurement.", () => {
    expect(unit("1m")).toBe("m");
  });

  it("should return the unit of a tuple measurement.", () => {
    expect(unit([1, "m"])).toBe("m");
  });

  it("should return the unit of an object measurement.", () => {
    expect(unit({value: 1, unit: "m"})).toBe("m");
  });

  it("should return the unit of a dimension measurement.", () => {
    const v = 1;
    const u = "m";
    expect(unit({value: v, unit: u, [u]: v})).toBe("m");
  });

  it("should throw an error for a non-measurement.", () => {
    expect(() => unit(1 as any)).toThrow("Failed to resolve the unit of the measurement.");
  });
});