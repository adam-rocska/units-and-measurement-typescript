import {type Measurement} from "./measurement";

/**
 * Returns the units of a given measurement.
 *
 * @template M - The measurement type.
 * @param {M} measurement - The measurement object.
 * @returns {Units} - The units of the measurement.
 */
export type UnitsOf<M extends Measurement<any>> =
  M extends Measurement<infer Units, any>
  ? Units
  : never;

/**
 * Retrieves the units of a given measurement.
 *
 * @param measurement - The measurement object.
 * @returns An array of units for the given measurement.
 */
export const units = <U extends string>(
  measurement: Measurement<U>
): U[] => Object.keys(measurement) as U[];
