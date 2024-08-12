import {Dimension} from "./dimension";
import {SymbolOf, Unit} from "./unit";

export class Measurement<UnitType extends Unit<any>> {
  public readonly unit: UnitType;
  public readonly value: number;

  public constructor(value: number, unit: UnitType) {
    this.unit = unit;
    this.value = value;
  }

  public convertedTo(
    to: UnitType extends Dimension<any> ? UnitType : never,
  ): Measurement<UnitType> {
    this.assertUnitIsDimension("Cannot convert between different dimensions.");

    const baseValue = this.unit.converter.baseUnitValue(this.value);
    const convertedValue = to.converter.value(baseValue);
    const converted = new Measurement(convertedValue, to);

    return converted;
  }

  /// MARK: Arithmetic operations

  public add(other: Measurement<UnitType>): Measurement<UnitType> {
    if (this.unitIsDimension() && other.unitIsDimension()) return new Measurement(
      this.value + (other.convertedTo(this.unit)).value,
      this.unit
    );
    return new Measurement(this.value + other.value, this.unit);
  }

  public subtract(other: Measurement<UnitType>): Measurement<UnitType> {
    if (this.unitIsDimension() && other.unitIsDimension()) return new Measurement(
      this.value - (other.convertedTo(this.unit)).value,
      this.unit
    );
    return new Measurement(this.value - other.value, this.unit);
  }

  public multiply(other: number): Measurement<UnitType> {
    return new Measurement(this.value * other, this.unit);
  }

  public divide(other: number): Measurement<UnitType> {
    return new Measurement(this.value / other, this.unit);
  }

  /// MARK: Comparison operations

  public equals(other: Measurement<UnitType>): boolean {
    if (this.unitIsDimension() && other.unitIsDimension()) return this.value === (other.convertedTo(this.unit)).value;
    return this.value === other.value;
  }

  public greaterThan(other: Measurement<UnitType>): boolean {
    if (this.unitIsDimension() && other.unitIsDimension()) return this.value > (other.convertedTo(this.unit)).value;
    return this.value > other.value;
  }

  public greaterThanOrEqual(other: Measurement<UnitType>): boolean {
    if (this.unitIsDimension() && other.unitIsDimension()) return this.value >= (other.convertedTo(this.unit)).value;
    return this.value >= other.value;
  }

  public lessThan(other: Measurement<UnitType>): boolean {
    if (this.unitIsDimension() && other.unitIsDimension()) return this.value < (other.convertedTo(this.unit)).value;
    return this.value < other.value;
  }

  public lessThanOrEqual(other: Measurement<UnitType>): boolean {
    if (this.unitIsDimension() && other.unitIsDimension()) return this.value <= (other.convertedTo(this.unit)).value;
    return this.value <= other.value;
  }

  public toString(): MeasurementAsString<this> {return `${this.value}${this.unit.symbol}`;}

  /// MARK: Utility functions to tackle with TypeScript's type system

  /**
   * Type predicate that tells whether the instance's
   * associated unit is a dimension.
   * @returns
   */
  public unitIsDimension(): this is Measurement<Dimension<SymbolOf<UnitType>>> {
    return this.unit instanceof Dimension;
  }

  /**
   * Asserts that the instance's associated unit is a dimension.
   * @param message
   */
  public assertUnitIsDimension(
    message: string = "The unit is not a dimension.",
  ): asserts this is Measurement<Dimension<SymbolOf<UnitType>>> {
    if (!this.unitIsDimension()) throw new Error(message);
  }

}

export type MeasurementAsString<
  M extends Measurement<any>
> = `${M["value"]}${SymbolOf<M["unit"]>}`;
