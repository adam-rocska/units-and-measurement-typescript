import {type Conversions} from "!src/dimension/conversion";
import {MeasurementProxyHandler} from "!src/dimension/utilities/measurement-proxy-handler";
import {CommonProxyHandler} from "!src/dimension/utilities/common-proxy-handler";

describe("DimensionProxyHandler", () => {
  const stubUnits = ["m", "ft", "in"] as const;
  type StubUnits = typeof stubUnits[number];
  const stubConversions: Conversions<StubUnits> = {
    m: [jest.fn(), jest.fn()],
    ft: [jest.fn(), jest.fn()],
    in: [jest.fn(), jest.fn()],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  function stubConversion(
    unit: StubUnits,
    direction: "toBase" | "fromBase"
  ): jest.Mock {
    return stubConversions[unit][direction === "toBase" ? 0 : 1] as jest.Mock;
  }

  function expectNoConversionCalled() {
    for (const [fn1, fn2] of Object.values(stubConversions)) {
      expect(fn1).not.toHaveBeenCalled();
      expect(fn2).not.toHaveBeenCalled;
    }
  }

  /// This test is important because there is no fucking
  /// way I will duplicate the tests from the other unit
  /// and since the hipster kommunity of TS world loves this
  /// shit technique of testing vs. the old school class
  /// based one, there is no better way to solve such
  /// testing problems. And no, there is no way I'll dump my
  /// code full with boilerplates. The language implies
  /// enough already.
  it("should extend CommonProxyHandler", () => {
    const handler = new MeasurementProxyHandler(stubConversions,);
    expect(handler).toBeInstanceOf(CommonProxyHandler);
    expectNoConversionCalled();
  });

  describe("#get", () => {
    describe("#get", () => {
      it("should return the value of the measurement property", () => {
        const measurement = {value: 10, unit: "m"};
        const handler = new MeasurementProxyHandler(stubConversions);
        const result = handler.get(measurement as any, "value");
        expect(result).toBe(10);
        expectNoConversionCalled();
      });

      it("should return undefined for properties that don't exist on the target and are not units.", () => {
        const measurement = {value: 10, unit: "m"};
        const handler = new MeasurementProxyHandler(stubConversions);
        const result = handler.get(measurement as any, "nonExistentProperty");
        expect(result).toBeUndefined();
        expectNoConversionCalled();
      });

      it("should return the value without any conversions if the inquired unit is the same as the target's unit", () => {
        const measurement = {value: 10, unit: "m"};
        const handler = new MeasurementProxyHandler(stubConversions);
        const result = handler.get(measurement as any, "m");
        expect(result).toBe(10);
        expectNoConversionCalled();
      });

      it("should convert the value to the inquired unit if it is different from the target's unit", () => {
        const measurement = {value: 10, unit: "m"};
        const handler = new MeasurementProxyHandler(stubConversions);

        stubConversion("m", "toBase").mockReturnValue(100);
        stubConversion("ft", "fromBase").mockReturnValue(123);

        const result = handler.get(measurement as any, "ft");
        expect(stubConversion("m", "toBase")).toHaveBeenCalledWith(10);
        expect(stubConversion("ft", "fromBase")).toHaveBeenCalledWith(100);

        expect(result).toBe(123);
      });
    });

    describe("#set", () => {
      it("should update the value of the measurement property", () => {
        const measurement = {value: 10, unit: "m"};
        const handler = new MeasurementProxyHandler(stubConversions);
        const result = handler.set(measurement as any, "value", 20);
        expect(result).toBe(true);
        expect(measurement.value).toBe(20);
        expectNoConversionCalled();
      });

      it("should return false if the unit value is not a number", () => {
        const measurement = {value: 10, unit: "m"};
        const handler = new MeasurementProxyHandler(stubConversions);
        const result = handler.set(measurement as any, "m", "not a number");
        expect(result).toBe(false);
        expect(measurement.value).toBe(10);
        expectNoConversionCalled();
      });

      it("should return false if the unit is not a unit", () => {
        const measurement = {value: 10, unit: "m"};
        const handler = new MeasurementProxyHandler(stubConversions);
        const result = handler.set(measurement as any, "nonExistentUnit", 20);
        expect(result).toBe(false);
        expect(measurement.value).toBe(10);
        expectNoConversionCalled();
      });

      it("should return false if the unit is not in the conversions", () => {
        const measurement = {value: 10, unit: "m"};
        const handler = new MeasurementProxyHandler(stubConversions);
        const result = handler.set(measurement as any, "nonExistentUnit", 20);
        expect(result).toBe(false);
        expect(measurement.value).toBe(10);
        expectNoConversionCalled();
      });

      it("should update the value without any conversions if the unit is the same as the target's unit", () => {
        const measurement = {value: 10, unit: "m"};
        const handler = new MeasurementProxyHandler(stubConversions);
        const result = handler.set(measurement as any, "m", 20);
        expect(result).toBe(true);
        expect(measurement.value).toBe(20);
        expectNoConversionCalled();
      });

      it("should convert the value to the target's unit if it is different from the target's unit", () => {
        const measurement = {value: 10, unit: "m"};
        const handler = new MeasurementProxyHandler(stubConversions);

        stubConversion("ft", "toBase").mockReturnValue(100);
        stubConversion("m", "fromBase").mockReturnValue(123);

        const result = handler.set(measurement as any, "ft", 20);
        expect(stubConversion("ft", "toBase")).toHaveBeenCalledWith(20);
        expect(stubConversion("m", "fromBase")).toHaveBeenCalledWith(100);

        expect(result).toBe(true);
        expect(measurement.value).toBe(123);
      });
    });
  });

});