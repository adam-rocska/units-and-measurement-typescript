describe("arithmetics", () => {
  const arithmeticOperation = jest.fn();
  jest.mock("!src/operations/arithmetic-operation", () => ({arithmeticOperation}));
  let {add, subtract, multiply, divide, power, root, logarithm} = require("!src/operations/arithmetics");

  beforeEach(() => {
    arithmeticOperation.mockClear();
    add = require("!src/operations/arithmetics").add;
    subtract = require("!src/operations/arithmetics").subtract;
    multiply = require("!src/operations/arithmetics").multiply;
    divide = require("!src/operations/arithmetics").divide;
    power = require("!src/operations/arithmetics").power;
    root = require("!src/operations/arithmetics").root;
    logarithm = require("!src/operations/arithmetics").logarithm;
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
    it("should call arithmeticOperation with the multiplication operation.", () => {
      const expected = {} as any;
      arithmeticOperation.mockReturnValue(expected);
      const actual = multiply("5px", "10px");
      expect(arithmeticOperation).toHaveBeenCalledWith(expect.any(Function), "5px", "10px");
      expect(actual).toBe(expected);
    });

    it("should call arithmeticOperation with the multiplication operation.", () => {
      const expected = {} as any;
      arithmeticOperation.mockReturnValue(expected);
      multiply("5px");
      arithmeticOperation.mock.calls.forEach(([reducer]) => {
        expect(reducer(5, 10)).toBe(50);
      });
    });
  });

  describe("divide", () => {
    it("should call arithmeticOperation with the division operation.", () => {
      const expected = {} as any;
      arithmeticOperation.mockReturnValue(expected);
      const actual = divide("5px", "10px");
      expect(arithmeticOperation).toHaveBeenCalledWith(expect.any(Function), "5px", "10px");
      expect(actual).toBe(expected);
    });

    it("should call arithmeticOperation with the division operation.", () => {
      const expected = {} as any;
      arithmeticOperation.mockReturnValue(expected);
      divide("5px");
      arithmeticOperation.mock.calls.forEach(([reducer]) => {
        expect(reducer(5, 10)).toBe(0.5);
      });
    });
  });

  describe("power", () => {
    it("should call arithmeticOperation with the power operation.", () => {
      const expected = {} as any;
      arithmeticOperation.mockReturnValue(expected);
      const actual = power("5px", "10px");
      expect(arithmeticOperation).toHaveBeenCalledWith(expect.any(Function), "5px", "10px");
      expect(actual).toBe(expected);
    });

    it("should call arithmeticOperation with the power operation.", () => {
      const expected = {} as any;
      arithmeticOperation.mockReturnValue(expected);
      power("5px");
      arithmeticOperation.mock.calls.forEach(([reducer]) => {
        expect(reducer(5, 10)).toBe(9765625);
      });
    });
  });

  describe("root", () => {
    it("should call arithmeticOperation with the root operation.", () => {
      const expected = {} as any;
      arithmeticOperation.mockReturnValue(expected);
      const actual = root("5px", "10px");
      expect(arithmeticOperation).toHaveBeenCalledWith(expect.any(Function), "5px", "10px");
      expect(actual).toBe(expected);
    });

    it("should call arithmeticOperation with the root operation.", () => {
      const expected = {} as any;
      arithmeticOperation.mockReturnValue(expected);
      root("5px");
      arithmeticOperation.mock.calls.forEach(([reducer]) => {
        expect(reducer(5, 10)).toBeCloseTo(5 ** (1 / 10));
      });
    });
  });

  describe("logarithm", () => {
    it("should call arithmeticOperation with the logarithm operation.", () => {
      const expected = {} as any;
      arithmeticOperation.mockReturnValue(expected);
      const actual = logarithm("5px", "10px");
      expect(arithmeticOperation).toHaveBeenCalledWith(expect.any(Function), "5px", "10px");
      expect(actual).toBe(expected);
    });

    it("should call arithmeticOperation with the logarithm operation.", () => {
      const expected = {} as any;
      arithmeticOperation.mockReturnValue(expected);
      logarithm("5px");
      arithmeticOperation.mock.calls.forEach(([reducer]) => {
        expect(reducer(5, 10)).toBeCloseTo(0.6989700043360189);
      });
    });
  });
});