import {type Conversions} from "!src/dimension/conversion";
import {DimensionProxyHandler} from "!src/dimension/utilities/dimension-proxy-handler";
import {CommonProxyHandler} from "!src/dimension/utilities/common-proxy-handler";

describe("DimensionProxyHandler", () => {
  const stubUnits = ["m", "ft", "in"] as const;
  type StubUnits = typeof stubUnits[number];
  const stubConversions: Conversions<StubUnits> = {
    m: [jest.fn(), jest.fn()],
    ft: [jest.fn(), jest.fn()],
    in: [jest.fn(), jest.fn()],
  };

  afterEach(() => {
    for (const [fn1, fn2] of Object.values(stubConversions)) {
      expect(fn1).not.toHaveBeenCalled();
      expect(fn2).not.toHaveBeenCalled;
    }
    jest.clearAllMocks();
  });

  /// This test is important because there is no fucking
  /// way I will duplicate the tests from the other unit
  /// and since the hipster kommunity of TS world loves this
  /// shit technique of testing vs. the old school class
  /// based one, there is no better way to solve such
  /// testing problems. And no, there is no way I'll dump my
  /// code full with boilerplates. The language implies
  /// enough already.
  it("should extend CommonProxyHandler", () => {
    const handler = new DimensionProxyHandler(
      stubConversions,
      jest.fn()
    );
    expect(handler).toBeInstanceOf(CommonProxyHandler);
  });

  describe("#get", () => {
    it("should return the target's value if it has one stored under the inquired key.", () => {
      const handler = new DimensionProxyHandler(
        stubConversions,
        jest.fn()
      );
      const stub = {};
      const target = {stub};
      const result = handler.get(target as any, "stub");
      expect(result).toBe(stub);
    });

    it("should return undefined if the inquired key is not a unit and doesn't exist on the target.", () => {
      const handler = new DimensionProxyHandler(
        stubConversions,
        jest.fn()
      );
      const result = handler.get({} as any, "stub");
      expect(result).toBeUndefined();
    });

    it("should return a measurement factory function if the key is a unit.", () => {
      const createStubMeasurement = jest.fn();
      const handler = new DimensionProxyHandler(
        stubConversions,
        createStubMeasurement
      );
      const result = handler.get({} as any, "m");
      expect(result).toBeInstanceOf(Function);

      const stubMeasurement = {};
      createStubMeasurement.mockReturnValue(stubMeasurement);
      const testMeasurement = handler.get({} as any, "ft")(123);
      expect(createStubMeasurement).toHaveBeenCalledWith(stubConversions, 123, "ft");
      expect(testMeasurement).toBe(stubMeasurement);
    });
  });

});