import {arithmeticOperation} from "./arithmetic-operation";

/// TODO: change of mind AGAIN; it SHOULD operate with other measurements too

export const add = arithmeticOperation.bind(null, (a, b) => a + b);
export const subtract = arithmeticOperation.bind(null, (a, b) => a - b);
export const multiply = arithmeticOperation.bind(null, (a, b) => a * b);
export const divide = arithmeticOperation.bind(null, (a, b) => a / b);
export const power = arithmeticOperation.bind(null, (a, b) => a ** b);
export const root = arithmeticOperation.bind(null, (a, b) => a ** (1 / b));
export const logarithm = arithmeticOperation.bind(null, (a, b) => Math.log(a) / Math.log(b));
