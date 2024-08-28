export type Measurement<
  Unit extends string,
  Value extends number = number
> = Number & {
  readonly value: Value,
  readonly unit: Unit
}

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

export const isMeasurement = <
  Unit extends string = string,
  Value extends number = number
>(
  candidate: any,
  unit?: Unit,
  value?: Value
): candidate is Measurement<Unit, Value> => {
  if (typeof candidate !== "object") return false;
  if (candidate === null) return false;
  if (!("unit" in candidate)) return false;
  if (!("value" in candidate)) return false;

  const {value: valueCandidate, unit: unitCandidate} = candidate;
  if (typeof valueCandidate !== "number") return false;
  if (typeof unitCandidate !== "string") return false;

  if (unit !== undefined && unitCandidate !== unit) return false;
  if (value !== undefined && valueCandidate !== value) return false;

  return true;
};

export const value = <
  Unit extends string,
  Value extends number = number
>(
  measurement: Measurement<Unit, Value>
): Value => measurement.value;

export const unit = <
  Unit extends string,
  Value extends number = number
>(
  measurement: Measurement<Unit, Value>
): Unit => measurement.unit;

export const toFixed = <
  Unit extends string,
  Value extends number
>(
  m: Measurement<Unit, Value>,
  fractionDigits?: number
): Measurement<Unit, number> => measurement(
  parseFloat(value(m).toFixed(fractionDigits)),
  unit(m)
);

export const toExponential = <
  Unit extends string,
  Value extends number
>(
  m: Measurement<Unit, Value>,
  fractionDigits?: number
): Measurement<Unit, number> => measurement(
  parseFloat(value(m).toExponential(fractionDigits)),
  unit(m)
);

export const toPrecision = <
  Unit extends string,
  Value extends number
>(
  m: Measurement<Unit, Value>,
  precision?: number
): Measurement<Unit, number> => measurement(
  parseFloat(value(m).toPrecision(precision)),
  unit(m)
);