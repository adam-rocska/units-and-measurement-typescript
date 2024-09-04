describe("arithmeticOperation", () => {
  const mock = {
    toCommonUnit: jest.fn(),
    measurement: jest.fn(),
    reducer: jest.fn()
  };
  jest.mock("!src/operations/to-common-unit", () => mock);
  jest.mock("!src/measurement", () => ({measurement: mock.measurement}));

  let {arithmeticOperation} = require("!src/operations/arithmetic-operation");

  beforeEach(() => {
    Object.values(mock).forEach(mock => {
      mock.mockClear();
    });

    arithmeticOperation = require("!src/operations/arithmetic-operation").arithmeticOperation;
  });

  it("should return undefined when no measurements are provided.", () => {
    expect(arithmeticOperation(mock.reducer)).toBeUndefined();
  });

  it("should return the provided measurement when only one is given, but of a different instance.", () => {
    const input = "5px";
    const result = {} as any;
    mock.measurement.mockReturnValue(result);
    expect(arithmeticOperation(mock.reducer, input)).toBe(result);
    expect(mock.measurement).toHaveBeenCalledWith(input, 5);
  });

  it("should return undefined when the measurements cannot be converted to a common unit.", () => {
    mock.toCommonUnit.mockReturnValue(undefined);
    expect(arithmeticOperation(mock.reducer, "5px", "10em")).toBeUndefined();
    expect(mock.toCommonUnit).toHaveBeenCalledWith("5px", "10em");
  });

  it("should return the result of the operation when the measurements can be converted to a common unit.", () => {
    const commonUnit = ["5px", "10px"];
    const result = {} as any;
    mock.toCommonUnit.mockReturnValue(commonUnit);
    mock.reducer.mockReturnValue(15);
    mock.measurement.mockReturnValue(result);
    expect(arithmeticOperation(mock.reducer, "5px", "10px")).toBe(result);
    expect(mock.toCommonUnit).toHaveBeenCalledWith("5px", "10px");
    expect(mock.reducer).toHaveBeenCalledWith(5, 10);
    expect(mock.measurement).toHaveBeenCalledWith("5px", 15);
  });

  it("should return undefined if common unit conversion would yield an empty list.", () => {
    const commonUnit = [] as any;
    mock.toCommonUnit.mockReturnValue(commonUnit);
    expect(arithmeticOperation(mock.reducer, "5px", "10px")).toBeUndefined();
    expect(mock.toCommonUnit).toHaveBeenCalledWith("5px", "10px");
  });

});
