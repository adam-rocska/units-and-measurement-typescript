export type String<
  Unit extends string,
  Value extends number = number
> = `${Value}${Unit}`;

export const string = <
  Unit extends string,
  Value extends number = number
>(value: Value, unit: Unit): String<Unit, Value> => `${value}${unit}`;

export const isString = <
  Unit extends string = string,
  Value extends number = number
>(
  candidate: any,
  unit?: Unit,
  value?: Value
): candidate is String<Unit, Value> => {
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
  measurement: String<Unit, Value>
): Value => parseFloat(measurement) as Value; // This type-cast should be safe, since String<Unit, Value> is supposed to prevent a non-matching type.

export const unit = <
  Unit extends string,
  Value extends number = number
>(
  measurement: String<Unit, Value>
): Unit => {
  return measurement.slice(value(measurement).toString().length) as Unit; // This type-cast should be safe, since String<Unit, Value> is supposed to prevent a non-matching type.
};

export function toFixed<
  Unit extends string,
  Value extends number
>(
  measurement: String<Unit, Value>,
  fractionDigits?: number
): String<Unit, number> {
  const v = value(measurement).toFixed(fractionDigits);
  const m = unit(measurement);
  return `${v}${m}` as String<Unit, number>;
}

export function toExponential<
  Unit extends string,
  Value extends number
>(
  measurement: String<Unit, Value>,
  fractionDigits?: number
): String<Unit, number> {
  const v = value(measurement).toExponential(fractionDigits);
  const m = unit(measurement);
  return `${v}${m}` as String<Unit, number>;
}

export function toPrecision<
  Unit extends string,
  Value extends number
>(
  measurement: String<Unit, Value>,
  precision?: number
): String<Unit, number> {
  const v = value(measurement).toPrecision(precision);
  const m = unit(measurement);
  return `${v}${m}` as String<Unit, number>;
}