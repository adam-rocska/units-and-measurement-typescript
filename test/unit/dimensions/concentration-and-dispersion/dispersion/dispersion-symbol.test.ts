import {isDispersionSymbol, dispersionSymbols} from '!src/dimensions/concentration-and-dispersion/dispersion/dispersion-symbol';

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
