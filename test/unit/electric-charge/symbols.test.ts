import {isElectricChargeSymbol, electricChargeSymbols} from '!src/electric-charge/symbols';

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
