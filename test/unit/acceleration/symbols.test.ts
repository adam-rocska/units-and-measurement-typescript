import {isAccelerationSymbol, accelerationSymbols} from '!src/acceleration/symbols';

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
