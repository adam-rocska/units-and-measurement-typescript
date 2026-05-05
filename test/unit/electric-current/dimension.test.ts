beforeEach(() => {
  vi.resetModules();
});

test("[object Object] dimension", async () => {
  const dimension = {
    dimension: vi.fn(),
    linearConversion: vi.fn()
  };

  const conversions = {
    "MA": [vi.fn(), vi.fn()],
    "kA": [vi.fn(), vi.fn()],
    "A": [vi.fn(), vi.fn()],
    "mA": [vi.fn(), vi.fn()],
    "µA": [vi.fn(), vi.fn()]
  };

  const mockElectricCurrent = {
    "MA": vi.fn(),
    "kA": vi.fn(),
    "A": vi.fn(),
    "mA": vi.fn(),
    "µA": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["MA"])
    .mockReturnValueOnce(conversions["kA"])
    .mockReturnValueOnce(conversions["A"])
    .mockReturnValueOnce(conversions["mA"])
    .mockReturnValueOnce(conversions["µA"]);


  dimension.dimension.mockReturnValueOnce(mockElectricCurrent);

  const electricCurrentDimension = await import('!src/electric-current/dimension');
  expect(electricCurrentDimension.electricCurrent).toEqual(mockElectricCurrent);
  expect(electricCurrentDimension.megaamperes).toBe(mockElectricCurrent["MA"]);
  expect(electricCurrentDimension.kiloamperes).toBe(mockElectricCurrent["kA"]);
  expect(electricCurrentDimension.amperes).toBe(mockElectricCurrent["A"]);
  expect(electricCurrentDimension.milliamperes).toBe(mockElectricCurrent["mA"]);
  expect(electricCurrentDimension.microamperes).toBe(mockElectricCurrent["µA"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.000001);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
