export type Tuple<
  Unit extends string,
  Value extends number = number
> = readonly [value: Value, unit: Unit];

export const tuple = <
  Unit extends string,
  Value extends number = number
>(value: Value, unit: Unit): Tuple<Unit, Value> => [value, unit];

export const isTuple = <
  Unit extends string = string,
  Value extends number = number
>(
  candidate: any,
  unit?: Unit,
  value?: Value
): candidate is Tuple<Unit, Value> => {
  if (!Array.isArray(candidate)) return false;
  if (candidate.length !== 2) return false;

  const [valueCandidate, unitCandidate] = candidate;
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
  measurement: Tuple<Unit, Value>
): Value => measurement[0];

export const unit = <
  Unit extends string,
  Value extends number = number
>(
  measurement: Tuple<Unit, Value>
): Unit => measurement[1];

export function toFixed<
  Unit extends string,
  Value extends number
>(
  measurement: Tuple<Unit, Value>,
  fractionDigits?: number
): Tuple<Unit, number> {
  const v = parseFloat(value(measurement).toFixed(fractionDigits));
  const m = unit(measurement);
  return [v, m];
}

export function toExponential<
  Unit extends string,
  Value extends number
>(
  measurement: Tuple<Unit, Value>,
  fractionDigits?: number
): Tuple<Unit, number> {
  const v = parseFloat(value(measurement).toExponential(fractionDigits));
  const m = unit(measurement);
  return [v, m];
}

export function toPrecision<
  Unit extends string,
  Value extends number
>(
  measurement: Tuple<Unit, Value>,
  precision?: number
): Tuple<Unit, number> {
  const v = parseFloat(value(measurement).toPrecision(precision));
  const m = unit(measurement);
  return [v, m];
}