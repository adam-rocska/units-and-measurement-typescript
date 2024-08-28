export type Measurement<
  Unit extends string,
  Value extends number = number
> = readonly [value: Value, unit: Unit];

export const measurement = <
  Unit extends string,
  Value extends number = number
>(value: Value, unit: Unit): Measurement<Unit, Value> => [value, unit];

export const isMeasurement = <
  Unit extends string = string,
  Value extends number = number
>(
  candidate: any,
  unit?: Unit,
  value?: Value
): candidate is Measurement<Unit, Value> => {
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
  measurement: Measurement<Unit, Value>
): Value => measurement[0];

export const unit = <
  Unit extends string,
  Value extends number = number
>(
  measurement: Measurement<Unit, Value>
): Unit => measurement[1];

export const toFixed = <
  Unit extends string,
  Value extends number
>(
  measurement: Measurement<Unit, Value>,
  fractionDigits?: number
): Measurement<Unit, number> => [
    parseFloat(value(measurement).toFixed(fractionDigits)),
    unit(measurement)
  ];

export const toExponential = <
  Unit extends string,
  Value extends number
>(
  measurement: Measurement<Unit, Value>,
  fractionDigits?: number
): Measurement<Unit, number> => [
    parseFloat(value(measurement).toExponential(fractionDigits)),
    unit(measurement)
  ];

export const toPrecision = <
  Unit extends string,
  Value extends number
>(
  measurement: Measurement<Unit, Value>,
  precision?: number
): Measurement<Unit, number> => [
    parseFloat(value(measurement).toPrecision(precision)),
    unit(measurement)
  ];