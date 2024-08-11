import {isAreaSymbol, areaSymbols} from '!src/dimensions/physical/area/area-symbol';

describe('isAreaSymbol', () => {
  it.each(areaSymbols)('should return true for %s.', (valid) => {
    expect(isAreaSymbol(valid)).toBe(true);
  });

  it.each([
    'kg',
    'm/s',
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-area symbol', () => {
    expect(isAreaSymbol('kg')).toBe(false);
  });
});