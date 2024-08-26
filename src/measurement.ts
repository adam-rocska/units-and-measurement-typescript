export type Measurement<Unit extends string, Value extends number> = [
  value: Value,
  unit: Unit,
];

