import {Dimension} from "./dimension";
import {Unit} from "./unit";

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

  public add(other: Measurement<UnitType>): Measurement<UnitType>;
  public add<OtherUnitType extends UnitType>(
    other: UnitType extends Dimension<any> ? Measurement<OtherUnitType> : never,
  ): Measurement<UnitType> {
    if (this.unit === other.unit) return new Measurement(this.value + other.value, this.unit);

    if (!(this.unit instanceof Dimension)) throw new Error("Cannot add measurements of different dimensions.");
    if (!(other.unit instanceof Dimension)) throw new Error("Cannot add measurements of different dimensions.");
    if (!(this.unit instanceof other.unit.constructor)) throw new Error("Cannot add measurements of different dimensions.");

    return new Measurement((this.value + other.value), this.unit);
  }

  public static add<UnitType extends Unit<any>>(
    left: Measurement<UnitType>,
    right: Measurement<UnitType>,
  ): Measurement<UnitType> {
    if (left.unit === right.unit) return new Measurement(left.value + right.value, left.unit);

    if (!(left.unit instanceof Dimension)) throw new Error("Cannot add measurements of different dimensions.");
    if (!(right.unit instanceof Dimension)) throw new Error("Cannot add measurements of different dimensions.");
    if (!(left.unit instanceof right.unit.constructor)) throw new Error("Cannot add measurements of different dimensions.");

    return new Measurement((left.value + right.value), left.unit);
  }

  public subtract(other: Measurement<UnitType>): Measurement<UnitType>;
  public subtract<OtherUnitType extends UnitType>(
    other: UnitType extends Dimension<any> ? Measurement<OtherUnitType> : never,
  ): Measurement<UnitType> {
    if (this.unit === other.unit) return new Measurement(this.value - other.value, this.unit);

    if (!(this.unit instanceof Dimension)) throw new Error("Cannot subtract measurements of different dimensions.");
    if (!(other.unit instanceof Dimension)) throw new Error("Cannot subtract measurements of different dimensions.");
    if (!(this.unit instanceof other.unit.constructor)) throw new Error("Cannot subtract measurements of different dimensions.");

    return new Measurement((this.value - other.value), this.unit);
  }

  public static subtract<UnitType extends Unit<any>>(
    left: Measurement<UnitType>,
    right: Measurement<UnitType>,
  ): Measurement<UnitType> {
    if (left.unit === right.unit) return new Measurement(left.value - right.value, left.unit);

    if (!(left.unit instanceof Dimension)) throw new Error("Cannot subtract measurements of different dimensions.");
    if (!(right.unit instanceof Dimension)) throw new Error("Cannot subtract measurements of different dimensions.");
    if (!(left.unit instanceof right.unit.constructor)) throw new Error("Cannot subtract measurements of different dimensions.");

    return new Measurement((left.value - right.value), left.unit);
  }

  public multiply(scalar: number): Measurement<UnitType> {
    return new Measurement(this.value * scalar, this.unit);
  }

  public divide(scalar: number): Measurement<UnitType> {
    return new Measurement(this.value / scalar, this.unit);
  }

  public equals(other: Measurement<UnitType>): boolean;
  public equals<OtherUnitType extends UnitType>(
    other: UnitType extends Dimension<any> ? Measurement<OtherUnitType> : never,
  ): boolean {
    if (this.unit !== other.unit) return false;
    return this.value === other.value;
  }

  public static equals<UnitType extends Unit<any>>(
    left: Measurement<UnitType>,
    right: Measurement<UnitType>,
  ): boolean {
    if (left.unit !== right.unit) return false;
    return left.value === right.value;
  }

  public lessThan(other: Measurement<UnitType>): boolean;
  public lessThan<OtherUnitType extends UnitType>(
    other: UnitType extends Dimension<any> ? Measurement<OtherUnitType> : never,
  ): boolean {
    if (this.unit !== other.unit) throw new Error("Cannot compare measurements of different dimensions.");
    return this.value < other.value;
  }

  public static lessThan<UnitType extends Unit<any>>(
    left: Measurement<UnitType>,
    right: Measurement<UnitType>,
  ): boolean {
    if (left.unit !== right.unit) throw new Error("Cannot compare measurements of different dimensions.");
    return left.value < right.value;
  }

  public lessThanOrEqualTo(other: Measurement<UnitType>): boolean;
  public lessThanOrEqualTo<OtherUnitType extends UnitType>(
    other: UnitType extends Dimension<any> ? Measurement<OtherUnitType> : never,
  ): boolean {
    if (this.unit !== other.unit) throw new Error("Cannot compare measurements of different dimensions.");
    return this.value <= other.value;
  }

  public static lessThanOrEqualTo<UnitType extends Unit<any>>(
    left: Measurement<UnitType>,
    right: Measurement<UnitType>,
  ): boolean {
    if (left.unit !== right.unit) throw new Error("Cannot compare measurements of different dimensions.");
    return left.value <= right.value;
  }

  public greaterThan(other: Measurement<UnitType>): boolean;
  public greaterThan<OtherUnitType extends UnitType>(
    other: UnitType extends Dimension<any> ? Measurement<OtherUnitType> : never,
  ): boolean {
    if (this.unit !== other.unit) throw new Error("Cannot compare measurements of different dimensions.");
    return this.value > other.value;
  }

  public static greaterThan<UnitType extends Unit<any>>(
    left: Measurement<UnitType>,
    right: Measurement<UnitType>,
  ): boolean {
    if (left.unit !== right.unit) throw new Error("Cannot compare measurements of different dimensions.");
    return left.value > right.value;
  }

  public greaterThanOrEqualTo(other: Measurement<UnitType>): boolean;
  public greaterThanOrEqualTo<OtherUnitType extends UnitType>(
    other: UnitType extends Dimension<any> ? Measurement<OtherUnitType> : never,
  ): boolean {
    if (this.unit !== other.unit) throw new Error("Cannot compare measurements of different dimensions.");
    return this.value >= other.value;
  }

  public static greaterThanOrEqualTo<UnitType extends Unit<any>>(
    left: Measurement<UnitType>,
    right: Measurement<UnitType>,
  ): boolean {
    if (left.unit !== right.unit) throw new Error("Cannot compare measurements of different dimensions.");
    return left.value >= right.value;
  }

}
