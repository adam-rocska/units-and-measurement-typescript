import {isAreaSymbol, areaSymbols} from '!src/area/symbols';

describe('isAreaSymbol', () => {
  it.each(areaSymbols)('should return true for %s.', (valid) => {
    expect(isAreaSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-area symbol', candidate => {
    expect(isAreaSymbol(candidate)).toBe(false);
  });
});
