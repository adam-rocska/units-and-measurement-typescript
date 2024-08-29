/**
 * The tuple representation of a measurement.
 */
export type Measurement<
  Unit extends string,
  Value extends number = number
> = readonly [value: Value, unit: Unit];

/**
 * Creates a new measurement tuple.
 *
 * @param value The value of the measurement.
 * @param unit The unit of the measurement.
 * @returns A new measurement tuple.
 */
export const measurement = <
  Unit extends string,
  Value extends number = number
>(value: Value, unit: Unit): Measurement<Unit, Value> => [value, unit];
