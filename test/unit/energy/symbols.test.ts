import {isEnergySymbol, energySymbols} from '!src/energy/symbols';

describe('isEnergySymbol', () => {
  it.each(energySymbols)('should return true for %s.', (valid) => {
    expect(isEnergySymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-energy symbol', candidate => {
    expect(isEnergySymbol(candidate)).toBe(false);
  });
});
