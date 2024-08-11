import {isElectricPotentialDifferenceSymbol, electricPotentialDifferenceSymbols} from '!src/dimensions/electricity/electric-potential-difference/electric-potential-difference-symbol';

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
