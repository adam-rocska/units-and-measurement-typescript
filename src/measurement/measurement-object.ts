import {type Tuple} from "./tuple";
import {type Measurement, unit, value} from "./measurement";

export class MeasurementObject<Unit extends string, Value extends number> implements Number, Tuple<Unit, Value> {
  protected readonly measurement: Tuple<Unit, Value>;

  public get value(): Value {return value(this.measurement);}
  public get unit(): Unit {return unit(this.measurement);}

  /// MARK: Constructor

  constructor(measurement: Measurement<Unit, Value>);
  constructor(value: Value, unit: Unit);
  constructor(
    ...[arg1, arg2]:
      | [arg1: Measurement<Unit, Value>]
      | [arg1: Value, arg2: Unit]
  ) {
    this.measurement = typeof arg1 === "number"
      ? [arg1, arg2!]
      : [value(arg1), unit(arg1)];
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

  /// MARK: Arithmetic Operations

  public add(measurement: Measurement<Unit, number>): MeasurementObject<Unit, number>;
  public add(value: number): MeasurementObject<Unit, number>;
  public add(
    v:
      | Measurement<Unit, number>
      | number
  ): MeasurementObject<Unit, number> {
    if (typeof v === "number") return new MeasurementObject(this.value + v, this.unit);
    return new MeasurementObject(this.value + value(v), this.unit);
  }

  public subtract(measurement: Measurement<Unit, number>): MeasurementObject<Unit, number>;
  public subtract(value: number): MeasurementObject<Unit, number>;
  public subtract(
    v:
      | Measurement<Unit, number>
      | number
  ): MeasurementObject<Unit, number> {
    if (typeof v === "number") return new MeasurementObject(this.value - v, this.unit);
    return new MeasurementObject(this.value - value(v), this.unit);
  }

  public multiply(value: number): MeasurementObject<Unit, number> {
    return new MeasurementObject(this.value * value, this.unit);
  }

  public divide(value: number): MeasurementObject<Unit, number> {
    return new MeasurementObject(this.value / value, this.unit);
  }

  public modulo(value: number): MeasurementObject<Unit, number> {
    return new MeasurementObject(this.value % value, this.unit);
  }

  public power(value: number): MeasurementObject<Unit, number> {
    return new MeasurementObject(this.value ** value, this.unit);
  }

  public root(value: number): MeasurementObject<Unit, number> {
    return new MeasurementObject(this.value ** (1 / value), this.unit);
  }

  public negate(): MeasurementObject<Unit, number> {
    return new MeasurementObject(-this.value, this.unit);
  }

  public abs(): MeasurementObject<Unit, number> {
    return new MeasurementObject(Math.abs(this.value), this.unit);
  }

  public ceil(): MeasurementObject<Unit, number> {
    return new MeasurementObject(Math.ceil(this.value), this.unit);
  }

  public floor(): MeasurementObject<Unit, number> {
    return new MeasurementObject(Math.floor(this.value), this.unit);
  }

  public round(): MeasurementObject<Unit, number> {
    return new MeasurementObject(Math.round(this.value), this.unit);
  }

  /// MARK: Comparison Operations

  public equals(measurement: Measurement<Unit, number>): boolean;
  public equals(value: number): boolean;
  public equals(
    v:
      | Measurement<Unit, number>
      | number
  ): boolean {
    if (typeof v === "number") return this.value === v;
    return this.value === value(v);
  }

  public lessThan(measurement: Measurement<Unit, number>): boolean;
  public lessThan(value: number): boolean;
  public lessThan(
    v:
      | Measurement<Unit, number>
      | number
  ): boolean {
    if (typeof v === "number") return this.value < v;
    return this.value < value(v);
  }

  public lessThanOrEqual(measurement: Measurement<Unit, number>): boolean;
  public lessThanOrEqual(value: number): boolean;
  public lessThanOrEqual(
    v:
      | Measurement<Unit, number>
      | number
  ): boolean {
    if (typeof v === "number") return this.value <= v;
    return this.value <= value(v);
  }

  public greaterThan(measurement: Measurement<Unit, number>): boolean;
  public greaterThan(value: number): boolean;
  public greaterThan(
    v:
      | Measurement<Unit, number>
      | number
  ): boolean {
    if (typeof v === "number") return this.value > v;
    return this.value > value(v);
  }

  public greaterThanOrEqual(measurement: Measurement<Unit, number>): boolean;
  public greaterThanOrEqual(value: number): boolean;
  public greaterThanOrEqual(
    v:
      | Measurement<Unit, number>
      | number
  ): boolean {
    if (typeof v === "number") return this.value >= v;
    return this.value >= value(v);
  }

}