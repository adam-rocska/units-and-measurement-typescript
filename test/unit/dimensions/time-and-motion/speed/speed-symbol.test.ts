import {isSpeedSymbol, speedSymbols} from '!src/dimensions/time-and-motion/speed/speed-symbol';

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
