import {valueToBase} from '!/src/unit-converters/linear-unit-converter';

describe('valueToBase', () => {
  it('should return an invertible function that converts the value to the base unit.', async () => {
    const converter = valueToBase(2, 3);
    expect(await converter(10)).toBe((10 * 2) + 3);
    expect(await converter.inverse((10 * 2) + 3)).toBe(10);
  });

  it('should return an invertible function that converts the value to the base unit with a default constant.', async () => {
    const converter = valueToBase(2);
    expect(await converter(10)).toBe(20);
    expect(await converter.inverse(20)).toBe(10);
  });
});