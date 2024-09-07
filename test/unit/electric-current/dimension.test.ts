test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "MA": [jest.fn(), jest.fn()],
    "kA": [jest.fn(), jest.fn()],
    "A": [jest.fn(), jest.fn()],
    "mA": [jest.fn(), jest.fn()],
    "µA": [jest.fn(), jest.fn()]
  };

  const mockElectricCurrent = {
    "MA": jest.fn(),
    "kA": jest.fn(),
    "A": jest.fn(),
    "mA": jest.fn(),
    "µA": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["MA"])
    .mockReturnValueOnce(conversions["kA"])
    .mockReturnValueOnce(conversions["A"])
    .mockReturnValueOnce(conversions["mA"])
    .mockReturnValueOnce(conversions["µA"]);


  dimension.dimension.mockReturnValueOnce(mockElectricCurrent);

  const electricCurrentDimension = require('!src/electric-current/dimension');
  expect(electricCurrentDimension.electricCurrent).toEqual(mockElectricCurrent);
  expect(electricCurrentDimension.megaamperes).toBe(mockElectricCurrent["MA"]);
  expect(electricCurrentDimension.kiloamperes).toBe(mockElectricCurrent["kA"]);
  expect(electricCurrentDimension.amperes).toBe(mockElectricCurrent["A"]);
  expect(electricCurrentDimension.milliamperes).toBe(mockElectricCurrent["mA"]);
  expect(electricCurrentDimension.microamperes).toBe(mockElectricCurrent["µA"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.000001);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
