import {type Measurement} from "../measurement";

/**
 * A type that represents a set of alternatives for a given
 * dimension measurement.
 */
export type Alternatives<
  Units extends string
> = {
    readonly [unit in Units]: Measurement<Units, unit, number>
  };
