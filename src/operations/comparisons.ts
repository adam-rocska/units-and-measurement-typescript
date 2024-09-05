import {logicalOperation} from "./logical-operation";
import {value} from "../value";

export const areEqual = logicalOperation.bind(null, (a, b) => value(a) === value(b));
export const greaterThan = logicalOperation.bind(null, (a, b) => value(a) > value(b));
export const greaterThanOrEqual = logicalOperation.bind(null, (a, b) => value(a) >= value(b));
export const lessThan = logicalOperation.bind(null, (a, b) => value(a) < value(b));
export const lessThanOrEqual = logicalOperation.bind(null, (a, b) => value(a) <= value(b));
export const notEqual = logicalOperation.bind(null, (a, b) => value(a) !== value(b));
