test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "sec": [jest.fn(), jest.fn()],
    "min": [jest.fn(), jest.fn()],
    "hr": [jest.fn(), jest.fn()]
  };

  const mockDuration = {
    "sec": jest.fn(),
    "min": jest.fn(),
    "hr": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["sec"])
    .mockReturnValueOnce(conversions["min"])
    .mockReturnValueOnce(conversions["hr"]);


  dimension.dimension.mockReturnValueOnce(mockDuration);

  const durationDimension = require('!src/duration/dimension');
  expect(durationDimension.duration).toEqual(mockDuration);
  expect(durationDimension.seconds).toBe(mockDuration["sec"]);
  expect(durationDimension.minutes).toBe(mockDuration["min"]);
  expect(durationDimension.hours).toBe(mockDuration["hr"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 60);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 3600);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
