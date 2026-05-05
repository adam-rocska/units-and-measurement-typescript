beforeEach(() => {
  vi.resetModules();
});

test("[object Object] dimension", async () => {
  const dimension = {
    dimension: vi.fn(),
    linearConversion: vi.fn()
  };

  const conversions = {
    "C": [vi.fn(), vi.fn()],
    "MAh": [vi.fn(), vi.fn()],
    "kAh": [vi.fn(), vi.fn()],
    "Ah": [vi.fn(), vi.fn()],
    "mAh": [vi.fn(), vi.fn()],
    "µAh": [vi.fn(), vi.fn()]
  };

  const mockElectricCharge = {
    "C": vi.fn(),
    "MAh": vi.fn(),
    "kAh": vi.fn(),
    "Ah": vi.fn(),
    "mAh": vi.fn(),
    "µAh": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["C"])
    .mockReturnValueOnce(conversions["MAh"])
    .mockReturnValueOnce(conversions["kAh"])
    .mockReturnValueOnce(conversions["Ah"])
    .mockReturnValueOnce(conversions["mAh"])
    .mockReturnValueOnce(conversions["µAh"]);


  dimension.dimension.mockReturnValueOnce(mockElectricCharge);

  const electricChargeDimension = await import('!src/electric-charge/dimension');
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
