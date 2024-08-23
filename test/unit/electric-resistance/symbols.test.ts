import {isElectricResistanceSymbol, electricResistanceSymbols} from '!src/electric-resistance/symbols';

describe('isElectricResistanceSymbol', () => {
  it.each(electricResistanceSymbols)('should return true for %s.', (valid) => {
    expect(isElectricResistanceSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-electric resistance symbol', candidate => {
    expect(isElectricResistanceSymbol(candidate)).toBe(false);
  });
});
