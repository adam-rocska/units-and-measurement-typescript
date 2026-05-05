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
    "b": [vi.fn(), vi.fn()],
    "B": [vi.fn(), vi.fn()],
    "kb": [vi.fn(), vi.fn()],
    "Mb": [vi.fn(), vi.fn()],
    "Gb": [vi.fn(), vi.fn()],
    "Tb": [vi.fn(), vi.fn()],
    "Pb": [vi.fn(), vi.fn()],
    "Eb": [vi.fn(), vi.fn()],
    "Zb": [vi.fn(), vi.fn()],
    "Yb": [vi.fn(), vi.fn()],
    "Kib": [vi.fn(), vi.fn()],
    "KB": [vi.fn(), vi.fn()],
    "Mib": [vi.fn(), vi.fn()],
    "MB": [vi.fn(), vi.fn()],
    "Gib": [vi.fn(), vi.fn()],
    "GB": [vi.fn(), vi.fn()],
    "Tib": [vi.fn(), vi.fn()],
    "TB": [vi.fn(), vi.fn()],
    "Pib": [vi.fn(), vi.fn()],
    "PB": [vi.fn(), vi.fn()],
    "Eib": [vi.fn(), vi.fn()],
    "EB": [vi.fn(), vi.fn()],
    "Zib": [vi.fn(), vi.fn()],
    "ZB": [vi.fn(), vi.fn()],
    "Yib": [vi.fn(), vi.fn()],
    "YB": [vi.fn(), vi.fn()]
  };

  const mockInformation = {
    "b": vi.fn(),
    "B": vi.fn(),
    "kb": vi.fn(),
    "Mb": vi.fn(),
    "Gb": vi.fn(),
    "Tb": vi.fn(),
    "Pb": vi.fn(),
    "Eb": vi.fn(),
    "Zb": vi.fn(),
    "Yb": vi.fn(),
    "Kib": vi.fn(),
    "KB": vi.fn(),
    "Mib": vi.fn(),
    "MB": vi.fn(),
    "Gib": vi.fn(),
    "GB": vi.fn(),
    "Tib": vi.fn(),
    "TB": vi.fn(),
    "Pib": vi.fn(),
    "PB": vi.fn(),
    "Eib": vi.fn(),
    "EB": vi.fn(),
    "Zib": vi.fn(),
    "ZB": vi.fn(),
    "Yib": vi.fn(),
    "YB": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["b"])
    .mockReturnValueOnce(conversions["B"])
    .mockReturnValueOnce(conversions["kb"])
    .mockReturnValueOnce(conversions["Mb"])
    .mockReturnValueOnce(conversions["Gb"])
    .mockReturnValueOnce(conversions["Tb"])
    .mockReturnValueOnce(conversions["Pb"])
    .mockReturnValueOnce(conversions["Eb"])
    .mockReturnValueOnce(conversions["Zb"])
    .mockReturnValueOnce(conversions["Yb"])
    .mockReturnValueOnce(conversions["Kib"])
    .mockReturnValueOnce(conversions["KB"])
    .mockReturnValueOnce(conversions["Mib"])
    .mockReturnValueOnce(conversions["MB"])
    .mockReturnValueOnce(conversions["Gib"])
    .mockReturnValueOnce(conversions["GB"])
    .mockReturnValueOnce(conversions["Tib"])
    .mockReturnValueOnce(conversions["TB"])
    .mockReturnValueOnce(conversions["Pib"])
    .mockReturnValueOnce(conversions["PB"])
    .mockReturnValueOnce(conversions["Eib"])
    .mockReturnValueOnce(conversions["EB"])
    .mockReturnValueOnce(conversions["Zib"])
    .mockReturnValueOnce(conversions["ZB"])
    .mockReturnValueOnce(conversions["Yib"])
    .mockReturnValueOnce(conversions["YB"]);


  dimension.dimension.mockReturnValueOnce(mockInformation);

  const informationDimension = await import('!src/information/dimension');
  expect(informationDimension.information).toEqual(mockInformation);
  expect(informationDimension.bits).toBe(mockInformation["b"]);
  expect(informationDimension.bytes).toBe(mockInformation["B"]);
  expect(informationDimension.kilobits).toBe(mockInformation["kb"]);
  expect(informationDimension.megabits).toBe(mockInformation["Mb"]);
  expect(informationDimension.gigabits).toBe(mockInformation["Gb"]);
  expect(informationDimension.terabits).toBe(mockInformation["Tb"]);
  expect(informationDimension.petabits).toBe(mockInformation["Pb"]);
  expect(informationDimension.exabits).toBe(mockInformation["Eb"]);
  expect(informationDimension.zettabits).toBe(mockInformation["Zb"]);
  expect(informationDimension.yottabits).toBe(mockInformation["Yb"]);
  expect(informationDimension.kibibits).toBe(mockInformation["Kib"]);
  expect(informationDimension.kilobytes).toBe(mockInformation["KB"]);
  expect(informationDimension.mebibits).toBe(mockInformation["Mib"]);
  expect(informationDimension.megabytes).toBe(mockInformation["MB"]);
  expect(informationDimension.gibibits).toBe(mockInformation["Gib"]);
  expect(informationDimension.gigabytes).toBe(mockInformation["GB"]);
  expect(informationDimension.tebibits).toBe(mockInformation["Tib"]);
  expect(informationDimension.terabytes).toBe(mockInformation["TB"]);
  expect(informationDimension.pebibits).toBe(mockInformation["Pib"]);
  expect(informationDimension.petabytes).toBe(mockInformation["PB"]);
  expect(informationDimension.exbibits).toBe(mockInformation["Eib"]);
  expect(informationDimension.exabytes).toBe(mockInformation["EB"]);
  expect(informationDimension.zebibits).toBe(mockInformation["Zib"]);
  expect(informationDimension.zettabytes).toBe(mockInformation["ZB"]);
  expect(informationDimension.yobibits).toBe(mockInformation["Yib"]);
  expect(informationDimension.yottabytes).toBe(mockInformation["YB"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 8);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000e2);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000e3);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000e4);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000e5);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000e6);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000e7);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000e8);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1024);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 8192);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1024e2);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 8192e2);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1024e3);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 8192e3);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1024e4);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 8192e4);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1024e5);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 8192e5);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1024e6);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 8192e6);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1024e7);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 8192e7);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1024e8);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 8192e8);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
