import {isTemperatureSymbol, temperatureSymbols} from '!src/dimensions/energy-heat-and-light/temperature/temperature-symbol';

describe('isTemperatureSymbol', () => {
  it.each(temperatureSymbols)('should return true for %s.', (valid) => {
    expect(isTemperatureSymbol(valid)).toBe(true);
  });

  it.each([
    'frog',
    123,
    undefined,
    null,
  ])('should return false for a non-temperature symbol', candidate => {
    expect(isTemperatureSymbol(candidate)).toBe(false);
  });
});
