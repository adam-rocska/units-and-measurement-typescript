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
    "THz": [vi.fn(), vi.fn()],
    "GHz": [vi.fn(), vi.fn()],
    "MHz": [vi.fn(), vi.fn()],
    "kHz": [vi.fn(), vi.fn()],
    "Hz": [vi.fn(), vi.fn()],
    "mHz": [vi.fn(), vi.fn()],
    "µHz": [vi.fn(), vi.fn()],
    "nHz": [vi.fn(), vi.fn()]
  };

  const mockFrequency = {
    "THz": vi.fn(),
    "GHz": vi.fn(),
    "MHz": vi.fn(),
    "kHz": vi.fn(),
    "Hz": vi.fn(),
    "mHz": vi.fn(),
    "µHz": vi.fn(),
    "nHz": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["THz"])
    .mockReturnValueOnce(conversions["GHz"])
    .mockReturnValueOnce(conversions["MHz"])
    .mockReturnValueOnce(conversions["kHz"])
    .mockReturnValueOnce(conversions["Hz"])
    .mockReturnValueOnce(conversions["mHz"])
    .mockReturnValueOnce(conversions["µHz"])
    .mockReturnValueOnce(conversions["nHz"]);


  dimension.dimension.mockReturnValueOnce(mockFrequency);

  const frequencyDimension = await import('!src/frequency/dimension');
  expect(frequencyDimension.frequency).toEqual(mockFrequency);
  expect(frequencyDimension.terahertz).toBe(mockFrequency["THz"]);
  expect(frequencyDimension.gigahertz).toBe(mockFrequency["GHz"]);
  expect(frequencyDimension.megahertz).toBe(mockFrequency["MHz"]);
  expect(frequencyDimension.kilohertz).toBe(mockFrequency["kHz"]);
  expect(frequencyDimension.hertz).toBe(mockFrequency["Hz"]);
  expect(frequencyDimension.millihertz).toBe(mockFrequency["mHz"]);
  expect(frequencyDimension.microhertz).toBe(mockFrequency["µHz"]);
  expect(frequencyDimension.nanohertz).toBe(mockFrequency["nHz"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e12);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e9);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.000001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-9);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
