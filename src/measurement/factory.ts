
import {Measurement} from "./measurement";
import {Conversion} from "../conversion";
import {IsUnion} from "type-fest/source/internal"; // TODO: Revisit to check if this kind of import is really such a good idea.

export type Factory<Symbol extends string> = {
  <Value extends number>(value: Value): Measurement<Symbol, Value>;
  <Value extends number>(measurement: Measurement<Symbol, Value>): Measurement<Symbol, Value>;
};

export function factory<Symbol extends string>(
  arg1: IsUnion<Symbol> extends true
    ? Map<Symbol, Conversion>
    : Symbol
): IsUnion<Symbol> extends true
  ? {[unit in Symbol]: Factory<Symbol>} // Or maybe better investigate this branch??? `? {[unit in Symbol]: Factory<unit>}`
  : Symbol {
  const conversionMap = arg1 instanceof Map ? arg1 : new Map();
  const isBase = ([toBase, fromBase]: Conversion) => toBase(1) === 1 && fromBase(1) === 1;
  const baseUnit = Array.from(conversionMap).find(([_, conversion]) => isBase(conversion))?.[0] as Symbol | undefined;
  return function <Value extends number>(arg2: Value | Measurement<Symbol, Value>): Measurement<Symbol, Value> {
    if (typeof arg2 === "number") return [arg2, arg1];
    const [value, unit] = arg2;
    const conversion = conversionMap.get(unit);
    if (!conversion) throw new Error(`Conversion for ${unit} is not defined.`);
    return unit === baseUnit ? [value, arg1] : [conversion[0](value), arg1];
  };
}

const m = factory("m");
m(55); // [55, "m"]

type Lengths = | "m" | "cm" | "mm";
const lengthConversions = new Map<Lengths, Conversion>([
  ["m", [v => v, v => v]],
  ["cm", [v => v / 100, v => v * 100]],
  ["mm", [v => v / 1000, v => v * 1000]]
]);

const length = factory(lengthConversions);

length.m(123);
length.m(length.cm(123));
length.m(`123dm`);
