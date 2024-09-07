test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "kJ": [jest.fn(), jest.fn()],
    "J": [jest.fn(), jest.fn()],
    "kCal": [jest.fn(), jest.fn()],
    "cal": [jest.fn(), jest.fn()],
    "kWh": [jest.fn(), jest.fn()],
    "Wh": [jest.fn(), jest.fn()],
    "eV": [jest.fn(), jest.fn()]
  };

  const mockEnergy = {
    "kJ": jest.fn(),
    "J": jest.fn(),
    "kCal": jest.fn(),
    "cal": jest.fn(),
    "kWh": jest.fn(),
    "Wh": jest.fn(),
    "eV": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

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

  const energyDimension = require('!src/energy/dimension');
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
