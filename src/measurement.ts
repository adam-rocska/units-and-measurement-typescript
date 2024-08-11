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
}
