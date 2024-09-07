test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "ML": [jest.fn(), jest.fn()],
    "kL": [jest.fn(), jest.fn()],
    "L": [jest.fn(), jest.fn()],
    "dL": [jest.fn(), jest.fn()],
    "cL": [jest.fn(), jest.fn()],
    "mL": [jest.fn(), jest.fn()],
    "km³": [jest.fn(), jest.fn()],
    "m³": [jest.fn(), jest.fn()],
    "dm³": [jest.fn(), jest.fn()],
    "mm³": [jest.fn(), jest.fn()],
    "in³": [jest.fn(), jest.fn()],
    "ft³": [jest.fn(), jest.fn()],
    "yd³": [jest.fn(), jest.fn()],
    "mi³": [jest.fn(), jest.fn()],
    "af": [jest.fn(), jest.fn()],
    "bsh": [jest.fn(), jest.fn()],
    "tsp": [jest.fn(), jest.fn()],
    "tbsp": [jest.fn(), jest.fn()],
    "fl oz": [jest.fn(), jest.fn()],
    "cup": [jest.fn(), jest.fn()],
    "pt": [jest.fn(), jest.fn()],
    "qt": [jest.fn(), jest.fn()],
    "gal": [jest.fn(), jest.fn()],
    "imperial tsp": [jest.fn(), jest.fn()],
    "imperial tbsp": [jest.fn(), jest.fn()],
    "imperial fl oz": [jest.fn(), jest.fn()],
    "imperial pt": [jest.fn(), jest.fn()],
    "imperial qt": [jest.fn(), jest.fn()],
    "imperial gal": [jest.fn(), jest.fn()],
    "metric cup": [jest.fn(), jest.fn()]
  };

  const mockVolume = {
    "ML": jest.fn(),
    "kL": jest.fn(),
    "L": jest.fn(),
    "dL": jest.fn(),
    "cL": jest.fn(),
    "mL": jest.fn(),
    "km³": jest.fn(),
    "m³": jest.fn(),
    "dm³": jest.fn(),
    "mm³": jest.fn(),
    "in³": jest.fn(),
    "ft³": jest.fn(),
    "yd³": jest.fn(),
    "mi³": jest.fn(),
    "af": jest.fn(),
    "bsh": jest.fn(),
    "tsp": jest.fn(),
    "tbsp": jest.fn(),
    "fl oz": jest.fn(),
    "cup": jest.fn(),
    "pt": jest.fn(),
    "qt": jest.fn(),
    "gal": jest.fn(),
    "imperial tsp": jest.fn(),
    "imperial tbsp": jest.fn(),
    "imperial fl oz": jest.fn(),
    "imperial pt": jest.fn(),
    "imperial qt": jest.fn(),
    "imperial gal": jest.fn(),
    "metric cup": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["ML"])
    .mockReturnValueOnce(conversions["kL"])
    .mockReturnValueOnce(conversions["L"])
    .mockReturnValueOnce(conversions["dL"])
    .mockReturnValueOnce(conversions["cL"])
    .mockReturnValueOnce(conversions["mL"])
    .mockReturnValueOnce(conversions["km³"])
    .mockReturnValueOnce(conversions["m³"])
    .mockReturnValueOnce(conversions["dm³"])
    .mockReturnValueOnce(conversions["mm³"])
    .mockReturnValueOnce(conversions["in³"])
    .mockReturnValueOnce(conversions["ft³"])
    .mockReturnValueOnce(conversions["yd³"])
    .mockReturnValueOnce(conversions["mi³"])
    .mockReturnValueOnce(conversions["af"])
    .mockReturnValueOnce(conversions["bsh"])
    .mockReturnValueOnce(conversions["tsp"])
    .mockReturnValueOnce(conversions["tbsp"])
    .mockReturnValueOnce(conversions["fl oz"])
    .mockReturnValueOnce(conversions["cup"])
    .mockReturnValueOnce(conversions["pt"])
    .mockReturnValueOnce(conversions["qt"])
    .mockReturnValueOnce(conversions["gal"])
    .mockReturnValueOnce(conversions["imperial tsp"])
    .mockReturnValueOnce(conversions["imperial tbsp"])
    .mockReturnValueOnce(conversions["imperial fl oz"])
    .mockReturnValueOnce(conversions["imperial pt"])
    .mockReturnValueOnce(conversions["imperial qt"])
    .mockReturnValueOnce(conversions["imperial gal"])
    .mockReturnValueOnce(conversions["metric cup"]);


  dimension.dimension.mockReturnValueOnce(mockVolume);

  const volumeDimension = require('!src/volume/dimension');
  expect(volumeDimension.volume).toEqual(mockVolume);
  expect(volumeDimension.megaliters).toBe(mockVolume["ML"]);
  expect(volumeDimension.kiloliters).toBe(mockVolume["kL"]);
  expect(volumeDimension.liters).toBe(mockVolume["L"]);
  expect(volumeDimension.deciliters).toBe(mockVolume["dL"]);
  expect(volumeDimension.centiliters).toBe(mockVolume["cL"]);
  expect(volumeDimension.milliliters).toBe(mockVolume["mL"]);
  expect(volumeDimension.cubicKilometers).toBe(mockVolume["km³"]);
  expect(volumeDimension.cubicMeters).toBe(mockVolume["m³"]);
  expect(volumeDimension.cubicDecimeters).toBe(mockVolume["dm³"]);
  expect(volumeDimension.cubicMillimeters).toBe(mockVolume["mm³"]);
  expect(volumeDimension.cubicInches).toBe(mockVolume["in³"]);
  expect(volumeDimension.cubicFeet).toBe(mockVolume["ft³"]);
  expect(volumeDimension.cubicYards).toBe(mockVolume["yd³"]);
  expect(volumeDimension.cubicMiles).toBe(mockVolume["mi³"]);
  expect(volumeDimension.acreFeet).toBe(mockVolume["af"]);
  expect(volumeDimension.bushels).toBe(mockVolume["bsh"]);
  expect(volumeDimension.teaspoons).toBe(mockVolume["tsp"]);
  expect(volumeDimension.tablespoons).toBe(mockVolume["tbsp"]);
  expect(volumeDimension.fluidOunces).toBe(mockVolume["fl oz"]);
  expect(volumeDimension.cups).toBe(mockVolume["cup"]);
  expect(volumeDimension.pints).toBe(mockVolume["pt"]);
  expect(volumeDimension.quarts).toBe(mockVolume["qt"]);
  expect(volumeDimension.gallons).toBe(mockVolume["gal"]);
  expect(volumeDimension.imperialTeaspoons).toBe(mockVolume["imperial tsp"]);
  expect(volumeDimension.imperialTablespoons).toBe(mockVolume["imperial tbsp"]);
  expect(volumeDimension.imperialFluidOunces).toBe(mockVolume["imperial fl oz"]);
  expect(volumeDimension.imperialPints).toBe(mockVolume["imperial pt"]);
  expect(volumeDimension.imperialQuarts).toBe(mockVolume["imperial qt"]);
  expect(volumeDimension.imperialGallons).toBe(mockVolume["imperial gal"]);
  expect(volumeDimension.metricCups).toBe(mockVolume["metric cup"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.1);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.01);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e12);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.000001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.0163871);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 28.3168);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 764.555);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 4.168e+12);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.233e+6);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 35.2391);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.00492892);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.0147868);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.0295735);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.24);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.473176);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.946353);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 3.78541);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.00591939);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.0177582);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.0284131);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.568261);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.13652);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 4.54609);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.25);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
