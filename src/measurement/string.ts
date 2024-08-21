export type String<
  Unit extends string,
  Value extends number = number
> = `${Value}${Unit}`;

export const string = <
  Unit extends string,
  Value extends number = number
>(value: Value, unit: Unit): String<Unit, Value> => `${value}${unit}`;