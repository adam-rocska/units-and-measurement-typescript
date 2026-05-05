beforeEach(() => {
  vi.resetModules();
});

test("[object Object] dimension", async () => {
  const dimension = {
    dimension: vi.fn(),
    linearConversion: vi.fn()
  };

  const conversions = {
    "m/s": [vi.fn(), vi.fn()],
    "km/h": [vi.fn(), vi.fn()],
    "mph": [vi.fn(), vi.fn()],
    "kn": [vi.fn(), vi.fn()]
  };

  const mockSpeed = {
    "m/s": vi.fn(),
    "km/h": vi.fn(),
    "mph": vi.fn(),
    "kn": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["m/s"])
    .mockReturnValueOnce(conversions["km/h"])
    .mockReturnValueOnce(conversions["mph"])
    .mockReturnValueOnce(conversions["kn"]);


  dimension.dimension.mockReturnValueOnce(mockSpeed);

  const speedDimension = await import('!src/speed/dimension');
  expect(speedDimension.speed).toEqual(mockSpeed);
  expect(speedDimension.metersPerSecond).toBe(mockSpeed["m/s"]);
  expect(speedDimension.kilometersPerHour).toBe(mockSpeed["km/h"]);
  expect(speedDimension.milesPerHour).toBe(mockSpeed["mph"]);
  expect(speedDimension.knots).toBe(mockSpeed["kn"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1.0);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.277778);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.44704);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.514444);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
