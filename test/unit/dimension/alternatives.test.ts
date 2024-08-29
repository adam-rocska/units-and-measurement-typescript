import {alternativeGet, propertyDescriptor, propertyDescriptors} from "!src/dimension/alternatives";
import {type Conversions} from "!src/dimension/conversion";

/// MARK: Getter tests

describe("alternativeGet", () => {
  const units = ["m", "ft"] as const;
  type Units = typeof units[number];
  const conversions: Conversions<Units> = {
    m: [x => x, x => x],
    ft: [x => x / 3.28084, x => x * 3.28084],
  };

  it("should return a function", () => {
    const unit = "ft";
    const result = alternativeGet(conversions, unit);
    expect(typeof result).toBe("function");
  });

  it("should return a function that returns a Measurement", () => {
    const unit = "ft";
    const result = alternativeGet(conversions, unit).call({unit: "m", value: 0});
    expect(result).toHaveProperty("unit", unit);
    expect(result).toHaveProperty("value", 0);
  });

  it("should return a function that returns a Measurement with the same value if the unit is the same", () => {
    const unit = "ft";
    const value = 1;
    const result = alternativeGet(conversions, unit).call({unit, value});
    expect(result).toHaveProperty("unit", unit);
    expect(result).toHaveProperty("value", value);
  });
  it("should return a function that returns a Measurement with the converted value if the unit is different", () => {
    const unit = "ft";
    const value = 1;
    const result = alternativeGet(conversions, "m").call({unit, value});
    expect(result).toHaveProperty("unit", "m");
    expect(result.value).toBeCloseTo(0.3048);
  });
});

/// MARK: Descriptor Tests

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

/// MARK: Descriptors Tests

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