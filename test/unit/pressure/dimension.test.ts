test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "N/m²": [jest.fn(), jest.fn()],
    "GPa": [jest.fn(), jest.fn()],
    "MPa": [jest.fn(), jest.fn()],
    "kPa": [jest.fn(), jest.fn()],
    "hPa": [jest.fn(), jest.fn()],
    "inHg": [jest.fn(), jest.fn()],
    "bar": [jest.fn(), jest.fn()],
    "mbar": [jest.fn(), jest.fn()],
    "mmHg": [jest.fn(), jest.fn()],
    "psi": [jest.fn(), jest.fn()]
  };

  const mockPressure = {
    "N/m²": jest.fn(),
    "GPa": jest.fn(),
    "MPa": jest.fn(),
    "kPa": jest.fn(),
    "hPa": jest.fn(),
    "inHg": jest.fn(),
    "bar": jest.fn(),
    "mbar": jest.fn(),
    "mmHg": jest.fn(),
    "psi": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["N/m²"])
    .mockReturnValueOnce(conversions["GPa"])
    .mockReturnValueOnce(conversions["MPa"])
    .mockReturnValueOnce(conversions["kPa"])
    .mockReturnValueOnce(conversions["hPa"])
    .mockReturnValueOnce(conversions["inHg"])
    .mockReturnValueOnce(conversions["bar"])
    .mockReturnValueOnce(conversions["mbar"])
    .mockReturnValueOnce(conversions["mmHg"])
    .mockReturnValueOnce(conversions["psi"]);


  dimension.dimension.mockReturnValueOnce(mockPressure);

  const pressureDimension = require('!src/pressure/dimension');
  expect(pressureDimension.pressure).toEqual(mockPressure);
  expect(pressureDimension.newtonsPerMetersSquared).toBe(mockPressure["N/m²"]);
  expect(pressureDimension.gigapascals).toBe(mockPressure["GPa"]);
  expect(pressureDimension.megapascals).toBe(mockPressure["MPa"]);
  expect(pressureDimension.kilopascals).toBe(mockPressure["kPa"]);
  expect(pressureDimension.hectopascals).toBe(mockPressure["hPa"]);
  expect(pressureDimension.inchesOfMercury).toBe(mockPressure["inHg"]);
  expect(pressureDimension.bars).toBe(mockPressure["bar"]);
  expect(pressureDimension.millibars).toBe(mockPressure["mbar"]);
  expect(pressureDimension.millimetersOfMercury).toBe(mockPressure["mmHg"]);
  expect(pressureDimension.poundsForcePerSquareInch).toBe(mockPressure["psi"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e9);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 100.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 3386.39);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 100000);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 100);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 133.322);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 6894.76);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
