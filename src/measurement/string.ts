export type Measurement<
  Unit extends string,
  Value extends number = number
> = `${Value}${Unit}`;

export const measurement = <
  Unit extends string,
  Value extends number = number
>(value: Value, unit: Unit): Measurement<Unit, Value> => `${value}${unit}`;

export const isMeasurement = <
  Unit extends string = string,
  Value extends number = number
>(
  candidate: any,
  unit?: Unit,
  value?: Value
): candidate is Measurement<Unit, Value> => {
  if (typeof candidate !== "string") return false;

  const valueCandidate = parseFloat(candidate);
  if (Number.isNaN(valueCandidate)) return false;

  const unitCandidate = candidate.replace(valueCandidate.toString(), "").trim();
  if (!unitCandidate) return false;

  if (unit !== undefined && unitCandidate !== unit) return false;
  if (value !== undefined && valueCandidate !== value) return false;

  if (`${valueCandidate}${unitCandidate}` !== candidate) return false;

  return true;
};

export const value = <
  Unit extends string,
  Value extends number = number
>(
  measurement: Measurement<Unit, Value>
): Value => parseFloat(measurement) as Value; // This type-cast should be safe, since Measurement<Unit, Value> is supposed to prevent a non-matching type.

export const unit = <
  Unit extends string,
  Value extends number = number
>(
  measurement: Measurement<Unit, Value>
): Unit => {
  return measurement.slice(value(measurement).toString().length) as Unit; // This type-cast should be safe, since Measurement<Unit, Value> is supposed to prevent a non-matching type.
};

export const toFixed = <
  Unit extends string,
  Value extends number
>(
  measurement: Measurement<Unit, Value>,
  fractionDigits?: number
): Measurement<Unit, number> => {
  const v = value(measurement).toFixed(fractionDigits);
  const m = unit(measurement);
  return `${v}${m}` as Measurement<Unit, number>;
};

export const toExponential = <
  Unit extends string,
  Value extends number
>(
  measurement: Measurement<Unit, Value>,
  fractionDigits?: number
): Measurement<Unit, number> => {
  const v = value(measurement).toExponential(fractionDigits);
  const m = unit(measurement);
  return `${v}${m}` as Measurement<Unit, number>;
};

export const toPrecision = <
  Unit extends string,
  Value extends number
>(
  measurement: Measurement<Unit, Value>,
  precision?: number
): Measurement<Unit, number> => {
  const v = value(measurement).toPrecision(precision);
  const m = unit(measurement);
  return `${v}${m}` as Measurement<Unit, number>;
};