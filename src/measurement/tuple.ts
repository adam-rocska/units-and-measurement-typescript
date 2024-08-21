export type Tuple<
  Unit extends string,
  Value extends number = number
> = readonly [value: Value, unit: Unit];

export const tuple = <
  Unit extends string,
  Value extends number = number
>(value: Value, unit: Unit): Tuple<Unit, Value> => [value, unit];
