beforeEach(() => {
  vi.resetModules();
});

test("[object Object] dimension", async () => {
  const dimension = {
    dimension: vi.fn(),
    linearConversion: vi.fn()
  };

  const conversions = {
    "MΩ": [vi.fn(), vi.fn()],
    "kΩ": [vi.fn(), vi.fn()],
    "Ω": [vi.fn(), vi.fn()],
    "mΩ": [vi.fn(), vi.fn()],
    "µΩ": [vi.fn(), vi.fn()]
  };

  const mockElectricResistance = {
    "MΩ": vi.fn(),
    "kΩ": vi.fn(),
    "Ω": vi.fn(),
    "mΩ": vi.fn(),
    "µΩ": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["MΩ"])
    .mockReturnValueOnce(conversions["kΩ"])
    .mockReturnValueOnce(conversions["Ω"])
    .mockReturnValueOnce(conversions["mΩ"])
    .mockReturnValueOnce(conversions["µΩ"]);


  dimension.dimension.mockReturnValueOnce(mockElectricResistance);

  const electricResistanceDimension = await import('!src/electric-resistance/dimension');
  expect(electricResistanceDimension.electricResistance).toEqual(mockElectricResistance);
  expect(electricResistanceDimension.megaohms).toBe(mockElectricResistance["MΩ"]);
  expect(electricResistanceDimension.kiloohms).toBe(mockElectricResistance["kΩ"]);
  expect(electricResistanceDimension.ohms).toBe(mockElectricResistance["Ω"]);
  expect(electricResistanceDimension.milliohms).toBe(mockElectricResistance["mΩ"]);
  expect(electricResistanceDimension.microohms).toBe(mockElectricResistance["µΩ"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.000001);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
