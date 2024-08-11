import {isAccelerationSymbol, accelerationSymbols} from '!src/dimensions/time-and-motion/acceleration/acceleration-symbol';

describe('isAccelerationSymbol', () => {
  it.each(accelerationSymbols)('should return true for %s.', (valid) => {
    expect(isAccelerationSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-acceleration symbol', candidate => {
    expect(isAccelerationSymbol(candidate)).toBe(false);
  });
});
