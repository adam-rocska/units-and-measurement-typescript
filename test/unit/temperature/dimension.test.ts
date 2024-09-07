test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "K": [jest.fn(), jest.fn()],
    "°C": [jest.fn(), jest.fn()],
    "°F": [jest.fn(), jest.fn()],
    "°R": [jest.fn(), jest.fn()]
  };

  const mockTemperature = {
    "K": jest.fn(),
    "°C": jest.fn(),
    "°F": jest.fn(),
    "°R": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["K"])
    .mockReturnValueOnce(conversions["°C"])
    .mockReturnValueOnce(conversions["°F"])
    .mockReturnValueOnce(conversions["°R"]);


  dimension.dimension.mockReturnValueOnce(mockTemperature);

  const temperatureDimension = require('!src/temperature/dimension');
  expect(temperatureDimension.temperature).toEqual(mockTemperature);
  expect(temperatureDimension.kelvin).toBe(mockTemperature["K"]);
  expect(temperatureDimension.celsius).toBe(mockTemperature["°C"]);
  expect(temperatureDimension.fahrenheit).toBe(mockTemperature["°F"]);
  expect(temperatureDimension.rankine).toBe(mockTemperature["°R"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1, 0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0, 273.15);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.55555555555556, 255.37222222222427);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.55555555555556, 0);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
