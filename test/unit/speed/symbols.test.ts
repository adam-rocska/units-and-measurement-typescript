import {isSpeedSymbol, speedSymbols} from '!src/speed/symbols';

describe('isSpeedSymbol', () => {
  it.each(speedSymbols)('should return true for %s.', (valid) => {
    expect(isSpeedSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-speed symbol', candidate => {
    expect(isSpeedSymbol(candidate)).toBe(false);
  });
});
