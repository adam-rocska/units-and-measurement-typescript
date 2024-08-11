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

  describe('#baseUnitValue()', () => {
    it('should convert the value to the base unit.', () => {
      const converter = new LinearUnitConverter(2, 3);
      expect(converter.baseUnitValue(10)).toBe((10 - 3) / 2);
    });

    it('should convert the value to the base unit with a default constant.', () => {
      const converter = new LinearUnitConverter(2);
      expect(converter.baseUnitValue(10)).toBe((10 - 0) / 2);
    });
  });

  describe('#value', () => {
    it('should convert the value from the base unit.', () => {
      const converter = new LinearUnitConverter(2, 3);
      expect(converter.value(3.5)).toBe(3.5 * 2 + 3);
    });

    it('should convert the value from the base unit with a default constant.', () => {
      const converter = new LinearUnitConverter(2);
      expect(converter.value(5)).toBe(5 * 2 + 0);
    });
  });

});