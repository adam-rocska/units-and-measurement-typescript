import {isVolumeSymbol, volumeSymbols} from '!src/volume/symbols';

describe('isVolumeSymbol', () => {
  it.each(volumeSymbols)('should return true for %s.', (valid) => {
    expect(isVolumeSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-volume symbol', candidate => {
    expect(isVolumeSymbol(candidate)).toBe(false);
  });
});
