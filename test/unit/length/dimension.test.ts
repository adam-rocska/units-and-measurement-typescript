test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "Mm": [jest.fn(), jest.fn()],
    "kM": [jest.fn(), jest.fn()],
    "hm": [jest.fn(), jest.fn()],
    "dam": [jest.fn(), jest.fn()],
    "m": [jest.fn(), jest.fn()],
    "dm": [jest.fn(), jest.fn()],
    "cm": [jest.fn(), jest.fn()],
    "mm": [jest.fn(), jest.fn()],
    "µm": [jest.fn(), jest.fn()],
    "nm": [jest.fn(), jest.fn()],
    "pm": [jest.fn(), jest.fn()],
    "tw": [jest.fn(), jest.fn()],
    "pt": [jest.fn(), jest.fn()],
    "P": [jest.fn(), jest.fn()],
    "in": [jest.fn(), jest.fn()],
    "ft": [jest.fn(), jest.fn()],
    "yd": [jest.fn(), jest.fn()],
    "mi": [jest.fn(), jest.fn()],
    "smi": [jest.fn(), jest.fn()],
    "ly": [jest.fn(), jest.fn()],
    "NM": [jest.fn(), jest.fn()],
    "ftm": [jest.fn(), jest.fn()],
    "fur": [jest.fn(), jest.fn()],
    "ua": [jest.fn(), jest.fn()],
    "pc": [jest.fn(), jest.fn()]
  };

  const mockLength = {
    "Mm": jest.fn(),
    "kM": jest.fn(),
    "hm": jest.fn(),
    "dam": jest.fn(),
    "m": jest.fn(),
    "dm": jest.fn(),
    "cm": jest.fn(),
    "mm": jest.fn(),
    "µm": jest.fn(),
    "nm": jest.fn(),
    "pm": jest.fn(),
    "tw": jest.fn(),
    "pt": jest.fn(),
    "P": jest.fn(),
    "in": jest.fn(),
    "ft": jest.fn(),
    "yd": jest.fn(),
    "mi": jest.fn(),
    "smi": jest.fn(),
    "ly": jest.fn(),
    "NM": jest.fn(),
    "ftm": jest.fn(),
    "fur": jest.fn(),
    "ua": jest.fn(),
    "pc": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

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

  const lengthDimension = require('!src/length/dimension');
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
