import {isAngleSymbol, angleSymbols} from '!src/angle/symbols';

describe('isAngleSymbol', () => {
  it.each(angleSymbols)('should return true for %s.', (valid) => {
    expect(isAngleSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-angle symbol', candidate => {
    expect(isAngleSymbol(candidate)).toBe(false);
  });
});
