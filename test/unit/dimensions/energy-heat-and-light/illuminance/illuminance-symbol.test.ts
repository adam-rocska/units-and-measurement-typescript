import {isIlluminanceSymbol, illuminanceSymbols} from '!src/dimensions/energy-heat-and-light/illuminance/illuminance-symbol';

describe('isIlluminanceSymbol', () => {
  it.each(illuminanceSymbols)('should return true for %s.', (valid) => {
    expect(isIlluminanceSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-illuminance symbol', candidate => {
    expect(isIlluminanceSymbol(candidate)).toBe(false);
  });
});
