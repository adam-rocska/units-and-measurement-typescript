beforeEach(() => {
  vi.resetModules();
});

test("[object Object] dimension", async () => {
  const dimension = {
    dimension: vi.fn(),
    linearConversion: vi.fn()
  };

  const conversions = {
    "g/L": [vi.fn(), vi.fn()],
    "mg/dL": [vi.fn(), vi.fn()]
  };

  const mockConcentrationMass = {
    "g/L": vi.fn(),
    "mg/dL": vi.fn()
  };

  vi.doMock("!src/dimension", () => dimension);

  dimension
    .linearConversion
    .mockReturnValueOnce(conversions["g/L"])
    .mockReturnValueOnce(conversions["mg/dL"]);


  dimension.dimension.mockReturnValueOnce(mockConcentrationMass);

  const concentrationMassDimension = await import('!src/concentration-mass/dimension');
  expect(concentrationMassDimension.concentrationMass).toEqual(mockConcentrationMass);
  expect(concentrationMassDimension.gramsPerLiter).toBe(mockConcentrationMass["g/L"]);
  expect(concentrationMassDimension.milligramsPerDeciliter).toBe(mockConcentrationMass["mg/dL"]);

  let conversionCall = 1;
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 1);
  expect(dimension.linearConversion).toHaveBeenNthCalledWith(conversionCall++, 0.01);

  expect(dimension.dimension).toHaveBeenCalledTimes(1);
  expect(dimension.dimension).toHaveBeenCalledWith(conversions);
});
