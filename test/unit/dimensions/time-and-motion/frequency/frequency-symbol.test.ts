import {isFrequencySymbol, frequencySymbols} from '!src/dimensions/time-and-motion/frequency/frequency-symbol';

describe('isFrequencySymbol', () => {
  it.each(frequencySymbols)('should return true for %s.', (valid) => {
    expect(isFrequencySymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-frequency symbol', candidate => {
    expect(isFrequencySymbol(candidate)).toBe(false);
  });
});
