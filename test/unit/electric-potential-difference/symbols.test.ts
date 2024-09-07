import {isElectricPotentialDifferenceSymbol, electricPotentialDifferenceSymbols} from '!src/electric-potential-difference/symbols';

describe('isElectricPotentialDifferenceSymbol', () => {
  it.each(electricPotentialDifferenceSymbols)('should return true for %s.', (valid) => {
    expect(isElectricPotentialDifferenceSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-electric potential difference symbol', candidate => {
    expect(isElectricPotentialDifferenceSymbol(candidate)).toBe(false);
  });
});
