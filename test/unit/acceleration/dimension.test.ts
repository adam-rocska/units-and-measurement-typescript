beforeEach(() => {
  vi.resetModules();
});

test("[object Object] dimension", async () => {
  const dimension = {
    dimension: vi.fn(),
    linearConversion: vi.fn()
  };

  const conversions = {
    "m/s²": [vi.fn(), vi.fn()],
    "g": [vi.fn(), vi.fn()]
  };

  const mockAcceleration = {
    "m/s²": vi.fn(),
    "g": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["m/s²"])
    .mockReturnValueOnce(conversions["g"]);


  dimension.dimension.mockReturnValueOnce(mockAcceleration);

  const accelerationDimension = await import('!src/acceleration/dimension');
  expect(accelerationDimension.acceleration).toEqual(mockAcceleration);
  expect(accelerationDimension.metersPerSecondSquared).toBe(mockAcceleration["m/s²"]);
  expect(accelerationDimension.gravity).toBe(mockAcceleration["g"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 9.81);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
