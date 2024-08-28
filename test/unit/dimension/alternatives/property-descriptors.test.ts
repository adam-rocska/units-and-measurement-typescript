import {propertyDescriptors} from "!src/dimension/alternatives/property-descriptors";
import {type Conversions} from "!src/dimension/conversion";

describe("propertyDescriptors", () => {
  it("should return an object with property descriptors", () => {
    const conversions: Conversions<"m" | "cm" | "ft"> = {
      m: [x => x, x => x],
      cm: [x => x * 100, x => x / 100],
      ft: [x => x * 3.28084, x => x / 3.28084],
    };
    const result = propertyDescriptors(conversions);
    expect(result).toHaveProperty("m");
    expect(result).toHaveProperty("cm");
    expect(result).toHaveProperty("ft");
    expect(result.m).toHaveProperty("enumerable", true);
    expect(typeof result.m.get).toBe("function");
    expect(result.cm).toHaveProperty("enumerable", true);
    expect(typeof result.cm.get).toBe("function");
    expect(result.ft).toHaveProperty("enumerable", true);
    expect(typeof result.ft.get).toBe("function");
  });
});