test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "m/s": [jest.fn(), jest.fn()],
    "km/h": [jest.fn(), jest.fn()],
    "mph": [jest.fn(), jest.fn()],
    "kn": [jest.fn(), jest.fn()]
  };

  const mockSpeed = {
    "m/s": jest.fn(),
    "km/h": jest.fn(),
    "mph": jest.fn(),
    "kn": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["m/s"])
    .mockReturnValueOnce(conversions["km/h"])
    .mockReturnValueOnce(conversions["mph"])
    .mockReturnValueOnce(conversions["kn"]);


  dimension.dimension.mockReturnValueOnce(mockSpeed);

  const speedDimension = require('!src/speed/dimension');
  expect(speedDimension.speed).toEqual(mockSpeed);
  expect(speedDimension.metersPerSecond).toBe(mockSpeed["m/s"]);
  expect(speedDimension.kilometersPerHour).toBe(mockSpeed["km/h"]);
  expect(speedDimension.milesPerHour).toBe(mockSpeed["mph"]);
  expect(speedDimension.knots).toBe(mockSpeed["kn"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.277778);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.44704);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.514444);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
