test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "MV": [jest.fn(), jest.fn()],
    "kV": [jest.fn(), jest.fn()],
    "V": [jest.fn(), jest.fn()],
    "mV": [jest.fn(), jest.fn()],
    "µV": [jest.fn(), jest.fn()]
  };

  const mockElectricPotentialDifference = {
    "MV": jest.fn(),
    "kV": jest.fn(),
    "V": jest.fn(),
    "mV": jest.fn(),
    "µV": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["MV"])
    .mockReturnValueOnce(conversions["kV"])
    .mockReturnValueOnce(conversions["V"])
    .mockReturnValueOnce(conversions["mV"])
    .mockReturnValueOnce(conversions["µV"]);


  dimension.dimension.mockReturnValueOnce(mockElectricPotentialDifference);

  const electricPotentialDifferenceDimension = require('!src/electric-potential-difference/dimension');
  expect(electricPotentialDifferenceDimension.electricPotentialDifference).toEqual(mockElectricPotentialDifference);
  expect(electricPotentialDifferenceDimension.megavolts).toBe(mockElectricPotentialDifference["MV"]);
  expect(electricPotentialDifferenceDimension.kilovolts).toBe(mockElectricPotentialDifference["kV"]);
  expect(electricPotentialDifferenceDimension.volts).toBe(mockElectricPotentialDifference["V"]);
  expect(electricPotentialDifferenceDimension.millivolts).toBe(mockElectricPotentialDifference["mV"]);
  expect(electricPotentialDifferenceDimension.microvolts).toBe(mockElectricPotentialDifference["µV"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.000001);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
