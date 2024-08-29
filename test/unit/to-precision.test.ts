describe("toPrecision", () => {
  /// MARK: - Mocks
  const createAspectMock = () => ({
    isMeasurement: jest.fn(),
    toPrecision: jest.fn()
  });
  const mocks = {
    string: createAspectMock(),
    tuple: createAspectMock(),
    object: createAspectMock(),
    dimension: createAspectMock()
  };
  jest.mock("!src/string", () => mocks.string);
  jest.mock("!src/tuple", () => mocks.tuple);
  jest.mock("!src/object", () => mocks.object);
  jest.mock("!src/dimension", () => mocks.dimension);

  let {toPrecision} = require("!src/to-precision");
  const stubInput = {} as any;
  const stubOutput = {} as any;
  beforeEach(() => {
    Object.values(mocks).forEach(mock => {
      mock.isMeasurement.mockClear();
      mock.toPrecision.mockClear();
    });
    toPrecision = require("!src/to-precision").toPrecision;
  });

  /// MARK: - Tests

  it("should route to dimension if the measurement is a dimension.", () => {
    mocks.dimension.isMeasurement.mockReturnValue(true);
    mocks.dimension.toPrecision.mockReturnValue(stubOutput);
    mocks.string.isMeasurement.mockReturnValue(false);
    mocks.tuple.isMeasurement.mockReturnValue(false);
    mocks.object.isMeasurement.mockReturnValue;

    const result = toPrecision(stubInput, 2);

    expect(result).toBe(stubOutput);
    expect(mocks.dimension.isMeasurement).toHaveBeenCalledWith(stubInput);
    expect(mocks.dimension.toPrecision).toHaveBeenCalledWith(stubInput, 2);

    expect(mocks.string.isMeasurement).not.toHaveBeenCalled();
    expect(mocks.tuple.isMeasurement).not.toHaveBeenCalled();
    expect(mocks.object.isMeasurement).not.toHaveBeenCalled();

    expect(mocks.string.toPrecision).not.toHaveBeenCalled();
    expect(mocks.tuple.toPrecision).not.toHaveBeenCalled();
    expect(mocks.object.toPrecision).not.toHaveBeenCalled();

    expect(mocks.dimension.toPrecision).toHaveBeenCalledTimes(1);
  });

  it("should route to string if the measurement is a string.", () => {
    mocks.string.isMeasurement.mockReturnValue(true);
    mocks.string.toPrecision.mockReturnValue(stubOutput);
    mocks.dimension.isMeasurement.mockReturnValue(false);
    mocks.tuple.isMeasurement.mockReturnValue(false);
    mocks.object.isMeasurement.mockReturnValue;

    const result = toPrecision(stubInput, 2);

    expect(result).toBe(stubOutput);
    expect(mocks.string.isMeasurement).toHaveBeenCalledWith(stubInput);
    expect(mocks.string.toPrecision).toHaveBeenCalledWith(stubInput, 2);

    expect(mocks.dimension.isMeasurement).toHaveBeenCalled();
    expect(mocks.tuple.isMeasurement).not.toHaveBeenCalled();
    expect(mocks.object.isMeasurement).not.toHaveBeenCalled();

    expect(mocks.dimension.toPrecision).not.toHaveBeenCalled();
    expect(mocks.tuple.toPrecision).not.toHaveBeenCalled();
    expect(mocks.object.toPrecision).not.toHaveBeenCalled();

    expect(mocks.string.toPrecision).toHaveBeenCalledTimes(1);
  });

  it("should route to tuple if the measurement is a tuple.", () => {
    mocks.tuple.isMeasurement.mockReturnValue(true);
    mocks.tuple.toPrecision.mockReturnValue(stubOutput);
    mocks.string.isMeasurement.mockReturnValue(false);
    mocks.dimension.isMeasurement.mockReturnValue(false);
    mocks.object.isMeasurement.mockReturnValue;

    const result = toPrecision(stubInput, 2);

    expect(result).toBe(stubOutput);
    expect(mocks.tuple.isMeasurement).toHaveBeenCalledWith(stubInput);
    expect(mocks.tuple.toPrecision).toHaveBeenCalledWith(stubInput, 2);

    expect(mocks.dimension.isMeasurement).toHaveBeenCalled();
    expect(mocks.string.isMeasurement).toHaveBeenCalled();
    expect(mocks.object.isMeasurement).not.toHaveBeenCalled();

    expect(mocks.dimension.toPrecision).not.toHaveBeenCalled();
    expect(mocks.string.toPrecision).not.toHaveBeenCalled();
    expect(mocks.object.toPrecision).not.toHaveBeenCalled();

    expect(mocks.tuple.toPrecision).toHaveBeenCalledTimes(1);
  });

  it("should route to object if the measurement is an object.", () => {
    mocks.object.isMeasurement.mockReturnValue(true);
    mocks.object.toPrecision.mockReturnValue(stubOutput);
    mocks.string.isMeasurement.mockReturnValue(false);
    mocks.tuple.isMeasurement.mockReturnValue(false);
    mocks.dimension.isMeasurement.mockReturnValue(false);

    const result = toPrecision(stubInput, 2);

    expect(result).toBe(stubOutput);
    expect(mocks.object.isMeasurement).not.toHaveBeenCalled();
    expect(mocks.object.toPrecision).toHaveBeenCalledWith(stubInput, 2);

    expect(mocks.dimension.isMeasurement).toHaveBeenCalled();
    expect(mocks.string.isMeasurement).toHaveBeenCalled();
    expect(mocks.tuple.isMeasurement).toHaveBeenCalled();

    expect(mocks.dimension.toPrecision).not.toHaveBeenCalled();
    expect(mocks.string.toPrecision).not.toHaveBeenCalled();
    expect(mocks.tuple.toPrecision).not.toHaveBeenCalled();

    expect(mocks.object.toPrecision).toHaveBeenCalledTimes(1);
  });
});