import {Conversions} from "!src/dimension/conversion";
import {CommonProxyHandler} from "!src/dimension/utilities/common-proxy-handler";

describe("CommonProxyHandler", () => {
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
      expect(fn2).not.toHaveBeenCalled
    }
    jest.clearAllMocks();
  });

  describe("#has", () => {
    it("should return true if the target has the inquired property", () => {
      const handler = new CommonProxyHandler(stubConversions);
      expect(handler.has({foo: 123}, "foo")).toBe(true);
    });

    it("should return true if the property is a unit", () => {
      const handler = new CommonProxyHandler(stubConversions);
      expect(handler.has({}, "m")).toBe(true);
      expect(handler.has({}, "ft")).toBe(true);
      expect(handler.has({}, "in")).toBe(true);
    });

    it("should return false if the property is not a unit and doesn't exist on the target.", () => {
      const handler = new CommonProxyHandler(stubConversions);
      expect(handler.has({}, "foo")).toBe(false);
    });
  });

  describe("#ownKeys", () => {
    it("should return the units of the conversions", () => {
      const handler = new CommonProxyHandler(stubConversions);
      expect(handler.ownKeys({})).toEqual(stubUnits);
    });

    it("should return the keys of the target and the units of the conversions", () => {
      const handler = new CommonProxyHandler(stubConversions);
      expect(handler.ownKeys({foo: 123})).toEqual(["foo", ...stubUnits]);
    });
  });

  describe("#set", () => {
    it("should return false", () => {
      const handler = new CommonProxyHandler(stubConversions);
      expect(handler.set({}, "foo", 123, {})).toBe(false);
    });
  });

  describe("#deleteProperty", () => {
    it("should return false", () => {
      const handler = new CommonProxyHandler(stubConversions);
      expect(handler.deleteProperty({}, "foo")).toBe(false);
    });
  });

  describe("#setPrototypeOf", () => {
    it("should return false", () => {
      const handler = new CommonProxyHandler(stubConversions);
      expect(handler.setPrototypeOf({}, {})).toBe(false);
    });
  });

  describe("#getPrototypeOf", () => {
    it("should return null", () => {
      const handler = new CommonProxyHandler(stubConversions);
      expect(handler.getPrototypeOf()).toBe(null);
    });
  });
});