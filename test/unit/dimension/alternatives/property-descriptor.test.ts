import {propertyDescriptor} from "!src/dimension/alternatives/property-descriptor";
import {type Conversions} from "!src/dimension/conversion";

describe("propertyDescriptor", () => {
  it("should return a property descriptor", () => {
    const conversions: Conversions<"m"> = {
      m: [x => x, x => x],
    };
    const unit = "m";
    const result = propertyDescriptor(conversions, unit);
    expect(result).toHaveProperty("enumerable", true);
    expect(typeof result.get).toBe("function");
  });
});