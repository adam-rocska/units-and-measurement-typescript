import {Invertible} from "@adam-rocska/invertible";

/**
 * A unit converter that converts between a base unit and a value unit.
 */
export type UnitConverter = Invertible<Base, Value>;

type Value = number;
type Base = number;