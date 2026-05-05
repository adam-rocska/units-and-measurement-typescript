import {toFixed} from "!src/to-fixed";

const mocks = vi.hoisted(() => {
  const createAspectMock = () => ({
    isMeasurement: vi.fn(),
    toFixed: vi.fn()
  });
  return {
    string: createAspectMock(),
    tuple: createAspectMock(),
    object: createAspectMock(),
    dimension: createAspectMock()
  };
});
vi.mock("!src/string", () => mocks.string);
vi.mock("!src/tuple", () => mocks.tuple);
vi.mock("!src/object", () => mocks.object);
vi.mock("!src/dimension", () => mocks.dimension);

describe("toFixed", () => {
  /// MARK: - Mocks
  const stubInput = {} as any;
  const stubOutput = {} as any;
  beforeEach(() => {
    Object.values(mocks).forEach(mock => {
      mock.isMeasurement.mockClear();
      mock.toFixed.mockClear();
    });
  });

  /// MARK: - Tests

  it("should route to dimension if the measurement is a dimension.", () => {
    mocks.dimension.isMeasurement.mockReturnValue(true);
    mocks.dimension.toFixed.mockReturnValue(stubOutput);
    mocks.string.isMeasurement.mockReturnValue(false);
    mocks.tuple.isMeasurement.mockReturnValue(false);
    mocks.object.isMeasurement.mockReturnValue;

    const result = toFixed(stubInput, 2);

    expect(result).toBe(stubOutput);
    expect(mocks.dimension.isMeasurement).toHaveBeenCalledWith(stubInput);
    expect(mocks.dimension.toFixed).toHaveBeenCalledWith(stubInput, 2);

    expect(mocks.string.isMeasurement).not.toHaveBeenCalled();
    expect(mocks.tuple.isMeasurement).not.toHaveBeenCalled();
    expect(mocks.object.isMeasurement).not.toHaveBeenCalled();

    expect(mocks.string.toFixed).not.toHaveBeenCalled();
    expect(mocks.tuple.toFixed).not.toHaveBeenCalled();
    expect(mocks.object.toFixed).not.toHaveBeenCalled();

    expect(mocks.dimension.toFixed).toHaveBeenCalledTimes(1);
  });

  it("should route to string if the measurement is a string.", () => {
    mocks.string.isMeasurement.mockReturnValue(true);
    mocks.string.toFixed.mockReturnValue(stubOutput);
    mocks.dimension.isMeasurement.mockReturnValue(false);
    mocks.tuple.isMeasurement.mockReturnValue(false);
    mocks.object.isMeasurement.mockReturnValue;

    const result = toFixed(stubInput, 2);

    expect(result).toBe(stubOutput);
    expect(mocks.string.isMeasurement).toHaveBeenCalledWith(stubInput);
    expect(mocks.string.toFixed).toHaveBeenCalledWith(stubInput, 2);

    expect(mocks.dimension.isMeasurement).toHaveBeenCalled();
    expect(mocks.tuple.isMeasurement).not.toHaveBeenCalled();
    expect(mocks.object.isMeasurement).not.toHaveBeenCalled();

    expect(mocks.dimension.toFixed).not.toHaveBeenCalled();
    expect(mocks.tuple.toFixed).not.toHaveBeenCalled();
    expect(mocks.object.toFixed).not.toHaveBeenCalled();

    expect(mocks.string.toFixed).toHaveBeenCalledTimes(1);
  });

  it("should route to tuple if the measurement is a tuple.", () => {
    mocks.tuple.isMeasurement.mockReturnValue(true);
    mocks.tuple.toFixed.mockReturnValue(stubOutput);
    mocks.string.isMeasurement.mockReturnValue(false);
    mocks.dimension.isMeasurement.mockReturnValue(false);
    mocks.object.isMeasurement.mockReturnValue;

    const result = toFixed(stubInput, 2);

    expect(result).toBe(stubOutput);
    expect(mocks.tuple.isMeasurement).toHaveBeenCalledWith(stubInput);
    expect(mocks.tuple.toFixed).toHaveBeenCalledWith(stubInput, 2);

    expect(mocks.dimension.isMeasurement).toHaveBeenCalled();
    expect(mocks.string.isMeasurement).toHaveBeenCalled();
    expect(mocks.object.isMeasurement).not.toHaveBeenCalled();

    expect(mocks.dimension.toFixed).not.toHaveBeenCalled();
    expect(mocks.string.toFixed).not.toHaveBeenCalled();
    expect(mocks.object.toFixed).not.toHaveBeenCalled();

    expect(mocks.tuple.toFixed).toHaveBeenCalledTimes(1);
  });

  it("should route to object if the measurement is an object.", () => {
    mocks.object.isMeasurement.mockReturnValue(true);
    mocks.object.toFixed.mockReturnValue(stubOutput);
    mocks.string.isMeasurement.mockReturnValue(false);
    mocks.tuple.isMeasurement.mockReturnValue(false);
    mocks.dimension.isMeasurement.mockReturnValue(false);

    const result = toFixed(stubInput, 2);

    expect(result).toBe(stubOutput);
    expect(mocks.object.isMeasurement).not.toHaveBeenCalled();
    expect(mocks.object.toFixed).toHaveBeenCalledWith(stubInput, 2);

    expect(mocks.dimension.isMeasurement).toHaveBeenCalled();
    expect(mocks.string.isMeasurement).toHaveBeenCalled();
    expect(mocks.tuple.isMeasurement).toHaveBeenCalled();

    expect(mocks.dimension.toFixed).not.toHaveBeenCalled();
    expect(mocks.string.toFixed).not.toHaveBeenCalled();
    expect(mocks.tuple.toFixed).not.toHaveBeenCalled();

    expect(mocks.object.toFixed).toHaveBeenCalledTimes(1);
  });
});