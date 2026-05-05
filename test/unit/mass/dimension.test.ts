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
    "kg": [vi.fn(), vi.fn()],
    "g": [vi.fn(), vi.fn()],
    "dg": [vi.fn(), vi.fn()],
    "cg": [vi.fn(), vi.fn()],
    "mg": [vi.fn(), vi.fn()],
    "µg": [vi.fn(), vi.fn()],
    "ng": [vi.fn(), vi.fn()],
    "pg": [vi.fn(), vi.fn()],
    "oz": [vi.fn(), vi.fn()],
    "lb": [vi.fn(), vi.fn()],
    "st": [vi.fn(), vi.fn()],
    "t": [vi.fn(), vi.fn()],
    "ton": [vi.fn(), vi.fn()],
    "ct": [vi.fn(), vi.fn()],
    "oz t": [vi.fn(), vi.fn()],
    "slug": [vi.fn(), vi.fn()]
  };

  const mockMass = {
    "kg": vi.fn(),
    "g": vi.fn(),
    "dg": vi.fn(),
    "cg": vi.fn(),
    "mg": vi.fn(),
    "µg": vi.fn(),
    "ng": vi.fn(),
    "pg": vi.fn(),
    "oz": vi.fn(),
    "lb": vi.fn(),
    "st": vi.fn(),
    "t": vi.fn(),
    "ton": vi.fn(),
    "ct": vi.fn(),
    "oz t": vi.fn(),
    "slug": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["kg"])
    .mockReturnValueOnce(conversions["g"])
    .mockReturnValueOnce(conversions["dg"])
    .mockReturnValueOnce(conversions["cg"])
    .mockReturnValueOnce(conversions["mg"])
    .mockReturnValueOnce(conversions["µg"])
    .mockReturnValueOnce(conversions["ng"])
    .mockReturnValueOnce(conversions["pg"])
    .mockReturnValueOnce(conversions["oz"])
    .mockReturnValueOnce(conversions["lb"])
    .mockReturnValueOnce(conversions["st"])
    .mockReturnValueOnce(conversions["t"])
    .mockReturnValueOnce(conversions["ton"])
    .mockReturnValueOnce(conversions["ct"])
    .mockReturnValueOnce(conversions["oz t"])
    .mockReturnValueOnce(conversions["slug"]);


  dimension.dimension.mockReturnValueOnce(mockMass);

  const massDimension = await import('!src/mass/dimension');
  expect(massDimension.mass).toEqual(mockMass);
  expect(massDimension.kilograms).toBe(mockMass["kg"]);
  expect(massDimension.grams).toBe(mockMass["g"]);
  expect(massDimension.decigrams).toBe(mockMass["dg"]);
  expect(massDimension.centigrams).toBe(mockMass["cg"]);
  expect(massDimension.milligrams).toBe(mockMass["mg"]);
  expect(massDimension.micrograms).toBe(mockMass["µg"]);
  expect(massDimension.nanograms).toBe(mockMass["ng"]);
  expect(massDimension.picograms).toBe(mockMass["pg"]);
  expect(massDimension.ounces).toBe(mockMass["oz"]);
  expect(massDimension.pounds).toBe(mockMass["lb"]);
  expect(massDimension.stones).toBe(mockMass["st"]);
  expect(massDimension.metricTons).toBe(mockMass["t"]);
  expect(massDimension.shortTons).toBe(mockMass["ton"]);
  expect(massDimension.carats).toBe(mockMass["ct"]);
  expect(massDimension.ouncesTroy).toBe(mockMass["oz t"]);
  expect(massDimension.slugs).toBe(mockMass["slug"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.0001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.00001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.000001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-9);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-12);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-15);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.0283495);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.453592);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.157473);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 907.185);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.0002);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.03110348);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 14.5939);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
