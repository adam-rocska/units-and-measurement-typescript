type Unit = string;

export type Measurement<
  UnitType extends Unit,
  Value extends number = number
> =
  | MeasurementTuple<UnitType, Value>
  | MeasurementString<UnitType, Value>
  | MeasurementObject<UnitType, Value>
  ;

export type MeasurementTuple<
  UnitType extends Unit,
  Value extends number = number
> = readonly [value: Value, unit: UnitType];
export function MeasurementTuple<
  UnitType extends Unit,
  Value extends number = number
>(from: Measurement<UnitType, Value>): MeasurementTuple<UnitType, Value> {
  if (from instanceof Array) return [...from];
  if (typeof from === 'string') {
    /// TODO: come back to this typecasting mess and clean it up. It's safe but distasteful.
    const value = parseFloat(from) as Value;
    const unit = from.slice(value.toString().length) as UnitType;
    return [value, unit];
  }
  return [from.value, from.unit];
}

export type MeasurementString<
  UnitType extends Unit,
  Value extends number = number
> = `${Value}${UnitType}`;
export function MeasurementString<
  UnitType extends Unit,
  Value extends number = number
>(from: Measurement<UnitType, Value>): MeasurementString<UnitType, Value> {
  if (from instanceof Array) return `${from[0]}${from[1]}`;
  if (typeof from === 'string') return from;
  return `${from.value}${from.unit}`;
}

export type MeasurementObject<
  UnitType extends Unit,
  Value extends number = number
> = {value: Value; unit: UnitType;};
export function MeasurementObject<
  UnitType extends Unit,
  Value extends number = number
>(from: Measurement<UnitType, Value>): MeasurementObject<UnitType, Value> {
  if (from instanceof Array) return {value: from[0], unit: from[1]};
  if (typeof from === 'string') {
    const value = parseFloat(from) as Value;
    const unit = from.slice(value.toString().length) as UnitType;
    return {value, unit};
  }
  return {...from};
}