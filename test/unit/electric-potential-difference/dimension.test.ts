import {beforeEach, expect, test, vi} from "vitest";
beforeEach(() => {
  vi.resetModules();
});

test("[object Object] dimension", async () => {
  const dimension = {
    dimension: vi.fn(),
    linearConversion: vi.fn()
  };

  const conversions = {
    "MV": [vi.fn(), vi.fn()],
    "kV": [vi.fn(), vi.fn()],
    "V": [vi.fn(), vi.fn()],
    "mV": [vi.fn(), vi.fn()],
    "µV": [vi.fn(), vi.fn()]
  };

  const mockElectricPotentialDifference = {
    "MV": vi.fn(),
    "kV": vi.fn(),
    "V": vi.fn(),
    "mV": vi.fn(),
    "µV": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["MV"])
    .mockReturnValueOnce(conversions["kV"])
    .mockReturnValueOnce(conversions["V"])
    .mockReturnValueOnce(conversions["mV"])
    .mockReturnValueOnce(conversions["µV"]);


  dimension.dimension.mockReturnValueOnce(mockElectricPotentialDifference);

  const electricPotentialDifferenceDimension = await import('!src/electric-potential-difference/dimension');
  expect(electricPotentialDifferenceDimension.electricPotentialDifference).toEqual(mockElectricPotentialDifference);
  expect(electricPotentialDifferenceDimension.megavolts).toBe(mockElectricPotentialDifference["MV"]);
  expect(electricPotentialDifferenceDimension.kilovolts).toBe(mockElectricPotentialDifference["kV"]);
  expect(electricPotentialDifferenceDimension.volts).toBe(mockElectricPotentialDifference["V"]);
  expect(electricPotentialDifferenceDimension.millivolts).toBe(mockElectricPotentialDifference["mV"]);
  expect(electricPotentialDifferenceDimension.microvolts).toBe(mockElectricPotentialDifference["µV"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.000001);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
