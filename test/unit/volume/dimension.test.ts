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
    "ML": [vi.fn(), vi.fn()],
    "kL": [vi.fn(), vi.fn()],
    "L": [vi.fn(), vi.fn()],
    "dL": [vi.fn(), vi.fn()],
    "cL": [vi.fn(), vi.fn()],
    "mL": [vi.fn(), vi.fn()],
    "km³": [vi.fn(), vi.fn()],
    "m³": [vi.fn(), vi.fn()],
    "dm³": [vi.fn(), vi.fn()],
    "mm³": [vi.fn(), vi.fn()],
    "in³": [vi.fn(), vi.fn()],
    "ft³": [vi.fn(), vi.fn()],
    "yd³": [vi.fn(), vi.fn()],
    "mi³": [vi.fn(), vi.fn()],
    "af": [vi.fn(), vi.fn()],
    "bsh": [vi.fn(), vi.fn()],
    "tsp": [vi.fn(), vi.fn()],
    "tbsp": [vi.fn(), vi.fn()],
    "fl oz": [vi.fn(), vi.fn()],
    "cup": [vi.fn(), vi.fn()],
    "pt": [vi.fn(), vi.fn()],
    "qt": [vi.fn(), vi.fn()],
    "gal": [vi.fn(), vi.fn()],
    "imperial tsp": [vi.fn(), vi.fn()],
    "imperial tbsp": [vi.fn(), vi.fn()],
    "imperial fl oz": [vi.fn(), vi.fn()],
    "imperial pt": [vi.fn(), vi.fn()],
    "imperial qt": [vi.fn(), vi.fn()],
    "imperial gal": [vi.fn(), vi.fn()],
    "metric cup": [vi.fn(), vi.fn()]
  };

  const mockVolume = {
    "ML": vi.fn(),
    "kL": vi.fn(),
    "L": vi.fn(),
    "dL": vi.fn(),
    "cL": vi.fn(),
    "mL": vi.fn(),
    "km³": vi.fn(),
    "m³": vi.fn(),
    "dm³": vi.fn(),
    "mm³": vi.fn(),
    "in³": vi.fn(),
    "ft³": vi.fn(),
    "yd³": vi.fn(),
    "mi³": vi.fn(),
    "af": vi.fn(),
    "bsh": vi.fn(),
    "tsp": vi.fn(),
    "tbsp": vi.fn(),
    "fl oz": vi.fn(),
    "cup": vi.fn(),
    "pt": vi.fn(),
    "qt": vi.fn(),
    "gal": vi.fn(),
    "imperial tsp": vi.fn(),
    "imperial tbsp": vi.fn(),
    "imperial fl oz": vi.fn(),
    "imperial pt": vi.fn(),
    "imperial qt": vi.fn(),
    "imperial gal": vi.fn(),
    "metric cup": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

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

  const volumeDimension = await import('!src/volume/dimension');
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
