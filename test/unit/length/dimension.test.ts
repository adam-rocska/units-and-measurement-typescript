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
    "Mm": [vi.fn(), vi.fn()],
    "kM": [vi.fn(), vi.fn()],
    "hm": [vi.fn(), vi.fn()],
    "dam": [vi.fn(), vi.fn()],
    "m": [vi.fn(), vi.fn()],
    "dm": [vi.fn(), vi.fn()],
    "cm": [vi.fn(), vi.fn()],
    "mm": [vi.fn(), vi.fn()],
    "µm": [vi.fn(), vi.fn()],
    "nm": [vi.fn(), vi.fn()],
    "pm": [vi.fn(), vi.fn()],
    "tw": [vi.fn(), vi.fn()],
    "pt": [vi.fn(), vi.fn()],
    "P": [vi.fn(), vi.fn()],
    "in": [vi.fn(), vi.fn()],
    "ft": [vi.fn(), vi.fn()],
    "yd": [vi.fn(), vi.fn()],
    "mi": [vi.fn(), vi.fn()],
    "smi": [vi.fn(), vi.fn()],
    "ly": [vi.fn(), vi.fn()],
    "NM": [vi.fn(), vi.fn()],
    "ftm": [vi.fn(), vi.fn()],
    "fur": [vi.fn(), vi.fn()],
    "ua": [vi.fn(), vi.fn()],
    "pc": [vi.fn(), vi.fn()]
  };

  const mockLength = {
    "Mm": vi.fn(),
    "kM": vi.fn(),
    "hm": vi.fn(),
    "dam": vi.fn(),
    "m": vi.fn(),
    "dm": vi.fn(),
    "cm": vi.fn(),
    "mm": vi.fn(),
    "µm": vi.fn(),
    "nm": vi.fn(),
    "pm": vi.fn(),
    "tw": vi.fn(),
    "pt": vi.fn(),
    "P": vi.fn(),
    "in": vi.fn(),
    "ft": vi.fn(),
    "yd": vi.fn(),
    "mi": vi.fn(),
    "smi": vi.fn(),
    "ly": vi.fn(),
    "NM": vi.fn(),
    "ftm": vi.fn(),
    "fur": vi.fn(),
    "ua": vi.fn(),
    "pc": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["Mm"])
    .mockReturnValueOnce(conversions["kM"])
    .mockReturnValueOnce(conversions["hm"])
    .mockReturnValueOnce(conversions["dam"])
    .mockReturnValueOnce(conversions["m"])
    .mockReturnValueOnce(conversions["dm"])
    .mockReturnValueOnce(conversions["cm"])
    .mockReturnValueOnce(conversions["mm"])
    .mockReturnValueOnce(conversions["µm"])
    .mockReturnValueOnce(conversions["nm"])
    .mockReturnValueOnce(conversions["pm"])
    .mockReturnValueOnce(conversions["tw"])
    .mockReturnValueOnce(conversions["pt"])
    .mockReturnValueOnce(conversions["P"])
    .mockReturnValueOnce(conversions["in"])
    .mockReturnValueOnce(conversions["ft"])
    .mockReturnValueOnce(conversions["yd"])
    .mockReturnValueOnce(conversions["mi"])
    .mockReturnValueOnce(conversions["smi"])
    .mockReturnValueOnce(conversions["ly"])
    .mockReturnValueOnce(conversions["NM"])
    .mockReturnValueOnce(conversions["ftm"])
    .mockReturnValueOnce(conversions["fur"])
    .mockReturnValueOnce(conversions["ua"])
    .mockReturnValueOnce(conversions["pc"]);


  dimension.dimension.mockReturnValueOnce(mockLength);

  const lengthDimension = await import('!src/length/dimension');
  expect(lengthDimension.length).toEqual(mockLength);
  expect(lengthDimension.megameters).toBe(mockLength["Mm"]);
  expect(lengthDimension.kilometers).toBe(mockLength["kM"]);
  expect(lengthDimension.hectometers).toBe(mockLength["hm"]);
  expect(lengthDimension.decameters).toBe(mockLength["dam"]);
  expect(lengthDimension.meters).toBe(mockLength["m"]);
  expect(lengthDimension.decimeters).toBe(mockLength["dm"]);
  expect(lengthDimension.centimeters).toBe(mockLength["cm"]);
  expect(lengthDimension.millimeters).toBe(mockLength["mm"]);
  expect(lengthDimension.micrometers).toBe(mockLength["µm"]);
  expect(lengthDimension.nanometers).toBe(mockLength["nm"]);
  expect(lengthDimension.picometers).toBe(mockLength["pm"]);
  expect(lengthDimension.twips).toBe(mockLength["tw"]);
  expect(lengthDimension.points).toBe(mockLength["pt"]);
  expect(lengthDimension.picas).toBe(mockLength["P"]);
  expect(lengthDimension.inches).toBe(mockLength["in"]);
  expect(lengthDimension.feet).toBe(mockLength["ft"]);
  expect(lengthDimension.yards).toBe(mockLength["yd"]);
  expect(lengthDimension.miles).toBe(mockLength["mi"]);
  expect(lengthDimension.scandinavianMiles).toBe(mockLength["smi"]);
  expect(lengthDimension.lightyears).toBe(mockLength["ly"]);
  expect(lengthDimension.nauticalMiles).toBe(mockLength["NM"]);
  expect(lengthDimension.fathoms).toBe(mockLength["ftm"]);
  expect(lengthDimension.furlongs).toBe(mockLength["fur"]);
  expect(lengthDimension.astronomicalUnits).toBe(mockLength["ua"]);
  expect(lengthDimension.parsecs).toBe(mockLength["pc"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1E6);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1E3);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1E2);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1E1);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1E-1);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1E-2);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1E-3);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1E-6);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-9);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-12);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, (127 / 7200) / 1000);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, (127 / 360) / 1000);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, (127 / 30) / 1000);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, (127 / 5) / 1000);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.3048);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.9144);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1609.34);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 10000);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 9.461e+15);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1852);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.8288);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 201.168);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.496e+11);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 3.086e+16);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
