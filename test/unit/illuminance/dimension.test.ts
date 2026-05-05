beforeEach(() => {
  vi.resetModules();
});

test("[object Object] dimension", async () => {
  const dimension = {
    dimension: vi.fn(),
    linearConversion: vi.fn()
  };

  const conversions = {
    "lx": [vi.fn(), vi.fn()]
  };

  const mockIlluminance = {
    "lx": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["lx"]);


  dimension.dimension.mockReturnValueOnce(mockIlluminance);

  const illuminanceDimension = await import('!src/illuminance/dimension');
  expect(illuminanceDimension.illuminance).toEqual(mockIlluminance);
  expect(illuminanceDimension.lux).toBe(mockIlluminance["lx"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
