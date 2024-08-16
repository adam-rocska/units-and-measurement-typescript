import {Measurement} from "./measurement";

export type Unit<Symbol extends string> = {
  <Value extends number>(value: Value): Measurement<Symbol, Value>;
  <Value extends number>(measurement: Measurement<Symbol, Value>): Measurement<Symbol, Value>;
};
