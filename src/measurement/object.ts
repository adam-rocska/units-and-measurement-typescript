import * as string from "./string";
import * as tuple from "./tuple";

export class Object<Unit extends string, Value extends number> {
  public readonly value: Value;
  public readonly unit: Unit;

  constructor(measurement: string.String<Unit, Value>);
  constructor(measurement: tuple.Tuple<Unit, Value>);
  constructor(value: Value, unit: Unit);
  constructor(...args: any[]) {
    const [value, unit] = args;
    if (unit === undefined) {
      if (string.isString<Unit, Value>(value)) {
        this.unit = string.unit(value);
        this.value = string.value(value);
        return;
      }
      this.unit = tuple.unit(value);
      this.value = tuple.value(value);
      return;
    }
    this.unit = unit;
    this.value = value;
  }
}