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

export type MeasurementString<
  UnitType extends Unit,
  Value extends number = number
> = `${Value}${UnitType}`;

export type MeasurementObject<
  UnitType extends Unit,
  Value extends number = number
> = {value: Value; unit: UnitType;};
