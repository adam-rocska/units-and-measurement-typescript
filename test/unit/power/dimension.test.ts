test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "TW": [jest.fn(), jest.fn()],
    "GW": [jest.fn(), jest.fn()],
    "MW": [jest.fn(), jest.fn()],
    "kW": [jest.fn(), jest.fn()],
    "W": [jest.fn(), jest.fn()],
    "mW": [jest.fn(), jest.fn()],
    "µW": [jest.fn(), jest.fn()],
    "nW": [jest.fn(), jest.fn()],
    "pW": [jest.fn(), jest.fn()],
    "fW": [jest.fn(), jest.fn()],
    "hp": [jest.fn(), jest.fn()]
  };

  const mockPower = {
    "TW": jest.fn(),
    "GW": jest.fn(),
    "MW": jest.fn(),
    "kW": jest.fn(),
    "W": jest.fn(),
    "mW": jest.fn(),
    "µW": jest.fn(),
    "nW": jest.fn(),
    "pW": jest.fn(),
    "fW": jest.fn(),
    "hp": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["TW"])
    .mockReturnValueOnce(conversions["GW"])
    .mockReturnValueOnce(conversions["MW"])
    .mockReturnValueOnce(conversions["kW"])
    .mockReturnValueOnce(conversions["W"])
    .mockReturnValueOnce(conversions["mW"])
    .mockReturnValueOnce(conversions["µW"])
    .mockReturnValueOnce(conversions["nW"])
    .mockReturnValueOnce(conversions["pW"])
    .mockReturnValueOnce(conversions["fW"])
    .mockReturnValueOnce(conversions["hp"]);


  dimension.dimension.mockReturnValueOnce(mockPower);

  const powerDimension = require('!src/power/dimension');
  expect(powerDimension.power).toEqual(mockPower);
  expect(powerDimension.terawatts).toBe(mockPower["TW"]);
  expect(powerDimension.gigawatts).toBe(mockPower["GW"]);
  expect(powerDimension.megawatts).toBe(mockPower["MW"]);
  expect(powerDimension.kilowatts).toBe(mockPower["kW"]);
  expect(powerDimension.watts).toBe(mockPower["W"]);
  expect(powerDimension.milliwatts).toBe(mockPower["mW"]);
  expect(powerDimension.microwatts).toBe(mockPower["µW"]);
  expect(powerDimension.nanowatts).toBe(mockPower["nW"]);
  expect(powerDimension.picowatts).toBe(mockPower["pW"]);
  expect(powerDimension.femtowatts).toBe(mockPower["fW"]);
  expect(powerDimension.horsepower).toBe(mockPower["hp"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e12);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e9);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.000001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-9);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-12);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-15);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 745.7);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
