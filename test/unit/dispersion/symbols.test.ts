import {isDispersionSymbol, dispersionSymbols} from '!src/dispersion/symbols';

describe('isDispersionSymbol', () => {
  it.each(dispersionSymbols)('should return true for %s.', (valid) => {
    expect(isDispersionSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-dispersion symbol', candidate => {
    expect(isDispersionSymbol(candidate)).toBe(false);
  });
});
