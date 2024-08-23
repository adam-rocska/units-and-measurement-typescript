import {isLengthSymbol, lengthSymbols} from '!src/length/symbols';

describe('isLengthSymbol', () => {
  it.each(lengthSymbols)('should return true for %s.', (valid) => {
    expect(isLengthSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-length symbol', candidate => {
    expect(isLengthSymbol(candidate)).toBe(false);
  });
});
