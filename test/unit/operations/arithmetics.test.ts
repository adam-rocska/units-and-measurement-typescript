import {beforeEach, describe, expect, it, vi} from "vitest";
import {toPrecision} from "!src/to-precision";
import {add, subtract, multiply, divide, power, root, logarithm} from "!src/operations/arithmetics";

const {arithmeticOperation} = vi.hoisted(() => ({
  arithmeticOperation: vi.fn()
}));
vi.mock("!src/operations/arithmetic-operation", () => ({arithmeticOperation}));

describe("arithmetics", () => {
  beforeEach(() => {
    arithmeticOperation.mockClear();
  });

  describe("add", () => {
    it("should call arithmeticOperation with the addition operation.", () => {
      const expected = {} as any;
      arithmeticOperation.mockReturnValue(expected);
      const actual = add("5px", "10px");
      expect(arithmeticOperation).toHaveBeenCalledWith(expect.any(Function), "5px", "10px");
      expect(actual).toBe(expected);
    });

    it("should call arithmeticOperation with the addition operation.", () => {
      const expected = {} as any;
      arithmeticOperation.mockReturnValue(expected);
      add("5px");
      arithmeticOperation.mock.calls.forEach(([reducer]) => {
        expect(reducer(5, 10)).toBe(15);
      });
    });
  });

  describe("subtract", () => {
    it("should call arithmeticOperation with the subtraction operation.", () => {
      const expected = {} as any;
      arithmeticOperation.mockReturnValue(expected);
      const actual = subtract("5px", "10px");
      expect(arithmeticOperation).toHaveBeenCalledWith(expect.any(Function), "5px", "10px");
      expect(actual).toBe(expected);
    });

    it("should call arithmeticOperation with the subtraction operation.", () => {
      const expected = {} as any;
      arithmeticOperation.mockReturnValue(expected);
      subtract("5px");
      arithmeticOperation.mock.calls.forEach(([reducer]) => {
        expect(reducer(5, 10)).toBe(-5);
      });
    });
  });

  describe("multiply", () => {
    it("should multiply the measurement by the multiplier.", () => {
      expect(multiply("5px", 3)).toEqual("15px");
    });
  });

  describe("divide", () => {
    it("should divide the measurement by the divisor.", () => {
      expect(divide("15px", 3)).toEqual("5px");
    });
  });

  describe("power", () => {
    it("should raise the measurement to the exponent.", () => {
      expect(power("5px", 3)).toEqual("125px");
    });
  });

  describe("root", () => {
    it("should take the root of the measurement.", () => {
      expect(toPrecision(root("125px", 3), 1)).toEqual("5px");
    });

    describe("logarithm", () => {
      it("should take the logarithm of the measurement.", () => {
        expect(toPrecision(logarithm("125px", 5), 1)).toEqual("3px");
      });
    });
  });
});