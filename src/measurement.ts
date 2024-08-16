export type Measurement<
  Unit extends string,
  Value extends number = number
> =
  | MeasurementTuple<Unit, Value>
  | MeasurementString<Unit, Value>
  | MeasurementObject<Unit, Value>
  ;

export type MeasurementTuple<
  Unit extends string,
  Value extends number = number
> = readonly [value: Value, unit: Unit];
export function MeasurementTuple<
  Unit extends string,
  Value extends number = number
>(from: Measurement<Unit, Value>): MeasurementTuple<Unit, Value> {
  if (from instanceof Array) return [...from];
  if (typeof from === 'string') {
    /// TODO: come back to this typecasting mess and clean it up. It's safe but distasteful.
    const value = parseFloat(from) as Value;
    const unit = from.slice(value.toString().length) as Unit;
    return [value, unit];
  }
  return [from.value, from.unit];
}

export type MeasurementString<
  Unit extends string,
  Value extends number = number
> = `${Value}${Unit}`;
export function MeasurementString<
  Unit extends string,
  Value extends number = number
>(from: Measurement<Unit, Value>): MeasurementString<Unit, Value> {
  if (from instanceof Array) return `${from[0]}${from[1]}`;
  if (typeof from === 'string') return from;
  return `${from.value}${from.unit}`;
}

export type MeasurementObject<
  Unit extends string,
  Value extends number = number
> = {value: Value; unit: Unit;};
export function MeasurementObject<
  Unit extends string,
  Value extends number = number
>(from: Measurement<Unit, Value>): MeasurementObject<Unit, Value> {
  if (from instanceof Array) return {value: from[0], unit: from[1]};
  if (typeof from === 'string') {
    const value = parseFloat(from) as Value;
    const unit = from.slice(value.toString().length) as Unit;
    return {value, unit};
  }
  return {...from};
}