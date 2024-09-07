test("[object Object] dimension", () => {
  const dimension = {
    dimension: jest.fn(),
    linearConversion: jest.fn()
  };

  const conversions = {
    "g/L": [jest.fn(), jest.fn()],
    "mg/dL": [jest.fn(), jest.fn()]
  };

  const mockConcentrationMass = {
    "g/L": jest.fn(),
    "mg/dL": jest.fn()
  };

  jest.clearAllMocks();
  jest.mock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["g/L"])
    .mockReturnValueOnce(conversions["mg/dL"]);


  dimension.dimension.mockReturnValueOnce(mockConcentrationMass);

  const concentrationMassDimension = require('!src/concentration-mass/dimension');
  expect(concentrationMassDimension.concentrationMass).toEqual(mockConcentrationMass);
  expect(concentrationMassDimension.gramsPerLiter).toBe(mockConcentrationMass["g/L"]);
  expect(concentrationMassDimension.milligramsPerDeciliter).toBe(mockConcentrationMass["mg/dL"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.01);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
