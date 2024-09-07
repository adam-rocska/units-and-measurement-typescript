test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "ppm": [jest.fn(), jest.fn()],
    "ppb": [jest.fn(), jest.fn()],
    "ppt": [jest.fn(), jest.fn()]
  };

  const mockDispersion = {
    "ppm": jest.fn(),
    "ppb": jest.fn(),
    "ppt": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["ppm"])
    .mockReturnValueOnce(conversions["ppb"])
    .mockReturnValueOnce(conversions["ppt"]);


  dimension.dimension.mockReturnValueOnce(mockDispersion);

  const dispersionDimension = require('!src/dispersion/dimension');
  expect(dispersionDimension.dispersion).toEqual(mockDispersion);
  expect(dispersionDimension.partsPerMillion).toBe(mockDispersion["ppm"]);
  expect(dispersionDimension.partsPerBillion).toBe(mockDispersion["ppb"]);
  expect(dispersionDimension.partsPerTrillion).toBe(mockDispersion["ppt"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-3);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-6);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
