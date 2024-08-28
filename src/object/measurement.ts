/**
 * The object representation of a measurement.
 *
 * @template Unit The type of the unit of measurement.
 * @template Value The type of the value of the measurement.
 */
export type Measurement<
  Unit extends string,
  Value extends number = number
> = Number & {
  readonly value: Value,
  readonly unit: Unit
}

/**
 * Create a new measurement object.
 *
 * @template Unit The type of the unit of measurement.
 * @template Value The type of the value of the measurement.
 * @param value The value of the measurement.
 * @param unit The unit of the measurement.
 * @returns A new measurement object.
 */
export const measurement = <
  Unit extends string,
  Value extends number = number
>(value: Value, unit: Unit): Measurement<Unit, Value> => Object.freeze(
  Object.create(null, {
    ...Object.getOwnPropertyDescriptors(value),
    value: {value},
    unit: {value: unit},
  } satisfies PropertyDescriptorsOf<Measurement<Unit, Value>>
  )
);