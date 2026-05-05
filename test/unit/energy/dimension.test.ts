beforeEach(() => {
  vi.resetModules();
});

test("[object Object] dimension", async () => {
  const dimension = {
    dimension: vi.fn(),
    linearConversion: vi.fn()
  };

  const conversions = {
    "kJ": [vi.fn(), vi.fn()],
    "J": [vi.fn(), vi.fn()],
    "kCal": [vi.fn(), vi.fn()],
    "cal": [vi.fn(), vi.fn()],
    "kWh": [vi.fn(), vi.fn()],
    "Wh": [vi.fn(), vi.fn()],
    "eV": [vi.fn(), vi.fn()]
  };

  const mockEnergy = {
    "kJ": vi.fn(),
    "J": vi.fn(),
    "kCal": vi.fn(),
    "cal": vi.fn(),
    "kWh": vi.fn(),
    "Wh": vi.fn(),
    "eV": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["kJ"])
    .mockReturnValueOnce(conversions["J"])
    .mockReturnValueOnce(conversions["kCal"])
    .mockReturnValueOnce(conversions["cal"])
    .mockReturnValueOnce(conversions["kWh"])
    .mockReturnValueOnce(conversions["Wh"])
    .mockReturnValueOnce(conversions["eV"]);


  dimension.dimension.mockReturnValueOnce(mockEnergy);

  const energyDimension = await import('!src/energy/dimension');
  expect(energyDimension.energy).toEqual(mockEnergy);
  expect(energyDimension.kilojoules).toBe(mockEnergy["kJ"]);
  expect(energyDimension.joules).toBe(mockEnergy["J"]);
  expect(energyDimension.kilocalories).toBe(mockEnergy["kCal"]);
  expect(energyDimension.calories).toBe(mockEnergy["cal"]);
  expect(energyDimension.kilowattHours).toBe(mockEnergy["kWh"]);
  expect(energyDimension.wattHours).toBe(mockEnergy["Wh"]);
  expect(energyDimension.electronvolts).toBe(mockEnergy["eV"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 4184.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 4.184);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 3600000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 3600.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.60218e-19);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
