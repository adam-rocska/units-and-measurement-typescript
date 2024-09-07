test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "Mm²": [jest.fn(), jest.fn()],
    "km²": [jest.fn(), jest.fn()],
    "m²": [jest.fn(), jest.fn()],
    "cm²": [jest.fn(), jest.fn()],
    "mm²": [jest.fn(), jest.fn()],
    "µm²": [jest.fn(), jest.fn()],
    "nm²": [jest.fn(), jest.fn()],
    "in²": [jest.fn(), jest.fn()],
    "ft²": [jest.fn(), jest.fn()],
    "yd²": [jest.fn(), jest.fn()],
    "mi²": [jest.fn(), jest.fn()],
    "ac": [jest.fn(), jest.fn()],
    "a": [jest.fn(), jest.fn()],
    "ha": [jest.fn(), jest.fn()]
  };

  const mockArea = {
    "Mm²": jest.fn(),
    "km²": jest.fn(),
    "m²": jest.fn(),
    "cm²": jest.fn(),
    "mm²": jest.fn(),
    "µm²": jest.fn(),
    "nm²": jest.fn(),
    "in²": jest.fn(),
    "ft²": jest.fn(),
    "yd²": jest.fn(),
    "mi²": jest.fn(),
    "ac": jest.fn(),
    "a": jest.fn(),
    "ha": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["Mm²"])
    .mockReturnValueOnce(conversions["km²"])
    .mockReturnValueOnce(conversions["m²"])
    .mockReturnValueOnce(conversions["cm²"])
    .mockReturnValueOnce(conversions["mm²"])
    .mockReturnValueOnce(conversions["µm²"])
    .mockReturnValueOnce(conversions["nm²"])
    .mockReturnValueOnce(conversions["in²"])
    .mockReturnValueOnce(conversions["ft²"])
    .mockReturnValueOnce(conversions["yd²"])
    .mockReturnValueOnce(conversions["mi²"])
    .mockReturnValueOnce(conversions["ac"])
    .mockReturnValueOnce(conversions["a"])
    .mockReturnValueOnce(conversions["ha"]);


  dimension.dimension.mockReturnValueOnce(mockArea);

  const areaDimension = require('!src/area/dimension');
  expect(areaDimension.area).toEqual(mockArea);
  expect(areaDimension.squareMegameters).toBe(mockArea["Mm²"]);
  expect(areaDimension.squareKilometers).toBe(mockArea["km²"]);
  expect(areaDimension.squareMeters).toBe(mockArea["m²"]);
  expect(areaDimension.squareCentimeters).toBe(mockArea["cm²"]);
  expect(areaDimension.squareMillimeters).toBe(mockArea["mm²"]);
  expect(areaDimension.squareMicrometers).toBe(mockArea["µm²"]);
  expect(areaDimension.squareNanometers).toBe(mockArea["nm²"]);
  expect(areaDimension.squareInches).toBe(mockArea["in²"]);
  expect(areaDimension.squareFeet).toBe(mockArea["ft²"]);
  expect(areaDimension.squareYards).toBe(mockArea["yd²"]);
  expect(areaDimension.squareMiles).toBe(mockArea["mi²"]);
  expect(areaDimension.acres).toBe(mockArea["ac"]);
  expect(areaDimension.ares).toBe(mockArea["a"]);
  expect(areaDimension.hectares).toBe(mockArea["ha"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e12);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.0001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.000001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-12);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-18);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.00064516);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.092903);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.836127);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 2.59e+6);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 4046.86);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 100);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 10000);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
