import {isDurationSymbol, durationSymbols} from '!src/dimensions/time-and-motion/duration/duration-symbol';

describe('isDurationSymbol', () => {
  it.each(durationSymbols)('should return true for %s.', (valid) => {
    expect(isDurationSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-duration symbol', candidate => {
    expect(isDurationSymbol(candidate)).toBe(false);
  });
});
