import * as s from "./string";
import * as t from "./tuple";

export class Object<Unit extends string, Value extends number> implements Number {
  public readonly value: Value;
  public readonly unit: Unit;

  /// MARK: Constructor

  constructor(measurement: s.String<Unit, Value>);
  constructor(measurement: t.Tuple<Unit, Value>);
  constructor(value: Value, unit: Unit);
  constructor(...args: any[]) {
    const [value, unit] = args;
    if (unit === undefined) {
      if (s.isString<Unit, Value>(value)) {
        this.unit = s.unit(value);
        this.value = s.value(value);
        return;
      }
      this.unit = t.unit(value);
      this.value = t.value(value);
      return;
    }
    this.unit = unit;
    this.value = value;
  }

  /// MARK: Number Conformance

  toString(radix?: number): string {
    return this.value.toString(radix);
  }

  toFixed(fractionDigits?: number): string {
    return this.value.toFixed(fractionDigits);
  }

  toExponential(fractionDigits?: number): string {
    return this.value.toExponential(fractionDigits);
  }

  toPrecision(precision?: number): string {
    return this.value.toPrecision(precision);
  }
  valueOf(): number {
    return this.value;
  }

  toLocaleString(locales?: string | string[], options?: Intl.NumberFormatOptions): string;
  toLocaleString(locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
  toLocaleString(locales?: unknown, options?: unknown): string;
  toLocaleString(...args: any[]): string {
    return this.value.toLocaleString(...args);
  }

}