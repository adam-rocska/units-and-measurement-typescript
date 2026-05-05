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
    "°": [vi.fn(), vi.fn()],
    "ʹ": [vi.fn(), vi.fn()],
    "ʺ": [vi.fn(), vi.fn()],
    "rad": [vi.fn(), vi.fn()],
    "grad": [vi.fn(), vi.fn()],
    "rev": [vi.fn(), vi.fn()]
  };

  const mockAngle = {
    "°": vi.fn(),
    "ʹ": vi.fn(),
    "ʺ": vi.fn(),
    "rad": vi.fn(),
    "grad": vi.fn(),
    "rev": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["°"])
    .mockReturnValueOnce(conversions["ʹ"])
    .mockReturnValueOnce(conversions["ʺ"])
    .mockReturnValueOnce(conversions["rad"])
    .mockReturnValueOnce(conversions["grad"])
    .mockReturnValueOnce(conversions["rev"]);


  dimension.dimension.mockReturnValueOnce(mockAngle);

  const angleDimension = await import('!src/angle/dimension');
  expect(angleDimension.angle).toEqual(mockAngle);
  expect(angleDimension.degrees).toBe(mockAngle["°"]);
  expect(angleDimension.arcMinutes).toBe(mockAngle["ʹ"]);
  expect(angleDimension.arcSeconds).toBe(mockAngle["ʺ"]);
  expect(angleDimension.radians).toBe(mockAngle["rad"]);
  expect(angleDimension.gradians).toBe(mockAngle["grad"]);
  expect(angleDimension.revolutions).toBe(mockAngle["rev"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1 / 60);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1 / 60 / 60);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 180 / Math.PI);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 9 / 10);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 360);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
