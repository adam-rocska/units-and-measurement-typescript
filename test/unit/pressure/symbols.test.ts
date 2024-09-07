import {isPressureSymbol, pressureSymbols} from '!src/pressure/symbols';

describe('isPressureSymbol', () => {
  it.each(pressureSymbols)('should return true for %s.', (valid) => {
    expect(isPressureSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-pressure symbol', candidate => {
    expect(isPressureSymbol(candidate)).toBe(false);
  });
});
