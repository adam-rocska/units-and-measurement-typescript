import {unit} from "!src";

describe("unit", () => {
  it("should return the unit of a string measurement.", () => {
    expect(unit("1m")).toBe("m");
  });

  it("should return the unit of a tuple measurement.", () => {
    expect(unit([1, "m"])).toBe("m");
  });

  it("should return the unit of an object measurement.", () => {
    expect(unit({value: 1, unit: "m"} as any)).toBe("m");
  });

  it("should return the unit of a dimension measurement.", () => {
    const v = 1;
    const u = "m";
    expect(unit({value: v, unit: u, [u]: v} as any)).toBe("m");
  });

});