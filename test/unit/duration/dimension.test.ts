beforeEach(() => {
  vi.resetModules();
});

test("[object Object] dimension", async () => {
  const dimension = {
    dimension: vi.fn(),
    linearConversion: vi.fn()
  };

  const conversions = {
    "sec": [vi.fn(), vi.fn()],
    "min": [vi.fn(), vi.fn()],
    "hr": [vi.fn(), vi.fn()]
  };

  const mockDuration = {
    "sec": vi.fn(),
    "min": vi.fn(),
    "hr": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["sec"])
    .mockReturnValueOnce(conversions["min"])
    .mockReturnValueOnce(conversions["hr"]);


  dimension.dimension.mockReturnValueOnce(mockDuration);

  const durationDimension = await import('!src/duration/dimension');
  expect(durationDimension.duration).toEqual(mockDuration);
  expect(durationDimension.seconds).toBe(mockDuration["sec"]);
  expect(durationDimension.minutes).toBe(mockDuration["min"]);
  expect(durationDimension.hours).toBe(mockDuration["hr"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 60);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 3600);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
