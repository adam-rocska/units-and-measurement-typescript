export interface UnitConverter {
  /**
   * Converts the value to the base unit.
   * @param fromValue  The value to convert to the base unit.
   */
  base(fromValue: number): number;

  /**
   * Converts the base unit value to the unit value.
   * @param fromBaseUnitValue  The base unit value to convert to the unit value.
   */
  value(fromBaseUnitValue: number): number;
}