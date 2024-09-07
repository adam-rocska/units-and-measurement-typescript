test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "MΩ": [jest.fn(), jest.fn()],
    "kΩ": [jest.fn(), jest.fn()],
    "Ω": [jest.fn(), jest.fn()],
    "mΩ": [jest.fn(), jest.fn()],
    "µΩ": [jest.fn(), jest.fn()]
  };

  const mockElectricResistance = {
    "MΩ": jest.fn(),
    "kΩ": jest.fn(),
    "Ω": jest.fn(),
    "mΩ": jest.fn(),
    "µΩ": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["MΩ"])
    .mockReturnValueOnce(conversions["kΩ"])
    .mockReturnValueOnce(conversions["Ω"])
    .mockReturnValueOnce(conversions["mΩ"])
    .mockReturnValueOnce(conversions["µΩ"]);


  dimension.dimension.mockReturnValueOnce(mockElectricResistance);

  const electricResistanceDimension = require('!src/electric-resistance/dimension');
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
