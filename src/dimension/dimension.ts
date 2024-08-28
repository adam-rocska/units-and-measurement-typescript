import {type Conversions} from "./conversion";
import {DimensionProxyHandler} from "./utilities/dimension-proxy-handler";
import {type Measurement} from "./measurement";
import {measurement} from "./measurement";

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
