// function m<Value extends number>(value: Value): Measurement<'m', Value>;
// function m<UnitSymbol extends string, Value extends number>(measurement: Measurement<UnitSymbol, Value>): Measurement<'m', Value>;
// function m() {

// }

export type Measurement<
  UnitSymbol extends string,
  Value extends number = number
> =
  | MeasurementTuple<UnitSymbol, Value>
  | MeasurementString<UnitSymbol, Value>
  | MeasurementObject<UnitSymbol, Value>
  ;

export type MeasurementTuple<
  UnitSymbol extends string,
  Value extends number = number
> = readonly [value: Value, unit: UnitSymbol];
export function MeasurementTuple<
  UnitSymbol extends string,
  Value extends number = number
>(from: Measurement<UnitSymbol, Value>): MeasurementTuple<UnitSymbol, Value> {
  if (from instanceof Array) return [...from];
  if (typeof from === 'string') {
    /// TODO: come back to this typecasting mess and clean it up. It's safe but distasteful.
    const value = parseFloat(from) as Value;
    const unit = from.slice(value.toString().length) as UnitSymbol;
    return [value, unit];
  }
  return [from.value, from.unit];
}

export type MeasurementString<
  UnitSymbol extends string,
  Value extends number = number
> = `${Value}${UnitSymbol}`;
export function MeasurementString<
  UnitSymbol extends string,
  Value extends number = number
>(from: Measurement<UnitSymbol, Value>): MeasurementString<UnitSymbol, Value> {
  if (from instanceof Array) return `${from[0]}${from[1]}`;
  if (typeof from === 'string') return from;
  return `${from.value}${from.unit}`;
}

export type MeasurementObject<
  UnitSymbol extends string,
  Value extends number = number
> = {value: Value; unit: UnitSymbol;};
export function MeasurementObject<
  UnitSymbol extends string,
  Value extends number = number
>(from: Measurement<UnitSymbol, Value>): MeasurementObject<UnitSymbol, Value> {
  if (from instanceof Array) return {value: from[0], unit: from[1]};
  if (typeof from === 'string') {
    const value = parseFloat(from) as Value;
    const unit = from.slice(value.toString().length) as UnitSymbol;
    return {value, unit};
  }
  return {...from};
}