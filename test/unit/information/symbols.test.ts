import {isInformationSymbol, informationSymbols} from '!src/information/symbols';

describe('isInformationSymbol', () => {
  it.each(informationSymbols)('should return true for %s.', (valid) => {
    expect(isInformationSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-information symbol', candidate => {
    expect(isInformationSymbol(candidate)).toBe(false);
  });
});
