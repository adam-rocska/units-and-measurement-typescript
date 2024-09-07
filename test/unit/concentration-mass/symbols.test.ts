import {isConcentrationMassSymbol, concentrationMassSymbols} from '!src/concentration-mass/symbols';

describe('isConcentrationMassSymbol', () => {
  it.each(concentrationMassSymbols)('should return true for %s.', (valid) => {
    expect(isConcentrationMassSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-concentration mass symbol', candidate => {
    expect(isConcentrationMassSymbol(candidate)).toBe(false);
  });
});
