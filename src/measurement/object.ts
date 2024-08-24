import * as s from "./string";
import * as t from "./tuple";

export class Object<Unit extends string, Value extends number> implements Number, t.Tuple<Unit, Value> {
  private measurement: t.Tuple<Unit, Value>;

  public get value(): Value {return this.measurement[0];}
  public set value(value: Value) {this.measurement = [value, this.unit];}

  public get unit(): Unit {return this.measurement[1];}
  public set unit(unit: Unit) {this.measurement = [this.value, unit];}

  /// MARK: Constructor

  constructor(measurement: s.String<Unit, Value>);
  constructor(measurement: t.Tuple<Unit, Value>);
  constructor(value: Value, unit: Unit);
  constructor(...args: any[]) {
    const [value, unit] = args;
    if (unit === undefined) {
      if (s.isString<Unit, Value>(value)) {
        this.measurement = [s.value(value), s.unit(value)];
        return;
      }
      this.measurement = value;
      return;
    }
    this.measurement = [value, unit];
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
  toLocaleString(...args: Parameters<Number["toLocaleString"]>): string {
    return this.value.toLocaleString(...args);
  }

  /// MARK: Tuple Conformance

  get 0(): Value {return this.measurement[0];}
  get 1(): Unit {return this.measurement[1];}
  get length(): 2 {return this.measurement.length;}
  [n: number]: Unit | Value;

  get concat() {return this.measurement.concat;}
  get join() {return this.measurement.join;}
  get slice() {return this.measurement.slice;}
  get indexOf() {return this.measurement.indexOf;}
  get lastIndexOf() {return this.measurement.lastIndexOf;}
  get every() {return this.measurement.every;}
  get some() {return this.measurement.some;}
  get forEach() {return this.measurement.forEach;}
  get map() {return this.measurement.map;}
  get filter() {return this.measurement.filter;}
  get reduce() {return this.measurement.reduce;}
  get reduceRight() {return this.measurement.reduceRight;}
  get find() {return this.measurement.find;}
  get findIndex() {return this.measurement.findIndex;}
  get entries() {return this.measurement.entries;}
  get keys() {return this.measurement.keys;}
  get values() {return this.measurement.values;}
  get includes() {return this.measurement.includes;}
  get flatMap() {return this.measurement.flatMap;}
  get flat() {return this.measurement.flat;}
  get at() {return this.measurement.at;}
  get findLast() {return this.measurement.findLast;}
  get findLastIndex() {return this.measurement.findLastIndex;}
  get toReversed() {return this.measurement.toReversed;}
  get toSorted() {return this.measurement.toSorted;}
  get toSpliced() {return this.measurement.toSpliced;}
  get with() {return this.measurement.with;}
  get [Symbol.iterator]() {return this.measurement[Symbol.iterator];}
  get [Symbol.unscopables]() {return this.measurement[Symbol.unscopables];}

}