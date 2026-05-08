import {linearConversion, dimension, type Measurement} from "../dimension";
import {DurationSymbol} from "./symbols";

export type Duration = Measurement<DurationSymbol>;
export const duration = dimension<DurationSymbol>({
  "sec": linearConversion(1),
  "min": linearConversion(60),
  "hr": linearConversion(3600)
});

export const seconds = duration["sec"];
export const minutes = duration["min"];
export const hours = duration["hr"];
