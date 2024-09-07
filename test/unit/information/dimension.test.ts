test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "b": [jest.fn(), jest.fn()],
    "B": [jest.fn(), jest.fn()],
    "kb": [jest.fn(), jest.fn()],
    "Mb": [jest.fn(), jest.fn()],
    "Gb": [jest.fn(), jest.fn()],
    "Tb": [jest.fn(), jest.fn()],
    "Pb": [jest.fn(), jest.fn()],
    "Eb": [jest.fn(), jest.fn()],
    "Zb": [jest.fn(), jest.fn()],
    "Yb": [jest.fn(), jest.fn()],
    "Kib": [jest.fn(), jest.fn()],
    "KB": [jest.fn(), jest.fn()],
    "Mib": [jest.fn(), jest.fn()],
    "MB": [jest.fn(), jest.fn()],
    "Gib": [jest.fn(), jest.fn()],
    "GB": [jest.fn(), jest.fn()],
    "Tib": [jest.fn(), jest.fn()],
    "TB": [jest.fn(), jest.fn()],
    "Pib": [jest.fn(), jest.fn()],
    "PB": [jest.fn(), jest.fn()],
    "Eib": [jest.fn(), jest.fn()],
    "EB": [jest.fn(), jest.fn()],
    "Zib": [jest.fn(), jest.fn()],
    "ZB": [jest.fn(), jest.fn()],
    "Yib": [jest.fn(), jest.fn()],
    "YB": [jest.fn(), jest.fn()]
  };

  const mockInformation = {
    "b": jest.fn(),
    "B": jest.fn(),
    "kb": jest.fn(),
    "Mb": jest.fn(),
    "Gb": jest.fn(),
    "Tb": jest.fn(),
    "Pb": jest.fn(),
    "Eb": jest.fn(),
    "Zb": jest.fn(),
    "Yb": jest.fn(),
    "Kib": jest.fn(),
    "KB": jest.fn(),
    "Mib": jest.fn(),
    "MB": jest.fn(),
    "Gib": jest.fn(),
    "GB": jest.fn(),
    "Tib": jest.fn(),
    "TB": jest.fn(),
    "Pib": jest.fn(),
    "PB": jest.fn(),
    "Eib": jest.fn(),
    "EB": jest.fn(),
    "Zib": jest.fn(),
    "ZB": jest.fn(),
    "Yib": jest.fn(),
    "YB": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

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

  const informationDimension = require('!src/information/dimension');
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
