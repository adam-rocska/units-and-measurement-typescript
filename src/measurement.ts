import {Dimension} from "./dimension";
import {SymbolOf, Unit} from "./unit";
// import {InvariantOf} from "type-fest";

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
    if (!(this.unit instanceof Dimension)) throw new Error("Cannot convert between different dimensions.");
    if (!(to instanceof Dimension)) throw new Error("Cannot convert to a non-dimension unit.");
    if (!(to instanceof this.unit.constructor)) throw new Error("Cannot convert between different dimensions.");

    const baseValue = this.unit.converter.baseUnitValue(this.value);
    const convertedValue = to.converter.value(baseValue);
    const converted = new Measurement(convertedValue, to);

    return converted;
  }

  // public add(
  //   other: UnitType extends Dimension<any>
  //     ? Measurement<UnitType>
  //     : Measurement<InvariantOf<UnitType>>,
  // ): Measurement<UnitType> {
  //   if (this.unit instanceof Dimension && other.unit instanceof Dimension) {
  //     const convertedOther = other.convertedTo(this.unit);
  //     return new Measurement(this.value + convertedOther.value, this.unit);
  //   })
  // }

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
