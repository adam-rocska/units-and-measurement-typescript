import {LinearUnitConverter} from '!/src/unit-converters/linear-unit-converter';

describe('LinearUnitConverter', () => {
  describe('.constructor', () => {
    it('should store the provided coefficient and constant values.', () => {
      const converter = new LinearUnitConverter(2, 3);
      expect(converter.coefficient).toBe(2);
      expect(converter.constant).toBe(3);
    });

    it('should default the constant to 0 if not provided.', () => {
      const converter = new LinearUnitConverter(2);
      expect(converter.constant).toBe(0);
    });
  });

  describe('#base()', () => {
    it('should convert the value to the base unit.', () => {
      const converter = new LinearUnitConverter(2, 3);
      expect(converter.base(10)).toBe((10 * 2) + 3);
    });

    it('should convert the value to the base unit with a default constant.', () => {
      const converter = new LinearUnitConverter(2);
      expect(converter.base(10)).toBe(20);
    });
  });

  describe('#value', () => {
    it('should convert the value from the base unit.', () => {
      const converter = new LinearUnitConverter(2, 3);
      expect(converter.value(5)).toBe((5 - 3) / 2);
    });

    it('should convert the value from the base unit with a default constant.', () => {
      const converter = new LinearUnitConverter(2);
      expect(converter.value(10)).toBe(10 / 2);
    });
  });

});