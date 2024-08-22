import {isElectricCurrentSymbol, electricCurrentSymbols} from '!src/electric-current/symbols';

describe('isElectricCurrentSymbol', () => {
  it.each(electricCurrentSymbols)('should return true for %s.', (valid) => {
    expect(isElectricCurrentSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-electric current symbol', candidate => {
    expect(isElectricCurrentSymbol(candidate)).toBe(false);
  });
});
