test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "C": [jest.fn(), jest.fn()],
    "MAh": [jest.fn(), jest.fn()],
    "kAh": [jest.fn(), jest.fn()],
    "Ah": [jest.fn(), jest.fn()],
    "mAh": [jest.fn(), jest.fn()],
    "µAh": [jest.fn(), jest.fn()]
  };

  const mockElectricCharge = {
    "C": jest.fn(),
    "MAh": jest.fn(),
    "kAh": jest.fn(),
    "Ah": jest.fn(),
    "mAh": jest.fn(),
    "µAh": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["C"])
    .mockReturnValueOnce(conversions["MAh"])
    .mockReturnValueOnce(conversions["kAh"])
    .mockReturnValueOnce(conversions["Ah"])
    .mockReturnValueOnce(conversions["mAh"])
    .mockReturnValueOnce(conversions["µAh"]);


  dimension.dimension.mockReturnValueOnce(mockElectricCharge);

  const electricChargeDimension = require('!src/electric-charge/dimension');
  expect(electricChargeDimension.electricCharge).toEqual(mockElectricCharge);
  expect(electricChargeDimension.coulombs).toBe(mockElectricCharge["C"]);
  expect(electricChargeDimension.megaampereHours).toBe(mockElectricCharge["MAh"]);
  expect(electricChargeDimension.kiloampereHours).toBe(mockElectricCharge["kAh"]);
  expect(electricChargeDimension.ampereHours).toBe(mockElectricCharge["Ah"]);
  expect(electricChargeDimension.milliampereHours).toBe(mockElectricCharge["mAh"]);
  expect(electricChargeDimension.microampereHours).toBe(mockElectricCharge["µAh"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 3.6e9);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 3600000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 3600.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 3.6);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.0036);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
