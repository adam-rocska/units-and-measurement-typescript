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
    "TW": [vi.fn(), vi.fn()],
    "GW": [vi.fn(), vi.fn()],
    "MW": [vi.fn(), vi.fn()],
    "kW": [vi.fn(), vi.fn()],
    "W": [vi.fn(), vi.fn()],
    "mW": [vi.fn(), vi.fn()],
    "µW": [vi.fn(), vi.fn()],
    "nW": [vi.fn(), vi.fn()],
    "pW": [vi.fn(), vi.fn()],
    "fW": [vi.fn(), vi.fn()],
    "hp": [vi.fn(), vi.fn()]
  };

  const mockPower = {
    "TW": vi.fn(),
    "GW": vi.fn(),
    "MW": vi.fn(),
    "kW": vi.fn(),
    "W": vi.fn(),
    "mW": vi.fn(),
    "µW": vi.fn(),
    "nW": vi.fn(),
    "pW": vi.fn(),
    "fW": vi.fn(),
    "hp": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["TW"])
    .mockReturnValueOnce(conversions["GW"])
    .mockReturnValueOnce(conversions["MW"])
    .mockReturnValueOnce(conversions["kW"])
    .mockReturnValueOnce(conversions["W"])
    .mockReturnValueOnce(conversions["mW"])
    .mockReturnValueOnce(conversions["µW"])
    .mockReturnValueOnce(conversions["nW"])
    .mockReturnValueOnce(conversions["pW"])
    .mockReturnValueOnce(conversions["fW"])
    .mockReturnValueOnce(conversions["hp"]);


  dimension.dimension.mockReturnValueOnce(mockPower);

  const powerDimension = await import('!src/power/dimension');
  expect(powerDimension.power).toEqual(mockPower);
  expect(powerDimension.terawatts).toBe(mockPower["TW"]);
  expect(powerDimension.gigawatts).toBe(mockPower["GW"]);
  expect(powerDimension.megawatts).toBe(mockPower["MW"]);
  expect(powerDimension.kilowatts).toBe(mockPower["kW"]);
  expect(powerDimension.watts).toBe(mockPower["W"]);
  expect(powerDimension.milliwatts).toBe(mockPower["mW"]);
  expect(powerDimension.microwatts).toBe(mockPower["µW"]);
  expect(powerDimension.nanowatts).toBe(mockPower["nW"]);
  expect(powerDimension.picowatts).toBe(mockPower["pW"]);
  expect(powerDimension.femtowatts).toBe(mockPower["fW"]);
  expect(powerDimension.horsepower).toBe(mockPower["hp"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e12);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e9);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1000.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.000001);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-9);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-12);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-15);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 745.7);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
