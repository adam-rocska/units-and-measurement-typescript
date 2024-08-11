import {isPowerSymbol, powerSymbols} from '!src/dimensions/energy-heat-and-light/power/power-symbol';

describe('isPowerSymbol', () => {
  it.each(powerSymbols)('should return true for %s.', (valid) => {
    expect(isPowerSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-power symbol', candidate => {
    expect(isPowerSymbol(candidate)).toBe(false);
  });
});
