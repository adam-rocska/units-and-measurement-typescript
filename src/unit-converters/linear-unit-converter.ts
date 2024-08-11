import {UnitConverter} from "../unit-converter";

/**
 * A linear unit converter.
 *
 * @description
 * A linear unit converter converts a value to the base unit
 * by multiplying (or dividing) by a coefficient and adding
 * (or subtracting) a constant.
 */
export class LinearUnitConverter implements UnitConverter {
  /**
   * The coefficient to multiply (or divide) by.
   */
  readonly coefficient: number;
  /**
   * The constant to add (or subtract).
   */
  readonly constant: number;

  /**
   * Creates a new linear unit converter.
   * @param coefficient The coefficient to multiply (or divide) by.
   * @param constant The constant to add (or subtract).
   */
  public constructor(coefficient: number, constant: number = 0) {
    this.coefficient = coefficient;
    this.constant = constant;
  }

  /**
   * Converts the value to the base unit.
   * @param fromValue The value to convert to the base unit.
   */
  baseUnitValue(fromValue: number): number {
    return (fromValue - this.constant) / this.coefficient;
  }

  /**
   * Converts the base unit value to the unit value.
   * @param fromBaseUnitValue The base unit value to convert to the unit value.
   */
  value(fromBaseUnitValue: number): number {
    return fromBaseUnitValue * this.coefficient + this.constant;
  }

}