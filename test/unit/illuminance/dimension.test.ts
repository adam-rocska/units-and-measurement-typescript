test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "lx": [jest.fn(), jest.fn()]
  };

  const mockIlluminance = {
    "lx": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["lx"]);


  dimension.dimension.mockReturnValueOnce(mockIlluminance);

  const illuminanceDimension = require('!src/illuminance/dimension');
  expect(illuminanceDimension.illuminance).toEqual(mockIlluminance);
  expect(illuminanceDimension.lux).toBe(mockIlluminance["lx"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
