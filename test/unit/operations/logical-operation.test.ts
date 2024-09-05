describe("logicalOperation", () => {
  const toCommonUnit = jest.fn();
  const operation = jest.fn();

  jest.mock("!src/operations/to-common-unit", () => ({toCommonUnit}));

  let {logicalOperation} = require("!src/operations/logical-operation");

  beforeEach(() => {
    toCommonUnit.mockClear();
    operation.mockClear();
    logicalOperation = require("!src/operations/logical-operation").logicalOperation;
  });

  it("should return undefined when less than two measurements are provided.", () => {
    expect(logicalOperation(operation)).toBeUndefined();
    expect(logicalOperation(operation, "5px")).toBeUndefined();
  });

  it("should return undefined when the measurements cannot be converted to a common unit.", () => {
    toCommonUnit.mockReturnValue(undefined);
    expect(logicalOperation(operation, "5px", "10em")).toBeUndefined();
    expect(toCommonUnit).toHaveBeenCalledWith("5px", "10em");
  });

  it("should return false when the operation fails.", () => {
    const commonUnit = ["5px", "10px"];
    toCommonUnit.mockReturnValue(commonUnit);
    operation.mockReturnValue(false);
    expect(logicalOperation(operation, "5px", "10px")).toBe(false);
    expect(toCommonUnit).toHaveBeenCalledWith("5px", "10px");
    expect(operation).toHaveBeenCalledWith("5px", "10px");
  });

  it("should return true when the operation passes.", () => {
    const commonUnit = ["5px", "10px"];
    toCommonUnit.mockReturnValue(commonUnit);
    operation.mockReturnValue(true);
    expect(logicalOperation(operation, "5px", "10px")).toBe(true);
    expect(toCommonUnit).toHaveBeenCalledWith("5px", "10px");
    expect(operation).toHaveBeenCalledWith("5px", "10px");
  });

  it("should return undefined if common unit conversion would yield an empty list.", () => {
    const commonUnit = [] as any;
    toCommonUnit.mockReturnValue(commonUnit);
    expect(logicalOperation(operation, "5px", "10px")).toBeUndefined();
    expect(toCommonUnit).toHaveBeenCalledWith("5px", "10px");
  });

});