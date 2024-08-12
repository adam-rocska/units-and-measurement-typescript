import {isInformationSymbol, informationSymbols} from '!src/dimensions/information-storage/information/information-symbol';

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
