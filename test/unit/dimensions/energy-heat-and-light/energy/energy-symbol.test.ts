import {isEnergySymbol, energySymbols} from '!src/dimensions/energy-heat-and-light/energy/energy-symbol';

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
