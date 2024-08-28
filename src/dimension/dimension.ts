import {type Conversions} from "./conversion";
import * as o from "../measurement/object";
import {MeasurementProxyHandler} from "./utilities/measurement-proxy-handler";
import {DimensionProxyHandler} from "./utilities/dimension-proxy-handler";

/// MARK: Dimension

/**
 * A dimension is a map of units to creation functions.
 * Each function takes a number value and returns a
 * dimension measurement.
 * @template Units - The units of the dimension.
 */
export type Dimension<Units extends string> = {
  readonly [unit in Units]: (value: number) => Measurement<Units>
};

/**
 * Creates a dimension from a set of conversions.
 * @param conversions - The conversions for the dimension.
 * @returns The dimension.
 * @template Units - The units of the dimension.
 */
export const dimension = <Units extends string>(
  conversions: Conversions<Units>
): Dimension<Units> => new Proxy(
  Object.create(null),
  new DimensionProxyHandler(conversions, measurement)
);

/// MARK: Measurement

export type Alternatives<
  Units extends string
> = {[unit in Units]: Measurement<Units, unit, number>};

/**
 * Represents a dimension measurement.
 * @template Units - The units of the dimension.
 */
export type Measurement<
  Units extends string,
  Unit extends Units = Units,
  Value extends number = number
> =
  & o.Measurement<Unit, Value>
  & Alternatives<Units>;

/**
 * Creates a dimension measurement.
 * @param conversions - The conversions for the dimension.
 * @param value - The value of the measurement.
 * @param unit - The unit of the measurement.
 * @returns The measurement.
 * @template Units - The units of the dimension.
 * @template Unit - The unit of the measurement.
 */
export const measurement = <
  Units extends string,
  Unit extends Units
>(
  conversions: Conversions<Units>,
  value: number,
  unit: Unit
): Measurement<Units> => new Proxy(
  Object.create(null, {
    value: {value, writable: true},
    unit: {value: unit, writable: true},
  }),
  new MeasurementProxyHandler(conversions)
);

/**
 * Type predicate, determining if a candidate is a dimension measurement.
 * @param candidate - The candidate to check.
 * @param units - The units of the dimension.
 * @returns The predicate result.
 */
export const isMeasurement = <
  Unit extends string
>(
  candidate: any,
  units: readonly Unit[]
): candidate is Measurement<Unit> => {
  if (typeof candidate !== "object") return false;
  if (candidate === null) return false;
  if (units.length === 0) units = Object.keys(candidate) as Unit[];
  if (units.length === 0) return false;

  for (const unit of units) {
    if (!(unit in candidate)) return false;
    if (typeof candidate[unit] !== "number") return false;
  }

  return o.isMeasurement(candidate);
};

/// MARK: Utility functions

export const toFixed = <
  Units extends string
>(
  measurement: Measurement<Units>,
  fractionDigits?: number
): Measurement<Units> => {
  const value = measurement.value.toFixed(fractionDigits);
  const unit = measurement.unit;
  return Object.create(measurement, {
    value: {value, writable: true},
    unit: {value: unit, writable: true},
  });
};
