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
}

