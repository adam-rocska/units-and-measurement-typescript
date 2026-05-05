beforeEach(() => {
  vi.resetModules();
});

test("[object Object] dimension", async () => {
  const dimension = {
    dimension: vi.fn(),
    linearConversion: vi.fn()
  };

  const conversions = {
    "N/m²": [vi.fn(), vi.fn()],
    "GPa": [vi.fn(), vi.fn()],
    "MPa": [vi.fn(), vi.fn()],
    "kPa": [vi.fn(), vi.fn()],
    "hPa": [vi.fn(), vi.fn()],
    "inHg": [vi.fn(), vi.fn()],
    "bar": [vi.fn(), vi.fn()],
    "mbar": [vi.fn(), vi.fn()],
    "mmHg": [vi.fn(), vi.fn()],
    "psi": [vi.fn(), vi.fn()]
  };

  const mockPressure = {
    "N/m²": vi.fn(),
    "GPa": vi.fn(),
    "MPa": vi.fn(),
    "kPa": vi.fn(),
    "hPa": vi.fn(),
    "inHg": vi.fn(),
    "bar": vi.fn(),
    "mbar": vi.fn(),
    "mmHg": vi.fn(),
    "psi": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

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

  const pressureDimension = await import('!src/pressure/dimension');
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
