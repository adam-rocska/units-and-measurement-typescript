/**
 * The string representation of a measurement.
 */
export type Measurement<
  Unit extends string,
  Value extends number = number
> = `${Value}${Unit}`;

/**
 * Create a new measurement string.
 *
 * @template Unit The type of the unit of measurement.
 * @template Value The type of the value of the measurement.
 * @param value The value of the measurement.
 * @param unit The unit of the measurement.
 * @returns A new measurement string.
 */
export const measurement = <
  Unit extends string,
  Value extends number = number
>(value: Value, unit: Unit): Measurement<Unit, Value> => `${value}${unit}`;
