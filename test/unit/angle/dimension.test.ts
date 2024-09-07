test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "°": [jest.fn(), jest.fn()],
    "ʹ": [jest.fn(), jest.fn()],
    "ʺ": [jest.fn(), jest.fn()],
    "rad": [jest.fn(), jest.fn()],
    "grad": [jest.fn(), jest.fn()],
    "rev": [jest.fn(), jest.fn()]
  };

  const mockAngle = {
    "°": jest.fn(),
    "ʹ": jest.fn(),
    "ʺ": jest.fn(),
    "rad": jest.fn(),
    "grad": jest.fn(),
    "rev": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["°"])
    .mockReturnValueOnce(conversions["ʹ"])
    .mockReturnValueOnce(conversions["ʺ"])
    .mockReturnValueOnce(conversions["rad"])
    .mockReturnValueOnce(conversions["grad"])
    .mockReturnValueOnce(conversions["rev"]);


  dimension.dimension.mockReturnValueOnce(mockAngle);

  const angleDimension = require('!src/angle/dimension');
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
