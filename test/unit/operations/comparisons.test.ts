describe("comparisons", () => {
  const logicalOperation = jest.fn();
  jest.mock("!src/operations/logical-operation", () => ({logicalOperation}));
  let {areEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual, notEqual} = require("!src/operations/comparisons");

  beforeEach(() => {
    logicalOperation.mockClear();
    areEqual = require("!src/operations/comparisons").areEqual;
    greaterThan = require("!src/operations/comparisons").greaterThan;
    greaterThanOrEqual = require("!src/operations/comparisons").greaterThanOrEqual;
    lessThan = require("!src/operations/comparisons").lessThan;
    lessThanOrEqual = require("!src/operations/comparisons").lessThanOrEqual;
    notEqual = require("!src/operations/comparisons").notEqual;
  });

  describe("areEqual", () => {
    it("should call logicalOperation with the equality operation.", () => {
      const expected = {} as any;
      logicalOperation.mockReturnValue(expected);
      const actual = areEqual("5px", "10px");
      expect(logicalOperation).toHaveBeenCalledWith(expect.any(Function), "5px", "10px");
      expect(actual).toBe(expected);
    });

    it("should call logicalOperation with the equality operation.", () => {
      const expected = {} as any;
      logicalOperation.mockReturnValue(expected);
      areEqual("5px");
      logicalOperation.mock.calls.forEach(([operation]) => {
        expect(operation("5px", "10px")).toBe(false);
      });
    });
  });

  describe("greaterThan", () => {
    it("should call logicalOperation with the greater than operation.", () => {
      const expected = {} as any;
      logicalOperation.mockReturnValue(expected);
      const actual = greaterThan("5px", "10px");
      expect(logicalOperation).toHaveBeenCalledWith(expect.any(Function), "5px", "10px");
      expect(actual).toBe(expected);
    });

    it("should call logicalOperation with the greater than operation.", () => {
      const expected = {} as any;
      logicalOperation.mockReturnValue(expected);
      greaterThan("5px");
      logicalOperation.mock.calls.forEach(([operation]) => {
        expect(operation("5px", "10px")).toBe(false);
      });
    });
  });

  describe("greaterThanOrEqual", () => {
    it("should call logicalOperation with the greater than or areEqual operation.", () => {
      const expected = {} as any;
      logicalOperation.mockReturnValue(expected);
      const actual = greaterThanOrEqual("5px", "10px");
      expect(logicalOperation).toHaveBeenCalledWith(expect.any(Function), "5px", "10px");
      expect(actual).toBe(expected);
    });

    it("should call logicalOperation with the greater than or areEqual operation.", () => {
      const expected = {} as any;
      logicalOperation.mockReturnValue(expected);
      greaterThanOrEqual("5px");
      logicalOperation.mock.calls.forEach(([operation]) => {
        expect(operation("5px", "10px")).toBe(false);
      });
    });
  });

  describe("lessThan", () => {
    it("should call logicalOperation with the less than operation.", () => {
      const expected = {} as any;
      logicalOperation.mockReturnValue(expected);
      const actual = lessThan("5px", "10px");
      expect(logicalOperation).toHaveBeenCalledWith(expect.any(Function), "5px", "10px");
      expect(actual).toBe(expected);
    });

    it("should call logicalOperation with the less than operation.", () => {
      const expected = {} as any;
      logicalOperation.mockReturnValue(expected);
      lessThan("5px");
      logicalOperation.mock.calls.forEach(([operation]) => {
        expect(operation("5px", "10px")).toBe(true);
      });
    });
  });

  describe("lessThanOrEqual", () => {
    it("should call logicalOperation with the less than or areEqual operation.", () => {
      const expected = {} as any;
      logicalOperation.mockReturnValue(expected);
      const actual = lessThanOrEqual("5px", "10px");
      expect(logicalOperation).toHaveBeenCalledWith(expect.any(Function), "5px", "10px");
      expect(actual).toBe(expected);
    });

    it("should call logicalOperation with the less than or areEqual operation.", () => {
      const expected = {} as any;
      logicalOperation.mockReturnValue(expected);
      lessThanOrEqual("5px");
      logicalOperation.mock.calls.forEach(([operation]) => {
        expect(operation("5px", "10px")).toBe(true);
      });
    });
  });

  describe("notEqual", () => {
    it("should call logicalOperation with the inequality operation.", () => {
      const expected = {} as any;
      logicalOperation.mockReturnValue(expected);
      const actual = notEqual("5px", "10px");
      expect(logicalOperation).toHaveBeenCalledWith(expect.any(Function), "5px", "10px");
      expect(actual).toBe(expected);
    });

    it("should call logicalOperation with the inequality operation.", () => {
      const expected = {} as any;
      logicalOperation.mockReturnValue(expected);
      notEqual("5px");
      logicalOperation.mock.calls.forEach(([operation]) => {
        expect(operation("5px", "10px")).toBe(true);
      });
    });
  });
});