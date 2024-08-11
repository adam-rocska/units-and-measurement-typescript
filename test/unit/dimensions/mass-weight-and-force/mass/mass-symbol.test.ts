import {isMassSymbol, massSymbols} from '!src/dimensions/mass-weight-and-force/mass/mass-symbol';

describe('isMassSymbol', () => {
  it.each(massSymbols)('should return true for %s.', (valid) => {
    expect(isMassSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-mass symbol', candidate => {
    expect(isMassSymbol(candidate)).toBe(false);
  });
});
