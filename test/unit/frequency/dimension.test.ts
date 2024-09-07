test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "THz": [jest.fn(), jest.fn()],
    "GHz": [jest.fn(), jest.fn()],
    "MHz": [jest.fn(), jest.fn()],
    "kHz": [jest.fn(), jest.fn()],
    "Hz": [jest.fn(), jest.fn()],
    "mHz": [jest.fn(), jest.fn()],
    "µHz": [jest.fn(), jest.fn()],
    "nHz": [jest.fn(), jest.fn()]
  };

  const mockFrequency = {
    "THz": jest.fn(),
    "GHz": jest.fn(),
    "MHz": jest.fn(),
    "kHz": jest.fn(),
    "Hz": jest.fn(),
    "mHz": jest.fn(),
    "µHz": jest.fn(),
    "nHz": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["THz"])
    .mockReturnValueOnce(conversions["GHz"])
    .mockReturnValueOnce(conversions["MHz"])
    .mockReturnValueOnce(conversions["kHz"])
    .mockReturnValueOnce(conversions["Hz"])
    .mockReturnValueOnce(conversions["mHz"])
    .mockReturnValueOnce(conversions["µHz"])
    .mockReturnValueOnce(conversions["nHz"]);


  dimension.dimension.mockReturnValueOnce(mockFrequency);

  const frequencyDimension = require('!src/frequency/dimension');
  expect(frequencyDimension.frequency).toEqual(mockFrequency);
  expect(frequencyDimension.terahertz).toBe(mockFrequency["THz"]);
  expect(frequencyDimension.gigahertz).toBe(mockFrequency["GHz"]);
  expect(frequencyDimension.megahertz).toBe(mockFrequency["MHz"]);
  expect(frequencyDimension.kilohertz).toBe(mockFrequency["kHz"]);
  expect(frequencyDimension.hertz).toBe(mockFrequency["Hz"]);
  expect(frequencyDimension.millihertz).toBe(mockFrequency["mHz"]);
  expect(frequencyDimension.microhertz).toBe(mockFrequency["µHz"]);
  expect(frequencyDimension.nanohertz).toBe(mockFrequency["nHz"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e12);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e9);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.000001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-9);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
