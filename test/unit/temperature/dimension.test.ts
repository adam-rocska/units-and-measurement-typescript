beforeEach(() => {
  vi.resetModules();
});

test("[object Object] dimension", async () => {
  const dimension = {
    dimension: vi.fn(),
    linearConversion: vi.fn()
  };

  const conversions = {
    "K": [vi.fn(), vi.fn()],
    "°C": [vi.fn(), vi.fn()],
    "°F": [vi.fn(), vi.fn()],
    "°R": [vi.fn(), vi.fn()]
  };

  const mockTemperature = {
    "K": vi.fn(),
    "°C": vi.fn(),
    "°F": vi.fn(),
    "°R": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["K"])
    .mockReturnValueOnce(conversions["°C"])
    .mockReturnValueOnce(conversions["°F"])
    .mockReturnValueOnce(conversions["°R"]);


  dimension.dimension.mockReturnValueOnce(mockTemperature);

  const temperatureDimension = await import('!src/temperature/dimension');
  expect(temperatureDimension.temperature).toEqual(mockTemperature);
  expect(temperatureDimension.kelvin).toBe(mockTemperature["K"]);
  expect(temperatureDimension.celsius).toBe(mockTemperature["°C"]);
  expect(temperatureDimension.fahrenheit).toBe(mockTemperature["°F"]);
  expect(temperatureDimension.rankine).toBe(mockTemperature["°R"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1, 0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0, 273.15);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.55555555555556, 255.37222222222427);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.55555555555556, 0);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
