import * as string from "./string";
import * as tuple from "./tuple";
import * as object from "./object";
import * as dimension from "./dimension";

/**
 * Represents a measurement with a specific unit and value.
 *
 * @template Unit - The type of unit for the measurement.
 * @template Value - The type of value for the measurement.
 */
export type Measurement<Unit extends string, Value extends number = number> =
  | string.Measurement<Unit, Value>
  | tuple.Measurement<Unit, Value>
  | object.Measurement<Unit, Value>
  | dimension.Measurement<Unit, Unit, Value>
  ;
