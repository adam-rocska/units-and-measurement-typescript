test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "m/s²": [jest.fn(), jest.fn()],
    "g": [jest.fn(), jest.fn()]
  };

  const mockAcceleration = {
    "m/s²": jest.fn(),
    "g": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["m/s²"])
    .mockReturnValueOnce(conversions["g"]);


  dimension.dimension.mockReturnValueOnce(mockAcceleration);

  const accelerationDimension = require('!src/acceleration/dimension');
  expect(accelerationDimension.acceleration).toEqual(mockAcceleration);
  expect(accelerationDimension.metersPerSecondSquared).toBe(mockAcceleration["m/s²"]);
  expect(accelerationDimension.gravity).toBe(mockAcceleration["g"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 9.81);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
