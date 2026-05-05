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
    "ppm": [vi.fn(), vi.fn()],
    "ppb": [vi.fn(), vi.fn()],
    "ppt": [vi.fn(), vi.fn()]
  };

  const mockDispersion = {
    "ppm": vi.fn(),
    "ppb": vi.fn(),
    "ppt": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["ppm"])
    .mockReturnValueOnce(conversions["ppb"])
    .mockReturnValueOnce(conversions["ppt"]);


  dimension.dimension.mockReturnValueOnce(mockDispersion);

  const dispersionDimension = await import('!src/dispersion/dimension');
  expect(dispersionDimension.dispersion).toEqual(mockDispersion);
  expect(dispersionDimension.partsPerMillion).toBe(mockDispersion["ppm"]);
  expect(dispersionDimension.partsPerBillion).toBe(mockDispersion["ppb"]);
  expect(dispersionDimension.partsPerTrillion).toBe(mockDispersion["ppt"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-3);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1e-6);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
