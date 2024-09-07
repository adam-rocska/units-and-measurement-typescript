test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "kg": [jest.fn(), jest.fn()],
    "g": [jest.fn(), jest.fn()],
    "dg": [jest.fn(), jest.fn()],
    "cg": [jest.fn(), jest.fn()],
    "mg": [jest.fn(), jest.fn()],
    "µg": [jest.fn(), jest.fn()],
    "ng": [jest.fn(), jest.fn()],
    "pg": [jest.fn(), jest.fn()],
    "oz": [jest.fn(), jest.fn()],
    "lb": [jest.fn(), jest.fn()],
    "st": [jest.fn(), jest.fn()],
    "t": [jest.fn(), jest.fn()],
    "ton": [jest.fn(), jest.fn()],
    "ct": [jest.fn(), jest.fn()],
    "oz t": [jest.fn(), jest.fn()],
    "slug": [jest.fn(), jest.fn()]
  };

  const mockMass = {
    "kg": jest.fn(),
    "g": jest.fn(),
    "dg": jest.fn(),
    "cg": jest.fn(),
    "mg": jest.fn(),
    "µg": jest.fn(),
    "ng": jest.fn(),
    "pg": jest.fn(),
    "oz": jest.fn(),
    "lb": jest.fn(),
    "st": jest.fn(),
    "t": jest.fn(),
    "ton": jest.fn(),
    "ct": jest.fn(),
    "oz t": jest.fn(),
    "slug": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["kg"])
    .mockReturnValueOnce(conversions["g"])
    .mockReturnValueOnce(conversions["dg"])
    .mockReturnValueOnce(conversions["cg"])
    .mockReturnValueOnce(conversions["mg"])
    .mockReturnValueOnce(conversions["µg"])
    .mockReturnValueOnce(conversions["ng"])
    .mockReturnValueOnce(conversions["pg"])
    .mockReturnValueOnce(conversions["oz"])
    .mockReturnValueOnce(conversions["lb"])
    .mockReturnValueOnce(conversions["st"])
    .mockReturnValueOnce(conversions["t"])
    .mockReturnValueOnce(conversions["ton"])
    .mockReturnValueOnce(conversions["ct"])
    .mockReturnValueOnce(conversions["oz t"])
    .mockReturnValueOnce(conversions["slug"]);


  dimension.dimension.mockReturnValueOnce(mockMass);

  const massDimension = require('!src/mass/dimension');
  expect(massDimension.mass).toEqual(mockMass);
  expect(massDimension.kilograms).toBe(mockMass["kg"]);
  expect(massDimension.grams).toBe(mockMass["g"]);
  expect(massDimension.decigrams).toBe(mockMass["dg"]);
  expect(massDimension.centigrams).toBe(mockMass["cg"]);
  expect(massDimension.milligrams).toBe(mockMass["mg"]);
  expect(massDimension.micrograms).toBe(mockMass["µg"]);
  expect(massDimension.nanograms).toBe(mockMass["ng"]);
  expect(massDimension.picograms).toBe(mockMass["pg"]);
  expect(massDimension.ounces).toBe(mockMass["oz"]);
  expect(massDimension.pounds).toBe(mockMass["lb"]);
  expect(massDimension.stones).toBe(mockMass["st"]);
  expect(massDimension.metricTons).toBe(mockMass["t"]);
  expect(massDimension.shortTons).toBe(mockMass["ton"]);
  expect(massDimension.carats).toBe(mockMass["ct"]);
  expect(massDimension.ouncesTroy).toBe(mockMass["oz t"]);
  expect(massDimension.slugs).toBe(mockMass["slug"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.0001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.00001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.000001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-9);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-12);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-15);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.0283495);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.453592);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.157473);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 907.185);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.0002);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.03110348);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 14.5939);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
