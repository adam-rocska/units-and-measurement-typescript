import {isElectricChargeSymbol, electricChargeSymbols} from '!src/dimensions/electricity/electric-charge/electric-charge-symbol';

describe('isElectricChargeSymbol', () => {
  it.each(electricChargeSymbols)('should return true for %s.', (valid) => {
    expect(isElectricChargeSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-electric charge symbol', candidate => {
    expect(isElectricChargeSymbol(candidate)).toBe(false);
  });
});
