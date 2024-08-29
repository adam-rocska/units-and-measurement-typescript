import {type Measurement} from "../measurement";

/**
 * Represents a collection of alternative measurements for different units.
 *
 * @template Units - The string literal type representing the available units.
 */
export type Alternatives<
  Units extends string
> = {
    readonly [unit in Units]: Measurement<Units, unit, number>
  };
